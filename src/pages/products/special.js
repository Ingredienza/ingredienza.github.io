import React from 'react';
import Helmet from 'react-helmet';

const SpecialPage = () => (
  <div>
    <Helmet
      title="Pasta-Spezialitäten von Ingredienza | Ingredienza"
      meta={[
        { name: 'description', content: 'Ein besonderes Highlight von Ingredienza sind unsere Spezialfüllungen. Unsere Pasta-Füllungen sind so abwechslungsreich wie die Geschmäcker Ihrer Kundschaft vielfältig sind. Unsere Spezialitäten lassen mit Sicherheit keine Pasta-Wünsche offen. ► Sehen Sie sich unser Angebot an Spezialfüllungen an' },
        { name: 'keywords', content: 'Spezialitäten' }
      ]}
    />
 
    <h1>Entdecken Sie unsere Spezialitäten – Teigwaren mit Spezialfüllung</h1>
    <p>
      Bei uns gibt es Teigwaren ganz nach Ihren individuellen Wünschen. Sie
      bestimmen den Teig als auch die Form Ihrer Pasta. Je nach Rezeptur liegt der
      Mindestbezug bei unseren Spezialitäten bei 30–40 kg. 
    </p>
  </div>
)

export default SpecialPage;
