import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-primary mb-4">
              FindMyRoof
            </h3>
            <p className="text-muted-foreground mb-4">
              Your trusted platform for finding affordable rooms, apartments, and PG accommodations. Perfect for students and working professionals.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="h-9 w-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 text-primary" />
              </a>
              <a 
                href="#" 
                className="h-9 w-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 text-primary" />
              </a>
              <a 
                href="#" 
                className="h-9 w-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-primary" />
              </a>
              <a 
                href="#" 
                className="h-9 w-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-muted-foreground hover:text-primary transition-colors">
                  Browse Properties
                </Link>
              </li>
              <li>
                <Link to="/post-property" className="text-muted-foreground hover:text-primary transition-colors">
                  Post Property
                </Link>
              </li>
              <li>
                <Link to="/auth" className="text-muted-foreground hover:text-primary transition-colors">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Property Types</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/properties?type=apartment" className="text-muted-foreground hover:text-primary transition-colors">
                  Apartments
                </Link>
              </li>
              <li>
                <Link to="/properties?type=room" className="text-muted-foreground hover:text-primary transition-colors">
                  Rooms
                </Link>
              </li>
              <li>
                <Link to="/properties?type=pg" className="text-muted-foreground hover:text-primary transition-colors">
                  PG Accommodations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Bangalore, Karnataka, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:support@findmyroof.com" className="text-muted-foreground hover:text-primary transition-colors">
                  support@findmyroof.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+911234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 12345 67890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} FindMyRoof. All rights reserved. Made with ❤️ for students and professionals.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
