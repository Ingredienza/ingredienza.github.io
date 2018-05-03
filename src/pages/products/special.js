import React from 'react';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import ProductTable from '../../components/ProductTable';

const SpecialPage = ({ data }) => (
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
    <ProductTable
      showHeader={true}
      products={[
        {
          articleNr: '40034',
          description: `Apfel-Thymian mit Honig und Ricotta`,
          unit: '2kg TK',
          price: '23.50',
        },
        {
          articleNr: 'B50003',
          description: `Broccoli-Quark`,
          unit: '2kg TK',
          price: '20.50',
        },
        {
          articleNr: '40025',
          description: `Chorizobrät-Rahm`,
          unit: '2kg TK',
          price: '27.--',
        },
        {
          articleNr: '40027',
          description: `Feigen-Mascarpone (Dessertravioli)`,
          unit: '2kg TK',
          price: '25.--',
        },
        {
          articleNr: '40020',
          description: `Geisskäse mit Rosinen und Peperoncino`,
          unit: '2kg TK',
          price: '22.50',
        },
        {
          articleNr: '40009',
          description: `Gorgonzola`,
          unit: '2kg TK',
          price: '24.50',
        },
        {
          articleNr: '40009B',
          description: `Gorgonzola-Baumnuss`,
          unit: '2kg TK',
          price: '25.--',
        },
        {
          articleNr: '40021',
          description: `Kalbsbrät-Mangold (Sommer)`,
          unit: '2kg TK',
          price: '21.50',
        },
        {
          articleNr: '50016',
          description: `Kerbel-Ricotta-Knoblauch (Sommer)`,
          unit: '2kg TK',
          price: '20.50',
        },
        {
          articleNr: '50005',
          description: `Kürbis-Amaretti-Senffrüchte (Herbst)`,
          unit: '2kg TK',
          price: '23.50',
        },
        {
          articleNr: '40039',
          description: `Lachs mit Fenchel`,
          unit: '2kg TK',
          price: '23.50',
        },
        {
          articleNr: '40028',
          description: `Lauch mit Gemüsebrunoise`,
          unit: '2kg TK',
          price: '22.50',
        },
        {
          articleNr: 'MARRON',
          description: `Marron glacè-Orange (Herbst)`,
          unit: '2kg TK',
          price: '22.50',
        },
        {
          articleNr: '50013',
          description: `Mousseline de saumon\nLachs, Rahm, Gemüsebrunoise und Gewürze`,
          unit: '2kg TK',
          price: '25.50',
        },
        {
          articleNr: '40035',
          description: `Randen-Apfel`,
          unit: '2kg TK',
          price: '19.50',
        },
        {
          articleNr: '40032',
          description: `Rosenkohl-Rohschinken (Winter)`,
          unit: '2kg TK',
          price: '23.50',
        },
        {
          articleNr: '40036',
          description: `Rüebli-Rhabarber`,
          unit: '2kg TK',
          price: '19.50',
        },
        {
          articleNr: '20003',
          description: `Schinken-Ricotta-Schnittlauch`,
          unit: '2kg TK',
          price: '28.50',
        },
        {
          articleNr: '40037',
          description: `Sellerie`,
          unit: '2kg TK',
          price: '19.50',
        },
        {
          articleNr: '30002',
          description: `Shii Take-Soja-Haselnuss`,
          unit: '2kg TK',
          price: '27.--',
        },
        {
          articleNr: '40024',
          description: `Steinpilz-Spinat-Ricotta`,
          unit: '2kg TK',
          price: '24.50',
        },
        {
          articleNr: '40017',
          description: `Trevisano (Sommer)`,
          unit: '2kg TK',
          price: '29.50',
        },
        {
          articleNr: '40038',
          description: `Vermicelles Dessertravioli`,
          unit: '2kg TK',
          price: '25.--',
        },
      ]}
    />
  </div>
)

export const query = graphql`
  query SpecialImageQuery {
    backgroundImage: imageSharp(id: { regex: "/spez2/" }) {
      sizes(maxWidth: 1000 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
export default SpecialPage;
