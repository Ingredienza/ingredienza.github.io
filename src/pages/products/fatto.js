import React from 'react';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';

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
      <table border="0" bordercolor="#000000" cellpadding="2" cellspacing="2" width="660">
        <colgroup>
          <col width="100" />
          <col width="350" />
          <col width="100" />
          <col width="100" />
        </colgroup>
        <tr>
          <th>Art.Nr</th>
          <th>Produkt</th>
          <th>Einheit</th>
          <th>Fr. / kg</th>
        </tr>
        <tr>
          <td>700110</td>
          <td>Steinpilz-Frischk&auml;se-Tortogrossi<br /> im schwarz-gelb gestreiften Kleid,<br /> ca. 50g /St&uuml;ck.</td>
          <td>&cent; &agrave; 2kg TK</td>
          <td>Fr. 65.--</td>
        </tr>
        <tr>
          <td>70050</td>
          <td>Cuore d'amore mit feiner Ricotta-Zitronenf&uuml;llung,<br /> ca. 50g /St&uuml;ck.</td>
          <td>&cent; &agrave; 1kg TK</td>
          <td>Fr. 45.--</td>
        </tr>
        <tr>
          <td>70070</td>
          <td>Safranstern mit weisser Tr&uuml;ffelf&uuml;llung, ca. 50g /St&uuml;ck. <br /> (November bis Januar)</td>
          <td>&cent; &agrave; 1kg TK</td>
          <td>Fr. 69.--</td>
        </tr>
    </table>
    <p> Auf Bestellung erh&auml;ltlich. Mindestmenge 5 kg. </p>
    <table border="0" bordercolor="#000000" cellpadding="2" cellspacing="2" width="660">
      <colgroup>
        <col width="100" />
        <col width="350" />
        <col width="100" />
        <col width="100" />
      </colgroup>
      <tr>
        <td>70020</td>
        <td>Steinpilz-Frischk&auml;se Borsellin im Eierteig <br /> mit einer Lilienbl&uuml;te gebunden, ca. 30g /St&uuml;ck.</td>
        <td>&cent; &agrave; 1kg TK</td>
        <td>Fr. 67.--</td>
      </tr>
      <tr>
        <td>70020S</td>
        <td>Steinpilz-Frischkäse Borsellin im Sepiateig <br /> mit einer Lilienblütegebunden, ca. 30g /Stück.</td>
        <td>&cent; &agrave; 1kg TK</td>
        <td>Fr. 69.--</td>
      </tr>
    </table>

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
