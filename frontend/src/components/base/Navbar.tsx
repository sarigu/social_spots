import Container from "@/components/base/Container";
import Image from "next/image";
import Link from "next/link";
import {NavLinks as TNavLinks} from "@/types";
import {GeneralSettings as TGeneralSettings} from "@/types";

interface NavbarProps {
  navLinks: TNavLinks[];
  generalSettings: TGeneralSettings;
}

export default function Navbar({ navLinks, generalSettings }: NavbarProps) {
    return (
            <Container maxWidth="large" spacing="none">
                <nav className="flex flex-col md:flex-row justify-between items-center gap-10 pt-10 px-4 md:px-8">
                    {/* Logo */}
                    {generalSettings.logo && (
                        <Link href="/" className="block">
                            <Image
                                src={generalSettings.logo.permalink}
                                alt="Social Spots Logo"
                                width={250}
                                height={100}
                                className="w-full max-w-[300px] object-cover"
                            />
                        </Link>
                    )}
                    {/* Links to Pages */}
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
                </nav>
            </Container>
    )
}

