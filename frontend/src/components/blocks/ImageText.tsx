"use client";

import Container from "@/components/base/Container";
import Image from "next/image";

interface ImageTextProps {
  headline?: string;
  text: string;
  image: string;
  text_on_the_right?: boolean;
}

export default function ImageText({headline, text, image, text_on_the_right}: ImageTextProps) {
  return (
    <Container>
      <div
        className={`flex flex-col gap-4 justify-between items-center ${
          text_on_the_right ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        <div className="w-full md:w-2/6 h-auto rounded-3xl overflow-hidden">
          <Image
            src={image.permalink}
            alt={headline}
            width={800}
            height={500}
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div className="w-full md:w-3/6">
          { headline && (
            <h3 className="text-2xl font-heading mb-4">{headline}</h3>
          )}
          <p className="text-lg leading-relaxed">{text}</p>
        </div>
      </div>
    </Container>
  );
}
