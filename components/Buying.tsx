import React from "react";
import Link from "next/link";

import Container from "./Container";
import HeadingText from "./HeadingText";

type Props = {};

import { BsCheckAll } from "react-icons/bs";
import { GoPlay } from "react-icons/go";

export default function Buying({}: Props) {
  return (
    <div className="background-style relative py-24 px-4 md:px-8 isolate text-white">
      <Container className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <HeadingText className="text-3xl md:text-4xl font-bold leading-[1.5] md:leading-[1.4]">
            Having the video & PowerPoint
          </HeadingText>
          <p className="text-lg">
            We provide you the best content to learn something very easily. The
            visual descriptions of development principles that We creates are
            very clear.
          </p>
          <ul className="text-base md:text-lg">
            <li className="flex gap-2">
              <BsCheckAll className="text-xl text-green-600" />
              They are very short
            </li>
            <li className="flex gap-2 items-center">
              <BsCheckAll className="text-xl text-green-600" />
              Making content for HTML, CSS & JS
            </li>
            <li className="flex gap-2 items-center">
              <BsCheckAll className="text-xl text-green-600" />
              They are free
            </li>
          </ul>
          <Link
            href={"/pricing"}
            className="inline-block bg-black text-white py-2 px-8 rounded-md shadow-button"
          >
            Buy Now
          </Link>
        </div>
        <div className="relative isolate">
          <svg
            viewBox="-0.12979372698077785 0 32.152389301176754 32"
            xmlns="http://www.w3.org/2000/svg"
            width="300"
            height="278"
            className="w-[200px] h-[178px] md:w-[300px] md:h-[278px] lg:absolute top-[-200px] right-0 rotate-45"
          >
            <path
              d="M18 2A14.041 14.041 0 0 0 4 16l17.737 3.737z"
              fill="#ed6c47"
            />
            <path
              d="M18 2a14.041 14.041 0 0 1 14 14l-7 4.758L18 16z"
              fill="#ff8f6b"
            />
            <path
              d="M18 30a14.041 14.041 0 0 0 14-14H4a14.041 14.041 0 0 0 14 14z"
              fill="#d35230"
            />
            <path
              d="M16.666 7h-9.36a13.914 13.914 0 0 0 .93 19h8.43A1.337 1.337 0 0 0 18 24.667V8.333A1.337 1.337 0 0 0 16.666 7z"
              opacity=".1"
            />
            <path
              d="M15.666 8H6.54a13.906 13.906 0 0 0 2.845 19h6.282A1.337 1.337 0 0 0 17 25.667V9.333A1.337 1.337 0 0 0 15.666 8z"
              opacity=".2"
            />
            <path
              d="M15.666 8H6.54a13.89 13.89 0 0 0 .766 17h8.361A1.337 1.337 0 0 0 17 23.667V9.333A1.337 1.337 0 0 0 15.666 8z"
              opacity=".2"
            />
            <path
              d="M14.666 8H6.54a13.89 13.89 0 0 0 .766 17h7.361A1.337 1.337 0 0 0 16 23.667V9.333A1.337 1.337 0 0 0 14.666 8z"
              opacity=".2"
            />
            <path
              d="M1.333 8h13.334A1.333 1.333 0 0 1 16 9.333v13.334A1.333 1.333 0 0 1 14.667 24H1.333A1.333 1.333 0 0 1 0 22.667V9.333A1.333 1.333 0 0 1 1.333 8z"
              fill="#c43e1c"
            />
            <path
              d="M7.997 11a4.168 4.168 0 0 1 2.755.805 2.878 2.878 0 0 1 .956 2.331 2.726 2.726 0 0 1-.473 1.588 3.164 3.164 0 0 1-1.344 1.186 4.57 4.57 0 0 1-2.02.424h-1.91V21H4V11zM5.96 15.683h1.687a2.194 2.194 0 0 0 1.492-.444 1.107 1.107 0 0 0 .504-1.026q0-1.659-1.933-1.659H5.96z"
              fill="#f9f7f7"
            />
            <path d="M0 0h32v32H0z" fill="none" />
          </svg>
          <GoPlay className="text-9xl -rotate-12 absolute top-[0px] right-0 sm:right-[20%] lg:right-[30%] -z-10" />
        </div>
      </Container>
    </div>
  );
}
