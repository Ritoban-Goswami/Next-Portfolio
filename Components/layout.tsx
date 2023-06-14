import Header from "./Header";
import Footer from "./Footer";
import { AppProps } from "next/app";

type Props = { children: React.ReactNode; pageProps: any };

export default function Layout({ children, pageProps }: Props) {
  const { links } = pageProps;
  return (
    <>
      <Header />
      <main
        // className={`${inter.className} overflow-y-scroll max-h-screen snap-y snap-mandatory`}
        className="container mx-auto px-5 sm:px-10 lg:px-20 snap-y snap-mandatory"
      >
        {children}
      </main>
      <Footer links={links} />
    </>
  );
}
