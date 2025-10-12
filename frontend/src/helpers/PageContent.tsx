import Hero from "@/components/blocks/Hero";
import Highlight from "@/components/blocks/Highlight";
import HeadlineText from "@/components/blocks/HeadlineText";
import ImageText from "@/components/blocks/ImageText";
import InteractiveSpots from "@/components/blocks/InteractiveSpots";
import Embed from "@/components/blocks/Embed";
import {Block as TBlock}  from "@/types";

interface PageContentProps {
  blocks: TBlock[];
}

export default function PageContent({ blocks }: PageContentProps) {
  return (
    <div className="space-y-8">
      {blocks.map((block: TBlock) => {
        switch (block.type) {
          case "hero":
            return <Hero key={block.id} headline={block.headline} image={block.image}/>;

          case "headline_and_text":
            return <HeadlineText key={block.id} headline={block.headline} text={block.text}/>;

          case "image_and_text":
            return <ImageText key={block.id} headline={block.headline} text={block.text} image={block.image} text_on_the_right={block.text_on_the_right}/>;

          case "embed":
            return <Embed key={block.id} headline={block.headline} code_snippet={block.code_snippet}/>;

          case "highlight":
            return <Highlight key={block.id} text={block.text}/>;

          case "interactive_spots":
            return <InteractiveSpots key={block.id} headline={block.headline}/>;

          default:
            return (
              <section key={block.id} className="mb-6 p-4 border border-dashed border-gray-300">
                <p>Unknown block type: {block.type}</p>
              </section>
            );
        }
      })}
    </div>
  );
}
