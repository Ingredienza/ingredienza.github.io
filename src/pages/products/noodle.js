import React from 'react';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import ProductTable from '../../components/ProductTable';

const NoodlePage = ({ data }) => (
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
    <p><b>Bio-Nudeln</b></p>
    <ProductTable
      showHeader={true}
      products={[
        {
          articleNr: 'B60001',
          description: `Bio Nur-Eier-Nudeln`,
          unit: '3kg TK',
          price: '14.50',
        },
        {
          articleNr: 'B60002',
          description: `Bio 5-Eier-Nudeln`,
          unit: '3kg TK',
          price: '12.50',
        },
        {
          articleNr: 'B60013',
          description: `Bio Spinat-Nudeln`,
          unit: '3kg TK',
          price: '13.50',
        },
      ]}
    />
    <p><b>Konventionelle Nudeln</b></p>
    <ProductTable
      showHeader={true}
      products={[
        {
          articleNr: '60002',
          description: `5-Eier-Nudeln`,
          unit: '3kg TK',
          price: '10.50',
        },
        {
          articleNr: '60003',
          description: `Safran-Nudeln`,
          unit: '3kg TK',
          price: '15.--',
        },
        {
          articleNr: '60023',
          description: `Sepia-Nudeln (schwarz)`,
          unit: '3kg TK',
          price: '15.50',
        },
        {
          articleNr: '60013',
          description: `Spinat-Nudeln`,
          unit: '3kg TK',
          price: '11.--',
        },
      ]}
    />
    <p>Die nachfolgenden Nudeln sind nur auf Bestellung erhältlich.<br /> Mindestbezug 5&cent; &agrave; 3kg</p>
    <ProductTable
      showHeader={true}
      products={[
        {
          articleNr: 'B60030',
          description: `Bio rote Peperoni-Nudeln`,
          unit: '3kg TK',
          price: '14.50',
        },
        {
          articleNr: 'B60029',
          description: `Dinkel-Nudeln mit 100% Dinkelmehl`,
          unit: '3kg TK',
          price: '11.50',
        },
        {
          articleNr: '60015',
          description: `Basilikum-Nudeln`,
          unit: '3kg TK',
          price: '11.--',
        },
        {
          articleNr: '60020',
          description: `Buchweizen-Nudeln`,
          unit: '3kg TK',
          price: '13.50',
        },
        {
          articleNr: '60027',
          description: `Curry-Nudeln`,
          unit: '3kg TK',
          price: '11.--',
        },
        {
          articleNr: '60014',
          description: `Dill-Nudeln`,
          unit: '3kg TK',
          price: '12.50',
        },
        {
          articleNr: '60019',
          description: `Espresso-Nudeln - Zu Pilzen und Kalb ein Gedicht`,
          unit: '3kg TK',
          price: '12.50',
        },
        {
          articleNr: '60026',
          description: `Kastanien-Nudeln`,
          unit: '3kg TK',
          price: '15.--',
        },
        {
          articleNr: '60005',
          description: `Knoblauch-Nudeln`,
          unit: '3kg TK',
          price: '12.50',
        },
        {
          articleNr: '60033',
          description: `Kürbis-Curry-Nudeln`,
          unit: '3kg TK',
          price: '11.--',
        },
        {
          articleNr: '60022',
          description: `Mohn-Nudeln`,
          unit: '3kg TK',
          price: '11.50',
        },
        {
          articleNr: '60042',
          description: `Orangen-Peperoncino-Nudeln`,
          unit: '3kg TK',
          price: '13.50',
        },
        {
          articleNr: '60012',
          description: `Petersilien-Nudeln`,
          unit: '3kg TK',
          price: '12.50',
        },
        {
          articleNr: '60017',
          description: `Pfefferminz-Nudeln`,
          unit: '3kg TK',
          price: '13.--',
        },
        {
          articleNr: '60011',
          description: `Randen-Nudeln`,
          unit: '3kg TK',
          price: '11.50',
        },
        {
          articleNr: '60018',
          description: `Oliven-Nudeln`,
          unit: '3kg TK',
          price: '12.50',
        },
        {
          articleNr: '60046',
          description: `Schnittlauch-Nudeln`,
          unit: '3kg TK',
          price: '13.--',
        },
        {
          articleNr: '60006',
          description: `Sesam-Nudeln`,
          unit: '3kg TK',
          price: '13.--',
        },
        {
          articleNr: '60010',
          description: `Tomaten-Nudeln`,
          unit: '3kg TK',
          price: '10.50',
        },
        {
          articleNr: '60021',
          description: `Zimt-Nudeln`,
          unit: '3kg TK',
          price: '11.50',
        },
        {
          articleNr: '60008',
          description: `Zitronen-Nudeln`,
          unit: '3kg TK',
          price: '12.--',
        },
      ]}
    />
  </div>
)

export const query = graphql`
  query NoodlesImageQuery {
    backgroundImage: imageSharp(id: { regex: "/nudeln1/" }) {
      sizes(maxWidth: 1000 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;

export default NoodlePage;
