import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b">
      <div className="container md:hidden sm:hidden mx-auto flex flex-wrap items-center justify-between px-4 py-2">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src="https://d3e25fyg0500ti.cloudfront.net/usam_logo.webp"
            alt="USAM Logo"
            className="w-28 lg:w-28 lg:mt-1 sm:w-32 md:w-40 h-8 object-contain"
          />
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 lg:h-[30px] lg:w-5.3 sm:w-8 sm:h-8 rounded-md bg-gradient-to-br from-primary to-secondary" />
            <span className="text-lg sm:text-xl lg:text-lg font-bold whitespace-nowrap">
              Revit Text Manager
            </span>
          </div>
        </div>

        {/* Nav Links - hidden on small screens */}
        <nav className="hidden md:flex items-center space-x-6 text-base font-medium">
          <a
            href="#features"
            className="transition-colors hover:text-foreground/80"
          >
            Features
          </a>
          <a
            href="#benefits"
            className="transition-colors hover:text-foreground/80"
          >
            Benefits
          </a>
        </nav>

        {/* Logos on larger screens */}
        <div className="hidden sm:flex items-center space-x-4 ">
          <img
            src="https://d3e25fyg0500ti.cloudfront.net/AutodeskBlack.webp"
            alt="Autodesk Logo"
            className="w-40 lg:w-32 md:w-40 h-12 object-contain"
          />
          <img
            src="https://d3e25fyg0500ti.cloudfront.net/autodesk-authorised-developer-logo-rgb-black.webp"
            alt="Authorized Developer Logo"
            className="w-40 lg:w-32 md:w-40 h-9 object-contain"
          />
        </div>
      </div>

      <div className="hidden container mx-auto md:flex sm:flex items-center justify-between px-4 py-2">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src="https://d3e25fyg0500ti.cloudfront.net/usam_logo.webp"
            alt="USAM Logo"
            className="w-28 lg:w-28 sm:w-24 sm:mt-1 mr-8 lg:mt-1 md:mt-1 md:mr-9 md:w-40 h-8 object-contain"
          />
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 sm:w-8 sm:h-7 rounded-md bg-gradient-to-br from-primary to-secondary" />
            <span className="text-lg sm:text-xl lg:text-lg font-bold whitespace-nowrap">
              Revit Text Manager
            </span>
          </div>
        </div>

        {/* Logos on larger screens */}
        <div className="hidden sm:flex items-center space-x-4 ">
          <img
            src="https://d3e25fyg0500ti.cloudfront.net/AutodeskBlack.webp"
            alt="Autodesk Logo"
            className="w-40 lg:w-32 md:w-28 sm:w-24 h-12 object-contain"
          />
          <img
            src="https://d3e25fyg0500ti.cloudfront.net/autodesk-authorised-developer-logo-rgb-black.webp"
            alt="Authorized Developer Logo"
            className="w-40 lg:w-32 md:w-28 sm:w-24 h-9 object-contain"
          />
        </div>

      </div>
        {/* Nav Links - hidden on small screens */}
        <nav className="hidden md:flex sm:flex justify-center mb-4 items-center space-x-6 text-base font-medium">
          <a
            href="#features"
            className="transition-colors hover:text-foreground/80"
          >
            Features
          </a>
          <a
            href="#benefits"
            className="transition-colors hover:text-foreground/80"
          >
            Benefits
          </a>
        </nav>
    </header>
  );
};

export default Header;
