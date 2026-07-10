import { useEffect, useRef, useState } from "react";
import { BadgeCheck, Pause, Play, Printer, RotateCcw } from "lucide-react";

/**
 * "The short version" box: three takeaways for readers who scan before
 * they read. Renders nothing until the entry has takeaways.
 */
export function ShortVersion({ takeaways }: { takeaways?: string[] }) {
  if (!takeaways || takeaways.length === 0) return null;

  return (
    <div className="rounded-2xl border border-gold/50 bg-cream p-6 md:p-7">
      <p className="eyebrow">The short version</p>
      <ul className="mt-4 space-y-3 text-lg leading-relaxed">
        {takeaways.map((point) => (
          <li key={point} className="flex items-start gap-3">
            <BadgeCheck
              size={22}
              className="mt-1 shrink-0 text-gold-deep"
              aria-hidden
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Split text into sentence-sized chunks. Chrome silently stops long
 * utterances, so each sentence is queued as its own utterance. */
function toChunks(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

function pickVoice(): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis.getVoices();
  return (
    voices.find((v) => v.lang === "en-CA") ??
    voices.find((v) => v.lang.startsWith("en") && v.localService) ??
    voices.find((v) => v.lang.startsWith("en")) ??
    null
  );
}

/**
 * Reads the article aloud using the browser's built-in speech synthesis.
 * `sourceId` is the DOM id of the element whose text is read.
 */
function ListenButton({ sourceId, label }: { sourceId: string; label: string }) {
  const [supported, setSupported] = useState(false);
  const [status, setStatus] = useState<"idle" | "playing" | "paused">("idle");
  // Tracks whether this component started the current speech, so cleanup
  // doesn't cancel someone else's speech.
  const speakingRef = useRef(false);

  useEffect(() => {
    setSupported(typeof window !== "undefined" && "speechSynthesis" in window);
    return () => {
      if (speakingRef.current) window.speechSynthesis.cancel();
    };
  }, []);

  if (!supported) return null;

  function stop() {
    window.speechSynthesis.cancel();
    speakingRef.current = false;
    setStatus("idle");
  }

  function start() {
    const source = document.getElementById(sourceId);
    if (!source) return;
    window.speechSynthesis.cancel();

    const chunks = toChunks(source.innerText);
    if (chunks.length === 0) return;

    const voice = pickVoice();
    chunks.forEach((chunk, i) => {
      const utterance = new SpeechSynthesisUtterance(chunk);
      utterance.rate = 0.95;
      if (voice) utterance.voice = voice;
      if (i === chunks.length - 1) {
        utterance.onend = () => {
          speakingRef.current = false;
          setStatus("idle");
        };
      }
      window.speechSynthesis.speak(utterance);
    });
    speakingRef.current = true;
    setStatus("playing");
  }

  function toggle() {
    if (status === "idle") {
      start();
    } else if (status === "playing") {
      window.speechSynthesis.pause();
      setStatus("paused");
    } else {
      window.speechSynthesis.resume();
      setStatus("playing");
    }
  }

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={toggle}
        className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-primary px-5 py-2.5 text-base font-semibold text-primary transition-colors hover:bg-primary/5"
      >
        {status === "playing" ? (
          <Pause size={20} aria-hidden />
        ) : (
          <Play size={20} aria-hidden />
        )}
        {status === "idle" ? label : status === "playing" ? "Pause" : "Resume"}
      </button>
      {status !== "idle" && (
        <button
          type="button"
          onClick={stop}
          aria-label="Stop reading and start over"
          className="inline-flex min-h-12 items-center gap-2 rounded-full border border-border px-4 py-2.5 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary"
        >
          <RotateCcw size={18} aria-hidden />
          Start over
        </button>
      )}
    </div>
  );
}

/**
 * Listen + print controls shown at the top of guides and articles.
 * Hidden when printing (see @media print rules in styles.css).
 */
export function ArticleTools({
  sourceId,
  kind = "guide",
}: {
  sourceId: string;
  kind?: "guide" | "article";
}) {
  return (
    <div className="no-print flex flex-wrap items-center gap-3">
      <ListenButton sourceId={sourceId} label={`Listen to this ${kind}`} />
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-primary px-5 py-2.5 text-base font-semibold text-primary transition-colors hover:bg-primary/5"
      >
        <Printer size={20} aria-hidden />
        Print this {kind}
      </button>
    </div>
  );
}
