import Container from "@/components/base/Container";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  navLinks: any;
  generalSettings: any;
}

export default function Navbar({navLinks, generalSettings}: NavbarProps) {
    return (
        <nav className="pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 w-full max-w-7xl mx-auto">
                {generalSettings.logo && (
                    <Link href="/" className="block">
                        <Image
                            src={generalSettings.logo.permalink}
                            alt="Social Spots Logo"
                            width={300}
                            height={100}
                            className="w-full max-w-[300px] object-cover"
                        />
                    </Link>
                )}
                <div className="w-fit flex flex-row gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.page.id}
                            href={link.page.url}
                            className="font-bold hover:underline cursor-pointer"
                        >
                            {link.page.title}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}

