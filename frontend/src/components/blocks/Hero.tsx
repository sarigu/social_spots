"use client";

import Image from "next/image";
import Container from "@/components/base/Container";
import {Image as TImage} from "@/types";

interface HeroProps {
  headline: string;
  image: TImage;
}

export default function Hero({ headline, image }: HeroProps) {
  return (
    <Container>
      <div className="relative w-full h-auto rounded-3xl overflow-hidden">
        {/* Background Image */}
        <Image
          src={image.permalink}
          alt={headline}
          width={2000}
          height={1000}
          className="w-full h-[80vh] object-cover"
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] via-[rgba(0,0,0,0.2)] to-transparent" />

        {/* Headline */}
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="max-w-2xl">{headline}</h1>
        </div>
      </div>
    </Container>
  );
}
