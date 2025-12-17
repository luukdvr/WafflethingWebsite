const TermsOfService = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-waffle-chocolate">Algemene Voorwaarden</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-waffle-caramel">1. Toepasselijkheid</h2>
            <p className="text-gray-700">
              Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, bestellingen en overeenkomsten van 
              It's a Waffle Thing, gevestigd te Rotterdam, Nederland, KvK nummer: [in te vullen].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-waffle-caramel">2. Aanbod en prijzen</h2>
            <p className="text-gray-700 mb-3">
              Alle aanbiedingen op onze website en menukaart zijn vrijblijvend. Prijzen zijn inclusief BTW, 
              tenzij anders vermeld. We behouden ons het recht voor om prijzen en het aanbod te wijzigen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-waffle-caramel">3. Bestelling en overeenkomst</h2>
            <p className="text-gray-700 mb-3">
              Een overeenkomst komt tot stand na telefonische of schriftelijke bevestiging van uw bestelling door ons. 
              Wij behouden ons het recht voor om bestellingen te weigeren.
            </p>
            <p className="text-gray-700">
              Telefonische bestellingen kunnen worden geplaatst via: <a href="tel:+31649100041" className="text-waffle-strawberry hover:underline">06 49 10 00 41</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-waffle-caramel">4. Betaling</h2>
            <p className="text-gray-700 mb-3">
              Betaling dient te geschieden bij aflevering of afhaling van de bestelling. 
              We accepteren contante betaling en PIN.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-waffle-caramel">5. Levering en afhaling</h2>
            <p className="text-gray-700 mb-3">
              Bestellingen kunnen worden afgehaald op ons adres in Rotterdam of, indien van toepassing, bezorgd binnen ons bezorggebied. 
              Levertijden zijn indicatief en kunnen variëren afhankelijk van drukte.
            </p>
            <p className="text-gray-700">
              <strong>Openingstijden:</strong><br />
              Dinsdag t/m Zondag: 11:00 - 20:00<br />
              Maandag: Gesloten
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-waffle-caramel">6. Annulering</h2>
            <p className="text-gray-700">
              Annulering van een bestelling is alleen mogelijk binnen 15 minuten na plaatsing. 
              Neem hiervoor direct telefonisch contact met ons op.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-waffle-caramel">7. Allergenen en halal</h2>
            <p className="text-gray-700 mb-3">
              Al ons vlees is 100% halal. Onze producten kunnen allergenen bevatten zoals gluten, melk, eieren en noten. 
              Indien u allergieën heeft, neem dan vooraf contact met ons op.
            </p>
            <p className="text-gray-700">
              We kunnen niet garanderen dat onze producten volledig vrij zijn van kruisbesmetting met allergenen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-waffle-caramel">8. Klachten</h2>
            <p className="text-gray-700">
              Klachten over producten dienen direct bij aflevering of afhaling gemeld te worden. 
              Voor klachten kunt u contact opnemen via telefoonnummer <a href="tel:+31649100041" className="text-waffle-strawberry hover:underline">06 49 10 00 41</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-waffle-caramel">9. Aansprakelijkheid</h2>
            <p className="text-gray-700">
              It's a Waffle Thing is niet aansprakelijk voor indirecte schade die voortvloeit uit het gebruik van onze producten, 
              tenzij er sprake is van opzet of grove nalatigheid van onze kant.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-waffle-caramel">10. Privacy</h2>
            <p className="text-gray-700">
              Voor informatie over hoe wij omgaan met uw persoonsgegevens, verwijzen we naar ons 
              <a href="/privacybeleid" className="text-waffle-strawberry hover:underline"> Privacybeleid</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-waffle-caramel">11. Toepasselijk recht</h2>
            <p className="text-gray-700">
              Op deze algemene voorwaarden en alle overeenkomsten is Nederlands recht van toepassing. 
              Geschillen zullen worden voorgelegd aan de bevoegde rechter in Rotterdam.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-waffle-caramel">12. Contactgegevens</h2>
            <div className="text-gray-700">
              <p><strong>It's a Waffle Thing</strong></p>
              <p>Telefoonnummer: <a href="tel:+31649100041" className="text-waffle-strawberry hover:underline">06 49 10 00 41</a></p>
              <p>Locatie: Rotterdam, Nederland</p>
              <p>KvK nummer: [in te vullen]</p>
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

export default TermsOfService;
