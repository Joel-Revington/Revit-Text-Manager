import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b">
      {/* Desktop Header (lg and above) */}
      <div className="container hidden lg:flex xl:flex 2xl:flex mx-auto flex-wrap items-center justify-between px-4 py-2">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src="https://d3e25fyg0500ti.cloudfront.net/usam_logo.webp"
            alt="USAM Logo"
            className="w-28 lg:w-28 lg:mt-1 md:w-40 h-8 object-contain"
          />
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 lg:h-[30px] lg:w-8 rounded-md bg-gradient-to-br from-primary to-secondary" />
            <span className="text-lg lg:text-lg font-bold whitespace-nowrap">
              Revit Text Manager
            </span>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex items-center space-x-6 text-base font-medium">
          <a href="#features" className="transition-colors hover:text-foreground/80">Features</a>
          <a href="#benefits" className="transition-colors hover:text-foreground/80">Benefits</a>
        </nav>

        {/* Logos */}
        <div className="flex items-center space-x-4">
          <img
            src="https://d3e25fyg0500ti.cloudfront.net/AutodeskBlack.webp"
            alt="Autodesk Logo"
            className="w-40 lg:w-32 h-12 object-contain"
          />
          <img
            src="https://d3e25fyg0500ti.cloudfront.net/autodesk-authorised-developer-logo-rgb-black.webp"
            alt="Authorized Developer Logo"
            className="w-40 lg:w-32 h-9 object-contain"
          />
        </div>
      </div>

      {/* Mobile & Tablet Header (md and below) */}
      <div className="container flex lg:hidden xl:hidden 2xl:hidden flex-col items-center px-4 py-2 space-y-3">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src="https://d3e25fyg0500ti.cloudfront.net/usam_logo.webp"
            alt="USAM Logo"
            className="w-28 sm:w-24 sm:mt-1 mr-8 h-8 object-contain"
          />
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 sm:w-8 sm:h-7 rounded-md bg-gradient-to-br from-primary to-secondary" />
            <span className="text-lg sm:text-xl font-bold whitespace-nowrap">
              Revit Text Manager
            </span>
          </div>
        </div>

        {/* Logos */}
        <div className="flex items-center space-x-4">
          <img
            src="https://d3e25fyg0500ti.cloudfront.net/AutodeskBlack.webp"
            alt="Autodesk Logo"
            className="w-28 sm:w-24 h-12 object-contain"
          />
          <img
            src="https://d3e25fyg0500ti.cloudfront.net/autodesk-authorised-developer-logo-rgb-black.webp"
            alt="Authorized Developer Logo"
            className="w-28 sm:w-24 h-9 object-contain"
          />
        </div>

        {/* Nav Links */}
        <nav className="flex justify-center items-center space-x-6 text-base font-medium">
          <a href="#features" className="transition-colors hover:text-foreground/80">Features</a>
          <a href="#benefits" className="transition-colors hover:text-foreground/80">Benefits</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
