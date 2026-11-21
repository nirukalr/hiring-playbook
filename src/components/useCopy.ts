import { useRef, useState } from "react";

/** Copy text to the clipboard; if that is blocked, select the source element so Ctrl+C works. */
export function useCopy(getText: () => string, getSource: () => HTMLElement | null) {
  const [label, setLabel] = useState<string | null>(null);
  const timer = useRef<number>();
  const flash = (text: string, ms: number) => {
    setLabel(text);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setLabel(null), ms);
  };
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(getText());
      flash("Copied", 1500);
    } catch {
      const el = getSource();
      if (el) {
        const range = document.createRange();
        range.selectNodeContents(el);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
      }
      flash("Selected, press Ctrl+C", 2500);
    }
  };
  return { copy, label };
}
