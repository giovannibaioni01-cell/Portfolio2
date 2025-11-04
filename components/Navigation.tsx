import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-md py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="group flex items-center gap-3"
          >
            <div className="w-8 h-8 border border-white/40 group-hover:border-white transition-colors flex items-center justify-center">
              <span className="text-white text-xs">GB</span>
            </div>
            <span className="hidden md:block text-white text-sm tracking-wider">Giovanni Baioni</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {['gallery', 'videos', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors capitalize"
              >
                {section}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md mt-4">
          <div className="px-6 py-6 space-y-1">
            {['gallery', 'videos', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all capitalize rounded"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
