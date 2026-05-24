import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Waves, 
  Coffee, 
  MapPin, 
  Phone, 
  Mail, 
  Zap, 
  ThermometerSun, 
  Car, 
  Sun
} from 'lucide-react';
import { Link } from 'react-router-dom';

const heroImages = [
  '/hero-1.png',
  '/hero-2.png',
  '/hero-3.png',
  '/hero-4.png',
  '/hero-5.png',
];


const benefits = [
  { icon: Sun, title: 'Ogródek', description: 'Słoneczny ogród od strony południowej' },
  { icon: ThermometerSun, title: 'Sauna', description: 'Relaks dla ciała i ducha' },
  { icon: Waves, title: 'Basen', description: 'Ochłoda w zasięgu ręki' },
  { icon: Coffee, title: 'Kuchnia', description: 'Płyta indukcyjna, ekspres, zmywarka' },
  { icon: Car, title: 'Parking', description: 'Miejsce przypisane do apartamentu' },
  { icon: Zap, title: 'Wyposażenie', description: 'TV, żelazko, składana suszarka' },
];

const distances = [
  { label: 'Morze', value: '900m', detail: 'w linii prostej' },
  { label: 'Sklep sezonowy', value: '350m', detail: 'podstawowe zakupy' },
  { label: 'Centrum Jastrzębiej Góry', value: '1500m', detail: 'restauracje i atrakcje' },
];

const Home = () => {
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-slate-900">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={currentHero}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img 
              src={heroImages[currentHero]} 
              alt="Apartament Kropla Bałtyku" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-marine-300 font-semibold uppercase tracking-[0.3em] mb-4 block drop-shadow-lg">
              Zapraszamy nad morze
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight drop-shadow-2xl">
              Kropla Bałtyku
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
              Odkryj spokój i luksus w sercu Tupadeł. Twój prywatny azyl blisko Jastrzębiej Góry z pięknym słonecznym ogrodem.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#kontakt" 
                className="px-10 py-4 bg-marine-500 hover:bg-marine-600 text-white rounded-full font-bold transition-all duration-300 shadow-xl hover:shadow-marine-500/30 transform hover:-translate-y-1"
              >
                Zarezerwuj teraz
              </a>
              <Link 
                to="/galeria" 
                className="px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1"
              >
                Zobacz galerię
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/60"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About Section / Garden */}
      <section id="apartament" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img src="/all-6.jpeg" alt="Ogród apartamentu" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 bg-marine-600 text-white p-6 md:p-8 rounded-3xl shadow-xl max-w-[200px] md:max-w-xs">
                <Waves className="w-8 h-8 md:w-10 md:h-10 mb-2 md:mb-4" />
                <p className="font-serif text-lg md:text-xl leading-snug">Zrelaksuj się w Jacuzzi</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-marine-600 font-bold uppercase tracking-widest text-sm mb-4 block">Twój prywatny raj</span>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8 leading-tight">Relaks w słońcu na własnym tarasie</h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Kropla Bałtyku to miejsce stworzone z myślą o pełnym wyciszeniu i regeneracji. Bliskość piaszczystych plaż Jastrzębiej Góry i szum morza tworzą idealne warunki do ucieczki od codziennego zgiełku.
                </p>
                <p>
                  Po dniu spędzonym na plaży, możesz odetchnąć na prywatnym tarasie z własnym ogródkiem. Dzięki południowej ekspozycji, słońce towarzyszy Ci przez cały dzień, tworząc przytulny zakątek do wieczornego relaksu.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    'Bliskość piaszczystych plaż i natury',
                    'Spokojna atmosfera sprzyjająca regeneracji',
                    'Prywatny ogródek z ekspozycją południową',
                    'Wysoki standard i komfortowe wnętrza'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3 text-slate-800 font-medium">
                      <div className="w-2 h-2 rounded-full bg-marine-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="atuty" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">Pełen komfort pobytu</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Zadbaliśmy o każdy detal, aby Twój wypoczynek był beztroski. Od w pełni wyposażonej kuchni po strefę wellness.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-4 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-marine-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-marine-600 mb-4 sm:mb-6">
                  <benefit.icon className="w-5 h-5 sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-base sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2">{benefit.title}</h3>
                <p className="text-xs sm:text-base text-slate-500">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="lokalizacja" className="py-24 bg-marine-600 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-24" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-8">Blisko natury, blisko morza</h2>
              <p className="text-marine-100 text-lg mb-12 max-w-xl">
                Tupadły to idealna lokalizacja – cieszy ciszą i spokojem, a jednocześnie pozwala w kilka minut dotrzeć do piaszczystych plaż i centrum Jastrzębiej Góry.
              </p>
              
              <div className="space-y-8">
                {distances.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-6"
                  >
                    <div className="text-4xl font-serif font-bold text-marine-200 opacity-50">0{i+1}</div>
                    <div>
                      <div className="flex items-baseline space-x-3">
                        <span className="text-2xl font-bold">{item.value}</span>
                        <span className="text-marine-200 font-medium uppercase tracking-widest text-sm">{item.label}</span>
                      </div>
                      <p className="text-marine-100 mt-1">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Borowikowa+3G/1+Tupadły" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl bg-slate-900/20 p-2 transition-transform duration-300 group-hover:scale-[1.02]">
                  <div className="w-full h-full relative rounded-2xl flex items-center justify-center overflow-hidden bg-slate-200 group-hover:bg-marine-700 transition-colors duration-500">
                    {/* Map Background */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700 mix-blend-multiply"
                      style={{ backgroundImage: `url(/mapa.png)` }}
                    />
                    
                    {/* Content */}
                    <div className="relative z-10 flex items-center justify-center p-6 text-center">
                      <MapPin className="w-10 h-10 text-marine-600 group-hover:text-white transition-colors duration-500" />
                      <span className="ml-4 font-bold uppercase tracking-widest text-slate-800 group-hover:text-white transition-colors duration-500">
                        Borowikowa 3G/1, Tupadły
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-center">
                  <span className="text-marine-200 text-sm font-medium uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                    Zobacz na Google Maps
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 text-white flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-serif mb-8">Zarezerwuj swój pobyt</h2>
              <p className="text-slate-400 text-lg mb-12">
                Chętnie odpowiemy na wszystkie Twoje pytania i pomożemy zaplanować idealne wakacje nad morzem.
              </p>

              <div className="space-y-8">
                <a href="tel:608089312" className="flex items-center space-x-6 group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-marine-500 transition-colors flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 uppercase tracking-widest mb-1">Telefon</div>
                    <div className="text-xl md:text-2xl font-bold">608 089 312</div>
                  </div>
                </a>

                <a href="mailto:apartament.kroplabaltyku@gmail.com" className="flex items-center space-x-6 group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-marine-500 transition-colors flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 uppercase tracking-widest mb-1">E-mail</div>
                    <div className="text-base sm:text-lg md:text-2xl font-bold break-words">
                      apartament.<wbr/>kroplabaltyku@gmail.com
                    </div>
                  </div>
                </a>

                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Borowikowa+3G/1+Tupadły" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-6 group"
                >
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-marine-500 transition-colors flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 uppercase tracking-widest mb-1">Adres</div>
                    <div className="text-lg md:text-2xl font-bold">Borowikowa 3G/1, Tupadły</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 relative min-h-[400px]">
              <img src="/hero-3.png" alt="Kontakt" className="absolute inset-0 w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent hidden lg:block" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
