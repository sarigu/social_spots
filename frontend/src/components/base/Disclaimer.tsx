import Container from "@/components/base/Container";

interface DisclaimerProps {
  text: string;
}

export default function Disclaimer({ text }: DisclaimerProps) {
    return (  
        <div className="bg-accent py-4">
            <Container spacing="none">
                <p className="text-sm text-center w-3/4 md:w-2/4 mx-auto">{text}</p>
            </Container>
        </div>
    )
}

