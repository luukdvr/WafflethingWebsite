const PrivacyPolicy = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-waffle-chocolate">Privacybeleid</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-waffle-caramel">1. Inleiding</h2>
            <p className="text-gray-700">
              It's a Waffle Thing ("wij", "ons" of "onze") respecteert de privacy van alle bezoekers van onze website 
              en klanten. In dit privacybeleid leggen we uit welke persoonsgegevens we verzamelen en hoe we deze gebruiken.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-waffle-caramel">2. Welke gegevens verzamelen we?</h2>
            <p className="text-gray-700 mb-3">We kunnen de volgende persoonsgegevens verzamelen:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Naam en contactgegevens (telefoonnummer, e-mailadres)</li>
              <li>Bestelgegevens en voorkeuren</li>
              <li>Betalingsinformatie</li>
              <li>Bezoekinformatie van de website (IP-adres, browsertype, surfgedrag)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-waffle-caramel">3. Waarvoor gebruiken we uw gegevens?</h2>
            <p className="text-gray-700 mb-3">We gebruiken uw persoonsgegevens voor:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Het verwerken van uw bestellingen</li>
              <li>Het versturen van orderbevestigingen en updates</li>
              <li>Het beantwoorden van vragen en het verlenen van klantenservice</li>
              <li>Het verbeteren van onze producten en diensten</li>
              <li>Het versturen van marketingcommunicatie (alleen met uw toestemming)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-waffle-caramel">4. Beveiliging van uw gegevens</h2>
            <p className="text-gray-700">
              We nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen 
              tegen ongeoorloofde toegang, wijziging, openbaarmaking of vernietiging.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-waffle-caramel">5. Delen van gegevens met derden</h2>
            <p className="text-gray-700">
              We delen uw persoonsgegevens niet met derden, behalve wanneer dit noodzakelijk is voor de uitvoering 
              van onze diensten (bijvoorbeeld betalingsverwerkers) of wanneer we daartoe wettelijk verplicht zijn.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-waffle-caramel">6. Bewaartermijn</h2>
            <p className="text-gray-700">
              We bewaren uw persoonsgegevens niet langer dan noodzakelijk voor de doeleinden waarvoor ze zijn verzameld, 
              of zoals vereist door de wet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-waffle-caramel">7. Uw rechten</h2>
            <p className="text-gray-700 mb-3">U heeft het recht om:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Inzage te vragen in uw persoonsgegevens</li>
              <li>Correctie of aanvulling van uw gegevens te vragen</li>
              <li>Verwijdering van uw gegevens te vragen</li>
              <li>Beperking van de verwerking van uw gegevens te vragen</li>
              <li>Bezwaar te maken tegen de verwerking van uw gegevens</li>
              <li>Overdracht van uw gegevens te vragen</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-waffle-caramel">8. Cookies</h2>
            <p className="text-gray-700">
              Onze website maakt gebruik van cookies om uw gebruikservaring te verbeteren. 
              Zie ons <a href="/cookiebeleid" className="text-waffle-strawberry hover:underline">Cookiebeleid</a> voor meer informatie.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-waffle-caramel">9. Wijzigingen in dit privacybeleid</h2>
            <p className="text-gray-700">
              We behouden ons het recht voor dit privacybeleid te wijzigen. De meest recente versie 
              is altijd beschikbaar op onze website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-waffle-caramel">10. Contact</h2>
            <p className="text-gray-700">
              Voor vragen over dit privacybeleid of over de verwerking van uw persoonsgegevens, kunt u contact met ons opnemen:
            </p>
            <div className="mt-3 text-gray-700">
              <p><strong>It's a Waffle Thing</strong></p>
              <p>Telefoonnummer: <a href="tel:+31649100041" className="text-waffle-strawberry hover:underline">06 49 10 00 41</a></p>
              <p>Adres: Rotterdam, Nederland</p>
            </div>
          </section>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">Laatste update: December 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
