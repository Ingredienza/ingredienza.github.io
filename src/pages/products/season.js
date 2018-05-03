import React from 'react';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import ProductTable from '../../components/ProductTable';

const SeasonPage = ({ data }) => (
  <div style={{ gridArea: 'content' }}>
    <Img
      style={{ 
        zIndex: -1,
        position: "fixed",
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100%"
      }}
      sizes={data.backgroundImage.sizes}
    />
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
		<h3>Fr&uuml;hling (Februar - Mai)</h3>
    <ProductTable 
      showHeader={true}
      products={[
        {
          articleNr: '40013',
          description: `Bärlauch-Quadrolini mit Cashew-Nüssen im Eierteig`,
          unit: '2kg TK',
          price: '20.50',
        },
        {
          articleNr: '40019',
          description: `Morchel-Triangoli im Eierteig`,
          unit: '2kg TK',
          price: 'Saisonpreis',
        },
        {
          articleNr: '50017',
          description: `Grüne Spargel-Rondellen im Eierteig`,
          unit: '2kg TK',
          price: '20.50',
        },
        {
          articleNr: '50007',
          description: `Grüne Spargel-Rondellen im Orangenteig`,
          unit: '2kg TK',
          price: '21.50',
        },
        {
          articleNr: '60024',
          description: `Bärlauch-Nudeln`,
          unit: '3kg TK',
          price: '11.--',
        },
        {
          articleNr: '60037',
          description: `Bärlauch-Gnocchi`,
          unit: '3kg TK',
          price: '11.--',
        },
      ]}
    />
		<h3>Sommer (Juni - August)</h3>
    <ProductTable 
      showHeader={true}
      products={[
        {
          articleNr: '20004',
          description: `Ricotta-Minze-Quadrolini grün-weiss gestreift\n(erhältlich sobald es frische Minze gibt)`,
          unit: '2kg TK',
          price: '23.50',
        },
        {
          articleNr: '50020',
          description: `Eierschwämmli-Rondellen\n(bis Ende Oktober erhältlich)`,
          unit: '2kg TK',
          price: '24.50',
        },
        {
          articleNr: 'ITA002',
          description: `Zucchetti mit gerösteten Pinien und Minze\nQuadrolini im Eierteig`,
          unit: '2kg TK',
          price: '22.50',
        },
        {
          articleNr: '40040',
          description: `Oliva Nera mit Feta, Petersilie und Knoblauch\nMezzelune Grande im Dinkelteig`,
          unit: '2kg TK',
          price: '22.50',
        },
      ]}
    />
		<h3>Herbst & Winter (September - Januar)</h3>
    <ProductTable 
      showHeader={true}
      products={[
        {
          articleNr: 'BITA009',
          description: `Bio Ricotta-Orangen-Rondellen (ab Dezember)`,
          unit: '2kg TK',
          price: '22.50',
        },
        {
          articleNr: '40007',
          description: `Kürbis-Rondellen im Dinkelteig`,
          unit: '2kg TK',
          price: '18.50',
        },
        {
          articleNr: '40010',
          description: `Weisse Trüffel-Rondellen im Eierteig`,
          unit: '2kg TK',
          price: '34.50',
        },
        {
          articleNr: '40020',
          description: `Ziegenfrischkäse mit Quitten Rechtecke im Eierteig`,
          unit: '3kg TK',
          price: '24.50',
        },
        {
          articleNr: '40041',
          description: `Hirsch-Butterpilz-Apfel-Quadrolini im Eierteig\n(September bis November)`,
          unit: '2kg TK',
          price: '19.50',
        },
        {
          articleNr: '40046',
          description: `Wildschwein mit Holunder und schwarzer Schokolade\nRechtecke im Eierteig`,
          unit: '2kg TK',
          price: '24.50',
        },
        {
          articleNr: 'B60007',
          description: `Bio-Orangen-Nudeln`,
          unit: '3kg TK',
          price: '14.50',
        },
        {
          articleNr: '60016',
          description: `Honig Thymian-Nudeln`,
          unit: '3kg TK',
          price: '12.50',
        },
        {
          articleNr: '60025',
          description: `Piemonteser Haselnuss-Nudeln\nmit gerösteten Haselnüssen`,
          unit: '3kg TK',
          price: '12.--',
        },
        {
          articleNr: '60028',
          description: `Steinpilz-Nudeln`,
          unit: '3kg TK',
          price: '12.50',
        },
        {
          articleNr: '60035S',
          description: `Steinpilz-Gnocchi`,
          unit: '3kg TK',
          price: '11.--',
        },
        {
          articleNr: '60035RK',
          description: `Gnocchi-Roulade mit Kürbis-Curry-Füllung`,
          unit: '5-6kg TK',
          price: '23.50',
        },
      ]}
    />
    <h2>Spezialit&auml;ten</h2>
    <ProductTable 
      showHeader={true}
      products={[
        {
          articleNr: 'BITA001',
          description: `Bio Rotolo alla fiorentina (Ricotta-Spinat-Teigrolle)\nlose schockgefroren`,
          unit: '10 x 500gr TK',
          price: '23.50',
        },
        {
          articleNr: 'BITA011',
          description: `Bio Rotolo alla fiorentina einzeln vakuumiert\nEignet sich für den Detail-Verkauf,\nAufgetaut 2 Wochen gekühlt haltbar`,
          unit: '5 x 500gr TK',
          price: '25.50',
        },
        {
          articleNr: '60035RS',
          description: `Gnocchi-Roulade mit Ricotta Spinat-Füllung Stk. ca. 350gr\nLangsam in Butter gebraten – ein Gedicht`,
          unit: '5-6kg TK',
          price: '23.50',
        },
      ]}
    />
  </div>
)

export const query = graphql`
  query SeasonImageQuery {
    backgroundImage: imageSharp(id: { regex: "/saison5/" }) {
      sizes(maxWidth: 1000 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
export default SeasonPage;
