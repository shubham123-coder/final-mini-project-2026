import { Home, Search, PlusCircle, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Home className="h-6 w-6 text-primary" />
          <span className="font-heading font-bold text-xl">FindMyRoof</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/properties">
            <Button variant="ghost" className="gap-2">
              <Search className="h-4 w-4" />
              Browse Properties
            </Button>
          </Link>
          <Link to="/post-property">
            <Button variant="ghost" className="gap-2">
              <PlusCircle className="h-4 w-4" />
              Post Property
            </Button>
          </Link>
          <Link to="/auth">
            <Button className="gap-2">
              <User className="h-4 w-4" />
              Login / Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-8">
              <Link to="/properties">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Search className="h-4 w-4" />
                  Browse Properties
                </Button>
              </Link>
              <Link to="/post-property">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <PlusCircle className="h-4 w-4" />
                  Post Property
                </Button>
              </Link>
              <Link to="/auth">
                <Button className="w-full gap-2">
                  <User className="h-4 w-4" />
                  Login / Sign Up
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
