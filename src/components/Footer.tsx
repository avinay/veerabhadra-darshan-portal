import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-xl text-primary-foreground font-bold">
                ॐ
              </div>
              <h3 className="font-bold text-lg">Bonthapally Temple</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A sacred 800-year-old temple dedicated to Lord Veerabhadra Swamy, 
              blessed by the Kakatiya dynasty and serving devotees with divine grace.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Temple
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Darshan & Services
                </Link>
              </li>
              <li>
                <Link to="/festivals" className="text-muted-foreground hover:text-primary transition-colors">
                  Festivals
                </Link>
              </li>
              <li>
                <Link to="/visit" className="text-muted-foreground hover:text-primary transition-colors">
                  Plan Your Visit
                </Link>
              </li>
            </ul>
          </div>

          {/* Timings */}
          <div>
            <h3 className="font-bold text-lg mb-4">Temple Timings</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Daily</p>
                  <p className="text-muted-foreground">5:00 AM - 8:30 PM</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                All days open for darshan
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Bonthapally Village, Patancheru, Telangana 502319
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+919493149515" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 94931 49515
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@bonthapally-temple.org" className="text-muted-foreground hover:text-primary transition-colors">
                  info@bonthapally-temple.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Bonthapally Veerabhadra Swamy Temple. All rights reserved.</p>
          <p className="mt-2">Built with devotion to serve devotees worldwide</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
