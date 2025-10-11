import Hero from "@/components/blocks/Hero";
import Highlight from "@/components/blocks/Highlight";
import HeadlineText from "@/components/blocks/HeadlineText";
import ImageText from "@/components/blocks/ImageText";
import Map from "@/components/blocks/Map";
import Embed from "@/components/blocks/Embed";

interface PageContentProps {
  blocks: any[]
}


export default function PageContent({ blocks }: PageContentProps) {
  return (
    <div className="space-y-8">
      {blocks.map((block: any) => {
        switch (block.type) {
          case "hero":
            return <Hero key={block.id} headline={block.headline} image={block.image}/>;

          case "headline_and_text":
            return <HeadlineText key={block.id} headline={block.headline} text={block.text} />;

          case "image_and_text":
            return <ImageText key={block.id} headline={block.headline} text={block.text} image={block.image} text_on_the_right={block.text_on_the_right} />;

          case "embed":
            return <Embed key={block.id} headline={block.headline} embed={block.embed} />;

          case "highlight":
            return <Highlight key={block.id} text={block.text}/>;

          case "map":
            return <Map key={block.id} headline={block.headline} />;

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
