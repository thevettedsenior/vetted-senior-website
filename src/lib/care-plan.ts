import { useEffect, useState } from "react";
export type PlanItem = {
  id: string;
  title: string;
  detail: string;
  done: boolean;
};
const KEY = "tvs-family-plan-v1";
const EVENT = "tvs-plan-change";
let fallback: PlanItem[] = [];
let storageUsable = true;
function read(): PlanItem[] {
  if (!storageUsable) return fallback;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return fallback;
    const value: unknown = JSON.parse(raw);
    if (!Array.isArray(value)) return fallback;
    fallback = value
      .filter(
        (x): x is PlanItem =>
          !!x &&
          typeof x.id === "string" &&
          typeof x.title === "string" &&
          typeof x.detail === "string" &&
          typeof x.done === "boolean" &&
          x.id.length < 100 &&
          x.title.length < 250 &&
          x.detail.length < 2000,
      )
      .slice(0, 40);
  } catch {
    /* Session memory remains available when storage is blocked. */
  }
  return fallback;
}
export function useCarePlan() {
  const [items, setItems] = useState<PlanItem[]>([]);
  const [ready, setReady] = useState(false);
  const [persistent, setPersistent] = useState(true);
  useEffect(() => {
    const sync = () => setItems([...read()]);
    sync();
    setReady(true);
    try {
      const test = `${KEY}-check`;
      localStorage.setItem(test, "1");
      localStorage.removeItem(test);
    } catch {
      setPersistent(false);
    }
    const storage = (event: StorageEvent) => {
      if (event.key === KEY || event.key === null) {
        fallback = [];
        sync();
      }
    };
    const local = (event: Event) => {
      setPersistent((event as CustomEvent<boolean>).detail);
      sync();
    };
    window.addEventListener("storage", storage);
    window.addEventListener(EVENT, local);
    return () => {
      window.removeEventListener("storage", storage);
      window.removeEventListener(EVENT, local);
    };
  }, []);
  function update(transform: (current: PlanItem[]) => PlanItem[]) {
    const next = transform(read());
    fallback = next;
    let saved = true;
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
      storageUsable = true;
    } catch {
      saved = false;
      storageUsable = false;
    }
    setPersistent(saved);
    setItems([...next]);
    window.dispatchEvent(new CustomEvent(EVENT, { detail: saved }));
  }
  return {
    items,
    ready,
    persistent,
    add: (item: Omit<PlanItem, "done">) =>
      update((current) =>
        current.some((x) => x.id === item.id)
          ? current.map((x) =>
              x.id === item.id ? { ...item, done: x.done } : x,
            )
          : [...current, { ...item, done: false }],
      ),
    remove: (id: string) =>
      update((current) => current.filter((x) => x.id !== id)),
    toggle: (id: string) =>
      update((current) =>
        current.map((x) => (x.id === id ? { ...x, done: !x.done } : x)),
      ),
  };
}
