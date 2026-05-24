import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname, hash } = useLocation();

  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20 || !isHomePage);
    };
    
    // Set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  const navLinks = [
    { name: 'Apartament', href: '/#apartament' },
    { name: 'Atuty', href: '/#atuty' },
    { name: 'Lokalizacja', href: '/#lokalizacja' },
    { name: 'Galeria', href: '/galeria' },
    { name: 'Kontakt', href: '/#kontakt' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <img 
              src={`${import.meta.env.BASE_URL}favicon.svg`} 
              alt="Logo" 
              className="w-10 h-10 group-hover:scale-110 transition-transform duration-500 ease-out" 
            />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className={cn(
              "font-serif text-2xl tracking-tight transition-colors duration-300",
              scrolled ? "text-slate-900" : "text-white drop-shadow-lg"
            )}>
              <span className="italic font-light">Kropla Bałtyku</span>
            </span>
            <span className={cn(
              "text-[10px] uppercase tracking-[0.4em] font-medium transition-colors duration-300",
              scrolled ? "text-marine-600" : "text-marine-200"
            )}>
              Apartament
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium uppercase tracking-widest hover:text-marine-500 transition-colors duration-300",
                scrolled ? "text-slate-600" : "text-white/90 drop-shadow-sm"
              )}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:608089312"
            className={cn(
              "px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300",
              scrolled 
                ? "bg-marine-600 text-white hover:bg-marine-700 shadow-md" 
                : "bg-white text-marine-600 hover:bg-marine-50 shadow-lg"
            )}
          >
            Zadzwoń
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2 rounded-lg transition-colors duration-300",
            scrolled ? "text-slate-900" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-medium text-slate-800 hover:text-marine-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:608089312"
                className="w-full py-4 bg-marine-600 text-white text-center rounded-xl font-bold shadow-lg"
              >
                Zarezerwuj: 608 089 312
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
