"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { useTranslations } from "next-intl";

import GithubIcon from "@/images/github.svg";

export default function NavBar() {
  const t = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollIntoView = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <Image
              src="/logo.png"
              width="40"
              height="40"
              alt="fideo logo"
              priority={true}
              className=" w-[auto] h-[auto]"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10" justify="start">
        <NavbarItem>
          <Link
            className="cursor-pointer"
            color="foreground"
            href="https://github.com/chenfan0/fideo-live-record/releases"
            target="_blank"
          >
            {t("navbar.download")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="cursor-pointer"
            color="foreground"
            href="#faq"
            onClick={(e) => handleScrollIntoView(e, "faq")}
          >
            {t("navbar.faq")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="cursor-pointer"
            color="foreground"
            href="#contact"
            onClick={(e) => handleScrollIntoView(e, "contact")}
          >
            {t("navbar.contact")}
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            className="cursor-pointer"
            color="foreground"
            onClick={(e) => handleScrollIntoView(e, "sponsor")}
          >
            {t("navbar.sponsor")}
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:flex gap-10" justify="end">
        <NavbarItem>
          <Link
            color="foreground"
            target="_blank"
            href="https://github.com/chenfan0/fideo-live-record"
          >
            <Image src={GithubIcon} width={24} height={24} alt="github icon" />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            color="foreground"
            className="w-full"
            href="https://github.com/chenfan0/fideo-live-record/releases"
            size="lg"
            onPress={() => setIsMenuOpen(false)}
          >
            {t("navbar.download")}
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            className="w-full"
            href="#faq"
            size="lg"
            onPress={() => setIsMenuOpen(false)}
          >
            {t("navbar.faq")}
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            className="w-full"
            href="#contact"
            size="lg"
            onPress={() => setIsMenuOpen(false)}
          >
            {t("navbar.contact")}
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            className="w-full"
            href="#sponsor"
            size="lg"
            onPress={() => setIsMenuOpen(false)}
          >
            {t("navbar.sponsor")}
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
