import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8">Polityka Prywatności</h1>
          
          <div className="prose prose-slate lg:prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-serif font-semibold text-slate-800 mb-4">1. Dane Administratora</h2>
              <p className="text-slate-600 mb-4">
                Administratorem danych osobowych zbieranych za pośrednictwem strony internetowej jest:
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <p className="font-semibold text-slate-900">Garmo Arkadiusz Grajcar</p>
                <p className="text-slate-600">NIP: 4980113398</p>
                <p className="text-slate-600">REGON: 382766016</p>
                <p className="text-slate-600">Adres rejestrowy: Felińskiego 24 lok. 21, 41-923 Bytom, woj. śląskie</p>
                <p className="text-slate-600 mt-2">Osoba decyzyjna: Arkadiusz Grajcar</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif font-semibold text-slate-800 mb-4">2. Zakres zbieranych danych</h2>
              <p className="text-slate-600">
                Przetwarzamy dane osobowe, które dobrowolnie podajesz nam podczas kontaktu telefonicznego lub mailowego (np. imię, numer telefonu, adres e-mail) w celu obsługi zapytania o rezerwację apartamentu.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif font-semibold text-slate-800 mb-4">3. Cel i podstawa przetwarzania</h2>
              <ul className="list-disc pl-5 text-slate-600 space-y-2">
                <li>Obsługa zapytań i rezerwacji apartamentu Kropla Bałtyku.</li>
                <li>Realizacja usług najmu krótkoterminowego.</li>
                <li>Wypełnienie obowiązków prawnych ciążących na Administratorze.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif font-semibold text-slate-800 mb-4">4. Twoje prawa</h2>
              <p className="text-slate-600">
                Masz prawo do dostępu do swoich danych, ich sprostowania, usunięcia lub ograniczenia przetwarzania, a także prawo do wniesienia sprzeciwu wobec przetwarzania.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
