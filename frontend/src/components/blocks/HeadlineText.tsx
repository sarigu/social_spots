import Container from "@/components/base/Container";
import {BlockHeadlineText as TBlockHeadlineText} from "@/types";

export default function HeadlineText({ headline, text, text_on_the_right }: TBlockHeadlineText) {
  return (
    <Container spacing="large">
      <div
        className={`flex flex-col gap-4 ${
          text_on_the_right ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Headline */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-heading mb-4">{headline}</h3>
        </div>
        {/* Text */}
        <div className="w-full md:w-1/2">
          <p className="text-lg leading-relaxed">{text}</p>
        </div>
      </div>
    </Container>
  );
}
