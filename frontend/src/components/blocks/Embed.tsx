"use client";

import { useEffect, useState } from "react";
import Container from "@/components/base/Container";
import { useExternalScript } from "@/hooks/useExternalScript";
import { BlockEmbed as TBlockEmbed } from "@/types";

export default function Embed({ headline, code_snippet }: TBlockEmbed) {
  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    if (!code_snippet.value) return;
    setHtml(code_snippet.value);
  }, [code_snippet]);

  useExternalScript(
    "https://tally.so/widgets/embed.js",
    !!html && html.includes("tally.so"),
    () => {
      (window as any).Tally?.loadEmbeds();
    }
  );

  return (
    <Container spacing="large">
      {headline && (
        <h3 className="text-2xl font-heading mb-4 text-foreground">
          {headline}
        </h3>
      )}

      {html && (
        <div
          className="relative w-full h-auto rounded-3xl overflow-hidden"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}
    </Container>
  );
}
