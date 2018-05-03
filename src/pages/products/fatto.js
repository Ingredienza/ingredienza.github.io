import React from 'react';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import ProductTable from '../../components/ProductTable';

const FattoPage = ({ data }) => (
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
      title="Gourmet Ravioli von Ingredienza | Ingredienza"
      meta={[
        { name: 'description', content: 'Wir von Ingredienza kümmern uns um Ihre Pasta-Wünsche. Gerne präsentieren wir Ihnen unser exklusivstes Angebot – unsere gourmet Pasta. Diese Pasta wird mit viel Sorgfalt und Liebe in Bern von Hand hergestellt. Für jeden, der das Besondere liebt genau das Richtige. ► Zur einmaligen Gourmet Pasta von Ingredienza' },
      ]}
    />
 
    <h1>Fatto a Mano – von Hand gemacht</h1>
    <p>
      Die Linie „Fatto a mano“ hält, was ihr Name verspricht – die Pasta wird mit
      viel Sorgfalt von Hand hergestellt. „Fatto a mano“ gehört zum Exklusivsten,
      was es im Pastasektor zu entdecken gibt. 
    </p>
    <ProductTable
      showHeader={true}
      products={[
        {
          articleNr: '700110',
          description: `Steinpilz-Frischkäse-Tortogrossi\nim schwarz-gelb gestreiften Kleid, ca. 50g /Stück`,
          unit: '2kg TK',

          price: '65.--',
        }, 
        {
          articleNr: '70050',
          description: `Cuore d’amore mit feiner Ricotta-Zitronenfüllung\nca. 50g /Stück`,
          unit: '1kg TK',

          price: '45.--',
        }, 
        {
          articleNr: '70070',
          description: `Safranstern mit weisser Trüffelfüllung ca. 50g /Stück\n(November bis Januar)`,
          unit: '1kg TK',

          price: '69.--',
        }, 
      ]}
    />
    <p> Auf Bestellung erhältlich. Mindestmenge 5 kg. </p>
    <ProductTable
      products={[
        {
          articleNr: '70020',
          description: `Steinpilz-Frischkäse Borsellini im Eierteig\nmit einer Lilienblüte gebunden, ca. 30gr/Stück`,
          unit: '1kg TK',

          price: '67.--',
        }, 
        {
          articleNr: '70020S',
          description: `Steinpilz-Frischkäse Borsellini im Sepiateig\nmit einer Lilienblüte gebunden, ca. 30gr/Stück`,
          unit: '1kg TK',

          price: '69.--',
        }, 
      ]}
    />
  </div>
)

export const query = graphql`
  query FattoImageQuery {
    backgroundImage: imageSharp(id: { regex: "/fatto1/" }) {
      sizes(maxWidth: 1000 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
export default FattoPage;
