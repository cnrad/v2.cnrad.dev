import { Html, Head, Main, NextScript } from "next/document";
import { CSideScript } from "@c-side/react";

export default function Document() {
    return (
        <Html className="dark">
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
