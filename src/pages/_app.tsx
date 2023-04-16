import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import "@/styles/Layout/_header.scss";
import "@/styles/Layout/_layout.scss";
import "@/styles/Layout/_sidenav.scss";
import type { AppProps } from "next/app";
import { initializeIcons } from "@fluentui/react/lib/Icons";

initializeIcons(undefined, { disableWarnings: true });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
