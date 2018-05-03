import React from 'react';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import ProductTable from '../../components/ProductTable';

const GnocchiPage = ({ data }) => (
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
    <ProductTable
      showHeader={true}
      products={[
        {
          articleNr: '60035',
          description: `Kartoffel-Gnocchi`,
          unit: '3kg TK',
          price: '10.--',
        },
        {
          articleNr: '60036',
          description: `... mit Spinat`,
          unit: '3kg TK',
          price: '11.--',
        },
        {
          articleNr: '60050',
          description: `... mit Paprika`,
          unit: '3kg TK',
          price: '11.--',
        },
        {
          articleNr: '60035SAF',
          description: `... mit Safran`,
          unit: '3kg TK',
          price: '14.50',
        },
      ]}
    />
    <h1>Saison-Gnocchi</h1>
    <ProductTable
      products={[
        {
          articleNr: 'Frühling',
          description: `... mit frischem Bärlauch`,
          unit: '3kg TK',
          price: '11.--',
        },
        {
          articleNr: 'Sommer',
          description: `... mit frischem Basilikum`,
          unit: '3kg TK',
          price: '11.--',
        },
        {
          articleNr: '',
          description: `... mit frischem Rosmarin`,
          unit: '3kg TK',
          price: '12.50',
        },
        {
          articleNr: '',
          description: `... mit Sommerkräutern (Zitronenthymian, Basilikum\nKerbel, Schnittlauch, Oregano, Lavendel, Majoran)`,
          unit: '3kg TK',
          price: '11.--',
        },
        {
          articleNr: '',
          description: `... mit getrockneten Tomaten und Basilikum`,
          unit: '3kg TK',
          price: '11.--',
        },
        {
          articleNr: 'Herbst',
          description: `... mit Kürbis und Kurkuma`,
          unit: '3kg TK',
          price: '11.--',
        },
        {
          articleNr: '',
          description: `... mit Steinpilzen`,
          unit: '3kg TK',
          price: '11.--',
        },
      ]}
    />
    <p><strong>Unsere Saison-Gnocchi sind auch ausserhalb der Saison erhältlich. Mindestbestellmenge 7&cent; &agrave; 3kg</strong></p>
    <h1>Spezial-Gnocchi</h1>
    <ProductTable
      products={[
        {
          articleNr: '',
          description: `... mit Blattspinat und Sonnenblumenkernen`,
          unit: '3kg TK',
          price: '11.--',
        },
        {
          articleNr: '',
          description: `... mit frischen Brennesseln`,
          unit: '3kg TK',
          price: '12.50',
        },
        {
          articleNr: '',
          description: `... mit Curry und Kokosmilch`,
          unit: '3kg TK',
          price: '11.--',
        },
        {
          articleNr: '',
          description: `... mit Kastanienmehl`,
          unit: '3kg TK',
          price: '13.--',
        },
        {
          articleNr: '',
          description: `... mit roher Rande`,
          unit: '3kg TK',
          price: '12.50',
        },
        {
          articleNr: '',
          description: `... mit Quark, frischem Ingwer und schwarzem Pfeffer`,
          unit: '3kg TK',
          price: '11.--',
        },
        {
          articleNr: '',
          description: `... mit schwarzen Oliven`,
          unit: '3kg TK',
          price: '11.--',
        },
        {
          articleNr: '',
          description: `... mit Sepiatinte`,
          unit: '3kg TK',
          price: '15.--',
        },
        {
          articleNr: '',
          description: `... Süsskartoffel-Gnocchi Mindestbestellung 48kg`,
          unit: '3kg TK',
          price: '13.--',
        },
        {
          articleNr: '',
          description: `... mit Zitronenschale und Zitronen-Melisse`,
          unit: '3kg TK',
          price: '11.--',
        },
        {
          articleNr: '',
          description: `oder Wunsch-Gnocchi auf Anfrage.`,
          unit: '',
          price: '',
        },
      ]}
    />
    <p><strong> Unsere Spezialgnocchi sind nur auf Bestellung erhältlich.  Mindestbestellmenge 7&cent; &agrave; 3kg </strong></p>
  </div>
)

export const query = graphql`
  query GnocchiImageQuery {
    backgroundImage: imageSharp(id: { regex: "/gnocchi/" }) {
      sizes(maxWidth: 1000 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
export default GnocchiPage;
