import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={`container mx-auto ${inter.variable} font-inter`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
