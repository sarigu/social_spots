import Container from "@/components/base/Container";
import Image from "next/image";
import Link from "next/link";
import {FooterLinks as TFooterLinks} from "@/types";
import {GeneralSettings as TGeneralSettings} from "@/types";

interface FooterProps {
  footerLinks: TFooterLinks[];
  generalSettings: TGeneralSettings;
}

export default function Footer({ footerLinks, generalSettings }: FooterProps) {
    return (
        <Container maxWidth="large">
            <footer className="space-y-12 border-t border-foreground py-8">
                <div className="flex flex-col md:flex-row gap-10">
                    {/* Links to Pages */}
                    <div className="w-full md:w-1/2 flex flex-col gap-4">
                        {footerLinks.map((link) => (
                            <Link
                                key={link.page.id}
                                href={link.page.url}
                                className="font-bold hover:underline cursor-pointer"
                            >
                                {link.page.title}
                            </Link>
                        ))}
                    </div>
                    <div className="w-full md:w-1/2">
                        {/* Social Media Links */}
                        {generalSettings.instagram && (
                            <div className="space-y-4">
                                <p className="font-bold">Socials</p>
                                <Link href={generalSettings.instagram} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                                    <Image 
                                        src="/icons/instagram.svg" 
                                        alt="Instagram" 
                                        width={24} 
                                        height={24} 
                                     />
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
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
            </footer>
        </Container>
    )
}

