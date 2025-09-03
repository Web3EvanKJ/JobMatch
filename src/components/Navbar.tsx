import { useState } from "react";
import { Link } from "react-router";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [sheetOpen, setSheetOpen] = useState(false);

  // Function to close sheet when a link is clicked
  const handleLinkClick = () => {
    setSheetOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            JobMatch
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="font-bold text-blue-600 hover:text-blue-700 "
            >
              Jobs
            </Link>
            <Link
              to="/talent"
              className="font-bold text-blue-600 hover:text-blue-700"
            >
              Talent
            </Link>
            <Link
              to="/blog"
              className="font-bold text-blue-600 hover:text-blue-700"
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="font-bold text-blue-600 hover:text-blue-700"
            >
              About
            </Link>
          </div>

          {/* Desktop Login */}
          <div className="hidden md:block">
            <Link
              to="/login"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Hamburger + Sheet */}
          <div className="md:hidden">
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>

                <div className="flex flex-col space-y-4 mt-4">
                  <Link
                    to="/"
                    className="hover:text-blue-600 mx-4"
                    onClick={handleLinkClick}
                  >
                    Jobs
                  </Link>
                  <Link
                    to="/talent"
                    className="hover:text-blue-600 mx-4"
                    onClick={handleLinkClick}
                  >
                    Talent
                  </Link>
                  <Link
                    to="/blog"
                    className="hover:text-blue-600 mx-4"
                    onClick={handleLinkClick}
                  >
                    Blog
                  </Link>
                  <Link
                    to="/about"
                    className="hover:text-blue-600 mx-4"
                    onClick={handleLinkClick}
                  >
                    About
                  </Link>
                  <Link
                    to="/login"
                    className="mx-4 px-4 py-2 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition mt-2"
                    onClick={handleLinkClick}
                  >
                    Login
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
