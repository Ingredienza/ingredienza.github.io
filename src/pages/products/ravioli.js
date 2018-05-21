import React from 'react';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import ProductTable from '../../components/ProductTable';

const RavioliPage = ({ data }) => (
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
    <p><b>...mit Kräutern und Gemüse</b></p>    
    <ProductTable
      showHeader={true}
      products={[
        {
          articleNr: 'BITA007',
          description: `Bio Auberginen-Triangoli im Eierteig`,
          unit: '2kg TK',
          price: '23.50',
        },
        {
          articleNr: 'B50002',
          description: `Bio Baumnuss-Mohn-Zitrone-Rechtecke im Spinatteig`,
          unit: '2kg TK',
          price: '24.50',
        },
        {
          articleNr: 'BITA003',
          description: `Bio Ricotta-Rucola-Quadrolini im Eierteig`,
          unit: '2kg TK',
          price: '23.50',
        },
        {
          articleNr: 'B30001',
          description: `Bio Ricotta-Spinat-Mezzelune 3-farbig gemischt`,
          unit: '2kg TK',
          price: '21.--',
        },
        {
          articleNr: 'BITA005',
          description: `Bio Ricotta-Zitronen-Rondellen im Eierteig`,
          unit: '2kg TK',
          price: '22.50',
        },
        {
          articleNr: '40042',
          description: `All' arrabbiata-Quadrolini grün-weiss gestreift`,
          unit: '2kg TK',
          price: '23.--',
        },
        {
          articleNr: 'ITA004',
          description: `Artischocken-Triangoli im Eierteig`,
          unit: '2kg TK',
          price: '22.50',
        },
        {
          articleNr: '20001',
          description: `Basilikum-Mezzelune Grande im Dinkelteig`,
          unit: '2kg TK',
          price: '18.50',
        },
        {
          articleNr: '40002',
          description: `Basilikum-Triangoli im Safranteig`,
          unit: '2kg TK',
          price: '22.50',
        },
        {
          articleNr: '10003',
          description: `Basilikum-Raviolini im Safranteig\nIdeal als Suppeneinlage 2.0 x 2.5cm.`,
          unit: '3kg TK',
          price: '13.50',
        },
        {
          articleNr: '10006',
          description: `Basilikum-Tortellini im Eierteig`,
          unit: '3kg TK',
          price: '13.50',
        },
        {
          articleNr: '20002',
          description: `Ricotta-Kräuter-Quadrolini rot-weiss gestreift`,
          unit: '2kg TK',
          price: '23.50',
        },
        {
          articleNr: '40006',
          description: `Pelati-Rondellen im Peterliteig`,
          unit: '2kg TK',
          price: '15.50',
        },
        {
          articleNr: 'ITA008',
          description: `Pomodori secchi-Ricotta-Triangoli im Eierteig`,
          unit: '2kg TK',
          price: '20.50',
        },
        {
          articleNr: 'ITA008M',
          description: `Pomodori secchi-Mascarpone-Rondellen im Eierteig`,
          unit: '2kg TK',
          price: '22.50',
        },
        {
          articleNr: '50001',
          description: `Ratatouille-Rechtecke im Dillteig`,
          unit: '2kg TK',
          price: '18.50',
        },
      ]}
    />
    <p><b>... mit Fleisch und Fisch</b></p>
    <ProductTable
      showHeader={true}
      products={[
        {
          articleNr: '40004',
          description: `Ratatouille-Rechtecke im Dillteig\n(Highland Rindfleisch von der Powerfarm in Lyssach)`,
          unit: '2kg TK',
          price: '23.50',
        },
        {
          articleNr: '50011',
          description: `Ricotta-Rauchlachs-Meerettich-Fischli im Dillteig\n(Alaska Wildlachs von Sami Gugger)`,
          unit: '2kg TK',
          price: '24.50',
        },
        {
          articleNr: '40030',
          description: `Rohschinken-Quadroloni im Eierteig`,
          unit: '2kg TK',
          price: '23.50',
        },
      ]}
    />
    <p><b>...mit Pilzen</b></p>
    <ProductTable
      showHeader={true}
      products={[
        {
          articleNr: '40005',
          description: `Steinpilz-Frischkäse-Rondellen im Eierteig`,
          unit: '2kg TK',
          price: '31.50',
        },
        {
          articleNr: '50021',
          description: `Butterpilz-Rondellen im Eierteig`,
          unit: '2kg TK',
          price: '19.50',
        },
      ]}
    />
    <p><b>... mit Käse</b></p>
    <ProductTable
      showHeader={true}
      products={[
        {
          articleNr: 'B50004',
          description: `Bio Ricotta-Balsamico-Rondellen im Peperoniteig`,
          unit: '2kg TK',
          price: '22.50',
        },
        {
          articleNr: '40001',
          description: `Ricotta-Parmesan-Rondellen im Paprikateig`,
          unit: '2kg TK',
          price: '18.50',
        },
        {
          articleNr: '40018',
          description: `Geisskäse-Pomodori secchi-Quadrolini im Schnittlauchteig`,
          unit: '2kg TK',
          price: '23.50',
        },
        {
          articleNr: '40021',
          description: `Ziegenfrischkäse-Honig-Thymian-Raviolo Grande`,
          unit: '2kg TK',
          price: '24.50',
        },
        {
          articleNr: '40033',
          description: `Quattro-Formaggi-Mezzelune Grande im Eierteig\n(Ricotta, Gorgonzola, Taleggio und Parmesan)`,
          unit: '2kg TK',
          price: '22.50',
        },
        {
          articleNr: '40044',
          description: `Feigen-Pecorino-Rechtecke im Eierteig`,
          unit: '2kg TK',
          price: '26.50',
        },
      ]}
    />
  </div>
)

export const query = graphql`
  query RavioliImageQuery {
    backgroundImage: imageSharp(id: { regex: "/ravioli1/" }) {
      sizes(maxWidth: 1000 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;

export default RavioliPage;
