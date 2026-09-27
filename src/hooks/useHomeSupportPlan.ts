import { useEffect, useState } from "react";
import {
  emptyHomeSupport,
  HOME_SUPPORT_KEY,
  parseHomeSupport,
  type HomeSupportDraft,
} from "@/lib/home-support";

const EVENT = "tvs-home-support-change";
let memory = emptyHomeSupport();
let storageUsable = true;
function read() {
  if (!storageUsable) return memory;
  try {
    const raw = localStorage.getItem(HOME_SUPPORT_KEY);
    memory = raw ? parseHomeSupport(JSON.parse(raw)) : emptyHomeSupport();
  } catch {
    // Keep current visit data if storage is blocked or its contents are malformed.
  }
  return memory;
}
export function useHomeSupportPlan() {
  const [draft, setDraft] = useState<HomeSupportDraft>(emptyHomeSupport);
  const [ready, setReady] = useState(false);
  const [persistent, setPersistent] = useState(true);
  useEffect(() => {
    setDraft(read());
    try {
      localStorage.setItem(`${HOME_SUPPORT_KEY}-check`, "1");
      localStorage.removeItem(`${HOME_SUPPORT_KEY}-check`);
      storageUsable = true;
    } catch {
      storageUsable = false;
    }
    setPersistent(storageUsable);
    setReady(true);
    const local = () => {
      setDraft({ ...memory });
      setPersistent(storageUsable);
    };
    const storage = (event: StorageEvent) => {
      if (event.key === HOME_SUPPORT_KEY || event.key === null) {
        memory = emptyHomeSupport();
        setDraft(read());
      }
    };
    window.addEventListener(EVENT, local);
    window.addEventListener("storage", storage);
    return () => {
      window.removeEventListener(EVENT, local);
      window.removeEventListener("storage", storage);
    };
  }, []);
  function update(transform: (current: HomeSupportDraft) => HomeSupportDraft) {
    memory = parseHomeSupport(transform(read()));
    try {
      localStorage.setItem(HOME_SUPPORT_KEY, JSON.stringify(memory));
      storageUsable = true;
    } catch {
      storageUsable = false;
    }
    setDraft({ ...memory });
    setPersistent(storageUsable);
    window.dispatchEvent(new Event(EVENT));
  }
  function clear() {
    memory = emptyHomeSupport();
    try {
      localStorage.removeItem(HOME_SUPPORT_KEY);
    } catch {
      storageUsable = false;
    }
    setDraft({ ...memory });
    setPersistent(storageUsable);
    window.dispatchEvent(new Event(EVENT));
  }
  return { draft, ready, persistent, update, clear };
}
