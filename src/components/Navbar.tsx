import React, { useState, useEffect } from 'react';
import { Mountain, Menu, X, ChevronRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['registrace', 'program', 'trat', 'kategorie', 'ceny', 'deti', 'vysledky', 'foto', 'partneri', 'kontakt'];
      const scrollPos = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compact, grouped navigation items to ensure 1-line fit on desktop screens
  const navLinks = [
    { label: 'Registrace', href: '#registrace', id: 'registrace' },
    { label: 'Harmonogram', href: '#program', id: 'program' },
    { label: 'Trať', href: '#trat', id: 'trat' },
    { label: 'Kategorie', href: '#kategorie', id: 'kategorie' },
    { label: 'Ceny', href: '#ceny', id: 'ceny' },
    { label: 'Děti', href: '#deti', id: 'deti' },
    { label: 'Výsledky', href: '#vysledky', id: 'vysledky' },
    { label: 'Foto', href: '#foto', id: 'foto' },
    { label: 'Partneři', href: '#partneri', id: 'partneri' },
    { label: 'Kontakt', href: '#kontakt', id: 'kontakt' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D1F18]/95 backdrop-blur-md shadow-md border-b border-emerald-950/60 py-2.5'
          : 'bg-gradient-to-b from-[#0D1F18]/90 via-[#0D1F18]/70 to-transparent py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Brand / Logo */}
        <a
          href="#hero"
          id="nav-brand-logo"
          className="flex items-center gap-2.5 sm:gap-3 group text-white cursor-pointer select-none shrink-0"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center shadow-md shadow-emerald-900/30 group-hover:bg-emerald-600 transition-colors">
            <Mountain className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
          </div>
          <span className="font-extrabold tracking-tight text-sm sm:text-base text-white font-display uppercase">
            Běh na Bukovou horu
          </span>
        </a>

        {/* Desktop Navigation Links - guaranteed 1 line without wrapping */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                className={`px-2.5 xl:px-3 py-1.5 text-xs xl:text-[13px] font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  isActive
                    ? 'text-emerald-300 bg-emerald-900/50 border border-emerald-700/40'
                    : 'text-slate-200 hover:text-white hover:bg-emerald-900/30'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile hamburger button */}
        <div className="flex lg:hidden items-center">
          <button
            id="btn-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-emerald-900/40 focus:outline-none cursor-pointer"
            aria-label="Otevřít menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden bg-[#0D1F18] border-b border-emerald-900/50 px-4 pt-3 pb-6 space-y-2 max-h-[85vh] overflow-y-auto shadow-2xl"
        >
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`mobile-nav-link-${link.id}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between ${
                  activeSection === link.id
                    ? 'text-emerald-300 bg-emerald-900/60 font-bold'
                    : 'text-slate-200 hover:bg-emerald-900/30'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-emerald-500/70" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
