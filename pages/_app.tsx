import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/Components/layout";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ritoban Goswami | Web Designer, Front-End Web Developer</title>
        <meta
          name="description"
          content="Discover the portfolio of Ritoban Goswami, a talented web designer and front-end web developer. Browse his projects and experience in designing and developing beautiful and functional websites and web applications. Contact Ritoban today to bring your web project to life."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <ThemeProvider attribute="class">
        <Layout pageProps={...pageProps}>
          <Component className={`${inter.className}`} {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
