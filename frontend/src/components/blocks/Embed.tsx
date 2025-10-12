"use client";

import { useEffect, useState } from "react";
import Container from "@/components/base/Container";
import {BlockEmbed as TBlockEmbed} from "@/types";

export default function Embed({ headline, code_snippet }: TBlockEmbed) {
  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    setHtml(code_snippet.value);
  }, [code_snippet]);

  return (
    <Container spacing="large">
      {/* Headline */}
      {headline && (
        <h3 className="text-2xl font-heading mb-4 text-foreground">{headline}</h3>
      )}
      {/* Embed */}
      {html && (
        <div
          className="relative w-full h-auto rounded-3xl overflow-hidden"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}
    </Container>
  );
}
