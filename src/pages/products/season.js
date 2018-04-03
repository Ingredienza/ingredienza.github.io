import React from 'react';
import Helmet from 'react-helmet';

const SeasonPage = () => (
  <div>
    <Helmet
      title="Pasta aus Saisongemüse | Ingredienza"
      meta={[
        { name: 'description', content: 'Ingredienza steht für frische Zutaten aus der Region. Deshalb setzen wir auf Saisonprodukte. Wir kreieren für unsere Kunden saisongerechte Pasta aus Saisongemüse. Frischer geht\'s nicht. ► Entdecken Sie unsere Saison-Empfehlungen' },
        { name: 'keywords', content: 'Pasta, Saisongemüse' }
      ]}
    />
 
    <h1>Saisonprodukte – Pasta aus Saisongemüse</h1>
    <p>
      Bei Ingredienza setzen wir uns für regionale Produkte ein. Deshalb bieten wir
      unseren Kunden saisonale Pasta. Je nach Jahreszeit kreieren wir aus frischen
      Saison-Zutaten feinste Pasta und Gnocchi. 
    </p>
  </div>
)

export default SeasonPage;
