import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}

const ButtonLink = ({ href, children }: Props) => {
  return (
    <Link
      href={href}
      className="rounded bg-gradient-to-r from-pink-500 to-yellow-500 px-4 py-2 text-white hover:from-green-400 hover:to-blue-500"
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
