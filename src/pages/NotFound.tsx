import { A } from "../components/A";

export default function NotFound() {
  return (
    <header className="page-head">
      <div className="eyebrow">Not found</div>
      <h1>That page does not exist</h1>
      <p className="lead">Try the <A href="/">overview</A> or the menu.</p>
    </header>
  );
}
