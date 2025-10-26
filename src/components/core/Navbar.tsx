import { useState } from "react";
import SendEmailFormDialog from "@/components/core/SendEmailFormDialog";
import SiteLogo from "@/components/core/SiteLogo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navLinks } from "@/data";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 px-4 sm:px-8 lg:px-20 xl:px-32 flex items-center justify-between bg-primary">
      <div className="flex-shrink-0">
        <SiteLogo />
      </div>

      <nav className="hidden md:flex flex-1 justify-center">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-4 bg-primary-foreground text-primary rounded-md px-4 py-2">
            {navLinks.map((navlink) => (
              <NavigationMenuItem key={navlink.href}>
                <NavigationMenuLink
                  asChild
                  className="hover:scale-110 duration-300"
                >
                  <a
                    href={`#${navlink.href}`}
                    className="flex flex-row gap-1 items-center"
                  >
                    <navlink.Icon />
                    {navlink.label}
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      <div className="flex items-center gap-2">
        <SendEmailFormDialog />

        <button
          className="md:hidden p-2 rounded-md"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="size-8" /> : <Menu className="size-8" />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full right-0 w-full bg-primary-foreground text-primary rounded-md p-4 flex flex-col gap-3 md:hidden z-50 shadow-md">
          {navLinks.map((navlink) => (
            <a
              key={navlink.href}
              href={`#${navlink.href}`}
              className="flex flex-row items-center gap-2 hover:scale-105 duration-300"
              onClick={() => setMenuOpen(false)}
            >
              <navlink.Icon />
              {navlink.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
