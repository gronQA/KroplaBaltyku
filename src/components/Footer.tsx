import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src="/favicon.svg" alt="Logo" className="w-10 h-10" />
              <div className="flex flex-col -space-y-1">
                <span className="font-serif text-2xl tracking-tight text-white italic font-light">
                  Kropla Bałtyku
                </span>
                <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-marine-400">
                  Apartament
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Komfortowy apartament w Tupadłach koło Jastrzębiej Góry. 
              Twój wymarzony odpoczynek nad polskim morzem.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6">Nawigacja</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><Link to="/" className="hover:text-marine-400 transition-colors">Strona Główna</Link></li>
              <li><Link to="/galeria" className="hover:text-marine-400 transition-colors">Galeria</Link></li>
              <li><Link to="/polityka-prywatnosci" className="hover:text-marine-400 transition-colors">Polityka Prywatności</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6">Kontakt</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>Borowikowa 3G/1, Tupadły</li>
              <li><a href="tel:608089312" className="hover:text-marine-400 transition-colors">608 089 312</a></li>
              <li><a href="mailto:kroplabaltyku@gmail.com" className="hover:text-marine-400 transition-colors">kroplabaltyku@gmail.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-slate-500 uppercase tracking-widest font-medium">
          <p>&copy; {new Date().getFullYear()} Kropla Bałtyku. Wszelkie prawa zastrzeżone.</p>
          <p>
            Strona stworzona przez{' '}
            <a 
              href="https://gronqa.pl" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-marine-400 hover:text-marine-300 transition-colors underline underline-offset-4"
            >
              gronqa.pl
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
