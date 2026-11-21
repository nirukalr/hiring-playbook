import { Link } from "react-router-dom";
import type { AnchorHTMLAttributes } from "react";

/** Internal paths ("/process") use the router; everything else is a normal link. */
export function A({ href = "", children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (href.startsWith("/")) return <Link to={href} {...rest}>{children}</Link>;
  return <a href={href} {...rest}>{children}</a>;
}
