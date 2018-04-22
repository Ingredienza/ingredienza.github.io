import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';

const ProductPage = ({ data }) => (
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
      title="Produkte – Frische Teigwaren aus Bern  | Ingredienza"
      meta={[
        { name: 'description', conent: 'Teigwaren für jeden Geschmack – denn Ingredienza bietet eine beinahe grenzenlose Vielfalt. Bei uns gibt es fast nichts, was es nicht gibt. Egal ob Ravioli, Nudeln, Pasta aus Saisongemüse oder Gnocchi. Bei uns werden Pasta-Wünsche erfüllt. ► Entdecken Sie unsere vielfältigen Teigwaren' },
        { name: 'keywords', content: 'Teigwaren' },
      ]}

    />
    <h1>Frische Teigwaren aus Bern</h1>
      <p>
      Peppen Sie Ihre Gastroküche mit frischen Teigwaren und Gnocchi aus unserer
      Teigwaren-Manufaktur auf. Bei uns gibt es fast nichts, was es nicht gibt, und
      sicher nichts, wie gewohnt. Mit unseren Kreationen zeigen wir, wie
      abwechslungsreich in Farbe, Form und Geschmack Teigwaren sein können. 
      </p>
      <p>
      Auch vegane Gäste und Kunden kommen bei uns auf ihre Kosten. Unser
      Sortiment an veganer Pasta mit Pastinaken, No-Muh oder Auberginen ist ebenso
      abwechslungsreich wie das restliche Angebot.
      </p>
      <p>     
      Wenn Sie sich für saisonale Produkte interessieren, dann sind unsere
      Saisonspezialitäten genau das Richtige. So präsentieren wir Ihnen im Frühling
      unsere Spargel-Rondellen, im Sommer Eierschwämmli-Teigwaren und im Herbst &
      Winter unsere Hirsch-Butterpilz-Apfel-Quadrolini. 
      </p>
      <p>
      Bieten Sie Ihren Gästen Exklusivität pur – und das mit unserer Linie
      „Fatto a mano“. Wie der Name sagt, werden diese Teigwaren von Hand
      hergestellt. Jeder der köstlichen Safransterne und jedes Cuore d’amore mit
      Ricottafüllung ist somit ein Unikat. Unsere „Fatto a mano“-Linie ist premium –
      einfach ideal für Gäste, die das Besondere lieben.
      </p>
  </div>
)

export const query = graphql`
  query ProductsImageQuery {
    backgroundImage: imageSharp(id: { regex: "/spez5/" }) {
      sizes(maxWidth: 1000 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;

export default ProductPage;
