import { useRef } from "react";
import { useCopy } from "./useCopy";

/** A preformatted block with a Copy button. */
export function CopyBlock({ text, editUrl }: { text: string; editUrl?: string }) {
  const pre = useRef<HTMLPreElement>(null);
  const { copy, label } = useCopy(() => text, () => pre.current);
  return (
    <section className="block tpl-body">
      <div className="tpl-tools">
        <span className="small muted">
          Editable copy: {editUrl ? <a href={editUrl}>open</a> : <i>add link</i>}
        </span>
        <button className="btn" type="button" onClick={copy}>{label ?? "Copy"}</button>
      </div>
      <pre ref={pre}>{text}</pre>
    </section>
  );
}
