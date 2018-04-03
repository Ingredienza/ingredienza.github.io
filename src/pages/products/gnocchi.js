import React from 'react';
import Helmet from 'react-helmet';

const GnocchiPage = () => (
  <div>
    <Helmet
      title="Gnocchi von Ingredienza | Ingredienza"
      meta={[
        { name: 'description', content: 'Frisch, variantenreich, fein und der ideale Farbtupfer auf jedem Pasta-Teller – das sind unsere Gnocchi. Denn bei uns gibt es alles, was das Gnocchi-Herz begehrt. Unsere Gnocchi-Kreationen sind vielfältig und passen ideal als Hauptspeise oder Beilage ► Sehen Sie sich unsere Gnocchi an' },
        { name: 'keywords', content: 'Gnocchi' }
      ]}
    />
    <h1>Unsere abwechslungsreichen Gnocchi-Kreationen</h1>
    <p>
      Für unsere Gnocchi by Ingredienza verwandeln wir das klassische
      Kartoffel-Gnocchi in etwas ganz Besonderes. Verzaubern Sie Ihre Gäste mit
      abwechslungsreichen Gnocchi-Kreationen. Kombinieren Sie die unterschiedlichen
      Sorten nach Lust und Laune als bunte Hauptspeise oder Beilage.
    </p>
  </div>
)

export default GnocchiPage;
