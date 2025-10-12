"use client";

import Container from "@/components/base/Container";
import Image from "next/image";
import {BlockImageText as TBlockImageText} from "@/types";

export default function ImageText({ headline, text, image, text_on_the_right }: TBlockImageText) {
  return (
    <Container spacing="large">
      <div
        className={`flex flex-col gap-10 md:gap-24 justify-between items-center ${
          text_on_the_right ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        {/* Image */}
        <div className="w-full md:w-2/4 h-auto rounded-3xl overflow-hidden">
          <Image
            src={image.permalink}
            alt={headline}
            width={800}
            height={500}
            className="w-full h-[500px] object-cover"
          />
        </div>
        {/* Text */}
        <div className="w-full md:w-2/4">
          { headline && (
            <h3 className="text-2xl font-heading mb-4">{headline}</h3>
          )}
          <p className="text-lg leading-relaxed">{text}</p>
        </div>
      </div>
    </Container>
  );
}
