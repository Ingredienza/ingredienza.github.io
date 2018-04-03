import React from 'react';
import Helmet from 'react-helmet';

const VeganPage = () => (
  <div>
    <Helmet
      title="Vegane Teigwaren von Ingredienza | Ingredienza"
      meta={[
        { name: 'description', content: 'Bei Ingredienza gibt es vegane Teigwaren – denn bei uns gibt es für jeden das Passende. Genau das Richtige für Ihre vegane Kunden. Pasta kann auch vegan wunderbar schmecken. Mit Aubergine, Basilikum oder Spinat im Dinkel- oder Kurkumateig.  ► Entdecken Sie unsere veganen Teigwaren' },
        { name: 'keywords', content: 'Vegane Teigwaren' }
      ]}
    />
 
    <h1>Vegane Teigwaren aus Bern – Ingredienza goes vegan</h1>
    <p>
    Aufgrund der gestiegenen Nachfrage an veganer Pasta haben wir unser Angebot
    erweitert. Als eine der ersten Teigwaren-Manufakturen führen wir ein veganes
    Ravioli-Sortiment. Auch unsere Kartoffelgnocchi sind alle vegan. <br />
    Die gefüllten veganen Teigwaren bieten wir in Kartons à 2 kg lose schockgefroren
    an.
    </p>
  </div>
)

export default VeganPage;
