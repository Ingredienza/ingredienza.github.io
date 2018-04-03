import React from 'react';
import Helmet from 'react-helmet';

const RavioliPage = () => (
  <div>
    <Helmet
      title="Ravioli von Ingredienza | Ingredienza"
      meta={[
        { name: 'description', content: 'Unsere Ravioli gibt es in allen möglichen Ausführungen. Mögen Sie es mit Fleisch oder Fisch, mit Gemüse, Kräutern oder Käse? Wir kreieren bunte Ravioli in allen möglichen Geschmacksrichtungen. Bei Ingredienza gibt es nahezu nichts, was es nicht gibt. ► Entdecken Sie unser Sortiment an Ravioli' },
        { name: 'keywords', content: 'Ravioli' }
      ]}
    />
 
    <h1>Unsere köstlichen Ravioli</h1>
    <p>
      Mit unseren feinen Ravioli eröffnen sich neue Geschmackswelten. In unserer
      Teigwaren-Manufaktur werden Kreativität und Exklusivität grossgeschrieben.
      Dementsprechend variantenreich ist unser Sortiment an Ravioli. 
    </p>
  </div>
)

export default RavioliPage;
