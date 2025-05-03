import { Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 py-12 border-t">
      <div className="container px-4 md:px-6 lg:w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Left: USAM Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://d3e25fyg0500ti.cloudfront.net/usam_logo.webp"
              alt="USAM Logo"
              className="h-14 md:h-11"
            />
          </div>

          {/* Center: Description */}
          <div className="text-center items-center flex flex-col md:text-left max-w-md">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary to-secondary" />
              <span className="text-lg font-bold">Revit Text Manager</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Streamlining text management for Revit professionals
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              © {currentYear} Revit Text Manager. All rights reserved.
            </p>
          </div>

          {/* Right: Autodesk Logos */}
          <div className="flex flex-col items-center md:items-end space-y-3">
            <img
              src="https://d3e25fyg0500ti.cloudfront.net/AutodeskBlack.webp"
              alt="Autodesk Logo"
              className="h-14 md:h-11"
            />
            <img
              src="https://d3e25fyg0500ti.cloudfront.net/autodesk-authorised-developer-logo-rgb-black.webp"
              alt="Autodesk Authorized Developer"
              className="h-10 md:h-8"
            />
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
