import Header from "./Header";
import Footer from "./Footer";
import { Inter } from "next/font/google";

type Props = { children: React.ReactNode };

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main
        // className={`${inter.className} overflow-y-scroll max-h-screen snap-y snap-mandatory`}
        className={`${inter.className} container mx-auto px-5 sm:px-10 lg:px-20 snap-y snap-mandatory`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
