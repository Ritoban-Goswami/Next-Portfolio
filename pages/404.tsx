import React from "react";
import Image from "next/image";
import Link from "next/link";
import errorGif from "../public/bubble-gum-error-404.gif";

type Props = {};

export default function Custom404({}: Props) {
  return (
    <div className="h-[90vh] gap-y-16 flex flex-col items-center justify-center">
      <Image src={errorGif} alt="404 Illustration" />
      <div className="flex flex-col items-center">
        <h1 className="mb-4 text-2xl font-bold">Something's missing.</h1>
        <Link href="/" className="text-primary-red font-semibold">
          Go back
        </Link>
      </div>
    </div>
  );
}
