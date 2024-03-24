import "#app/tailwind.css";

import { Links, Meta, Scripts, ScrollRestoration } from "@remix-run/react";
import type { PropsWithChildren, ReactNode } from "react";

export function Layout({ children }: PropsWithChildren): ReactNode {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Route(): ReactNode {
  return <div className="text-foo">Hello world</div>;
}
