import React from 'react';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import ProductTable from '../../components/ProductTable';

const VeganPage = ({ data }) => (
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
      title="Vegane Teigwaren von Ingredienza | Ingredienza"
      meta={[
        { name: 'description', content: 'Bei Ingredienza gibt es vegane Teigwaren – denn bei uns gibt es für jeden das Passende. Genau das Richtige für Ihre vegane Kunden. Pasta kann auch vegan wunderbar schmecken. Mit Aubergine, Basilikum oder Spinat im Dinkel- oder Kurkumateig.  ► Entdecken Sie unsere veganen Teigwaren' },
        { name: 'keywords', content: 'Vegane Teigwaren' }
      ]}
    />
 
    <h1>Vegane Teigwaren aus Bern  – <br />Ingredienza goes vegan</h1>
    <p>
    Aufgrund der gestiegenen Nachfrage an veganer Pasta haben wir unser Angebot
    erweitert. Als eine der ersten Teigwaren-Manufakturen führen wir ein veganes
    Ravioli-Sortiment. Auch unsere Kartoffelgnocchi sind alle vegan. <br /><br />
    Die gefüllten veganen Teigwaren bieten wir in Kartons à 2 kg lose schockgefroren
    an.
    </p>
    <ProductTable
      showHeader={true}
      products={[
        {
          articleNr: 'V ITA007',
          description: `Aubergine-Mezzelune Grande im Kurkumateig`,
          unit: '2kg TK',
          price: '24.50',
        },
        {
          articleNr: 'V 40002',
          description: `Basilikum-Triangoli im Kurkumateig`,
          unit: '2kg TK',
          price: '23.50',
        },
        {
          articleNr: 'V 40001',
          description: `No-Muh (by Vegusto) Rondellen im Spinatteig`,
          unit: '2kg TK',
          price: '24.50',
        },
        {
          articleNr: 'VITA005',
          description: `Zitronen-Thymian-Raviolo Grande 7 x 9cm im weissen Teig\n(extra viel Füllung)`,
          unit: '2kg TK',
          price: '24.50',
        },
        {
          articleNr: 'V40005',
          description: `Steinpilz-Mezzelune Grande im Dinkelteig`,
          unit: '2kg TK',
          price: '25.50',
        },
        {
          articleNr: 'V50012',
          description: `Pastinaken-Rechtecke im Spinatteig (ab Oktober)`,
          unit: '2kg TK',
          price: '19.50',
        },
      ]}
    />
    <p> Auf Bestellung erhältlich. Mindestbestellmenge 5&cent; &agrave; 3kg TK </p>
    <ProductTable
      products={[
        {
          articleNr: 'VB600025',
          description: `Bio-weisse Nudeln`,
          unit: '3kg TK',
          price: '9.50',
        },
        {
          articleNr: 'V600135',
          description: `Spinat-Nudeln`,
          unit: '3kg TK',
          price: '10.50',
        },
      ]}
    />
    <p>Vegane Wunsch-Nudeln auf Anfrage.</p>
  </div>
)

export const query = graphql`
  query VeganImageQuery {
    backgroundImage: imageSharp(id: { regex: "/spez4/" }) {
      sizes(maxWidth: 1000 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
export default VeganPage;
