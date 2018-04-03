import React from 'react';
import Helmet from 'react-helmet';

const NoodlePage = () => (
  <div>
    <Helmet
      title="Nudeln von Ingredienza | Ingredienza"
      meta={[
        { name: 'description', content: 'Bei Ingredienza gibt es feinste Nudeln – frisch, abwechslungsreich und bestimmt eine köstliche Überraschung auf jedem Teller. Und das Beste: Unsere Nudel gibt es in unterschiedlichsten Schnittbreiten. ► Entdecken Sie die Nudeln von Ingredienza' },
        { name: 'keywords', content: 'Nudeln' }
      ]}
    />
 
    <h1>Unsere variantenreichen Nudeln in unterschiedlichen Schnittbreiten</h1>
    <p>
      Erkunden Sie unser umfangreiches Sortiment an feinsten Nudeln. Alle Nudeln
      sind in den Schnittbreiten 2mm, 5mm, 10mm und 20mm sowie als Lasagneblätter
      erhältlich. An Lager führen wir bei den meisten Sorten 5mm. Für andere
      Schnittbreiten fragen Sie bitte nach.
    </p>
  </div>
)

export default NoodlePage;
