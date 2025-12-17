const CookiePolicy = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-waffle-chocolate">Cookiebeleid</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-waffle-caramel">1. Wat zijn cookies?</h2>
            <p className="text-gray-700">
              Cookies zijn kleine tekstbestanden die op uw computer of mobiele apparaat worden geplaatst wanneer u onze website bezoekt. 
              Cookies helpen ons om uw voorkeuren te onthouden en uw gebruikservaring te verbeteren.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-waffle-caramel">2. Welke cookies gebruiken we?</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Functionele cookies</h3>
                <p className="text-gray-700">
                  Deze cookies zijn noodzakelijk voor het goed functioneren van onze website. 
                  Ze onthouden bijvoorbeeld uw taalvoorkeur en instellingen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Analytische cookies</h3>
                <p className="text-gray-700">
                  Deze cookies helpen ons begrijpen hoe bezoekers onze website gebruiken. 
                  We gebruiken deze informatie om onze website te verbeteren. De verzamelde data is geanonimiseerd.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Marketing cookies</h3>
                <p className="text-gray-700">
                  Deze cookies worden gebruikt om bezoekers te volgen op verschillende websites en relevante advertenties te tonen. 
                  We plaatsen deze cookies alleen met uw toestemming.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-waffle-caramel">3. Cookies van derden</h2>
            <p className="text-gray-700 mb-3">
              Naast onze eigen cookies kunnen ook derden cookies plaatsen op uw apparaat wanneer u onze website bezoekt. 
              Dit kunnen onder andere zijn:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Google Analytics - voor websiteanalyse</li>
              <li>Social media platforms - voor het delen van content</li>
              <li>Betalingsproviders - voor het verwerken van betalingen</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-waffle-caramel">4. Hoe lang blijven cookies bewaard?</h2>
            <p className="text-gray-700 mb-3">De bewaartermijn van cookies verschilt:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Sessie cookies:</strong> Deze worden verwijderd zodra u uw browser sluit</li>
              <li><strong>Permanente cookies:</strong> Deze blijven op uw apparaat staan tot ze verlopen of tot u ze verwijdert. 
                De bewaartermijn varieert van enkele dagen tot meerdere jaren.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-waffle-caramel">5. Cookies beheren en verwijderen</h2>
            <p className="text-gray-700 mb-3">
              U kunt cookies beheren via uw browserinstellingen. U kunt:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Alle cookies blokkeren</li>
              <li>Alleen cookies van derden blokkeren</li>
              <li>Alle cookies verwijderen bij het sluiten van uw browser</li>
              <li>Een uitzondering maken voor specifieke websites</li>
            </ul>
            <p className="text-gray-700 mt-3">
              Let op: Het uitschakelen van cookies kan de functionaliteit van onze website beperken.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-waffle-caramel">6. Toestemming intrekken</h2>
            <p className="text-gray-700">
              U kunt uw toestemming voor cookies op elk moment intrekken door de cookies in uw browser te verwijderen 
              en uw cookie-instellingen te wijzigen. Voor meer informatie over het beheren van cookies in verschillende browsers, 
              raadpleeg de helpfunctie van uw browser.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-waffle-caramel">7. Wijzigingen in dit cookiebeleid</h2>
            <p className="text-gray-700">
              We kunnen dit cookiebeleid van tijd tot tijd aanpassen. De meest recente versie is altijd beschikbaar op deze pagina. 
              We raden u aan dit cookiebeleid regelmatig te raadplegen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-waffle-caramel">8. Meer informatie</h2>
            <p className="text-gray-700">
              Voor vragen over ons cookiebeleid kunt u contact met ons opnemen:
            </p>
            <div className="mt-3 text-gray-700">
              <p><strong>It's a Waffle Thing</strong></p>
              <p>Telefoonnummer: <a href="tel:+31649100041" className="text-waffle-strawberry hover:underline">06 49 10 00 41</a></p>
              <p>Locatie: Rotterdam, Nederland</p>
            </div>
            <p className="text-gray-700 mt-3">
              Zie ook ons <a href="/privacybeleid" className="text-waffle-strawberry hover:underline">Privacybeleid</a> voor meer informatie 
              over hoe we omgaan met uw persoonsgegevens.
            </p>
          </section>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">Laatste update: December 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
