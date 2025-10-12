import {BlockHighlight as TBlockHighlight} from "@/types";

export default function Highlight({ text }: TBlockHighlight) {
  return (
    <div className="bg-accent py-14">
      <h2 className="text-center w-3/4 md:w-2/4 mx-auto">{text}</h2>
    </div>
  );
}
