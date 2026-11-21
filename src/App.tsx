import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { routes } from "./routes";
import NotFound from "./pages/NotFound";

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map((r) => <Route key={r.path} path={r.path} element={r.element} />)}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
