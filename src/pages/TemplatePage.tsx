import { CopyBlock } from "../components/CopyBlock";
import type { Template } from "../content/types";

export default function TemplatePage({ template: t }: { template: Template }) {
  return (
    <>
      <header className="page-head">
        <div className="eyebrow">Template</div>
        <h1>{t.title}</h1>
        <p className="lead">{t.meta}</p>
      </header>
      <CopyBlock text={t.body} editUrl={t.editUrl} />
    </>
  );
}
