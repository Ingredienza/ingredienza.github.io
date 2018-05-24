import React from 'react'
import Helmet from 'react-helmet';
import Img from 'gatsby-image';

const Link = ({ to, children }) => (
  <li>
    <h3>
    <a
      style={{
        color: 'inherit',
      }}
      href={'http://' + to}
    >
      {children}
    </a>
    </h3>
  </li>
)

const IndexPage = ({ data }) => (
  <div>
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
      title="Berner Teigwaren-Manufaktur | Ingredienza"
      meta={[
        { name: 'description', content: 'Ingredienza – Ihre Teigwaren-Manufaktur aus Bern. Holen Sie sich frische Pastasorten aus der Region. Wir beliefern Ihren Gastronomiebetrieb mit frischen Teigwaren. Einzigartige Kreationen, die jeden Gourmet überraschen. Vielfalt und Kreativität ist bei uns Programm ► Entdecken Sie unser Angebot' },
        { name: 'keywords', content: 'Ingredienza, Pastasorten' }

      ]}
    />
    <h1>Freunde und Bekannte</h1>
    <ul style={{ listStyleType: 'none' }}>
      <Link to="www.chezvrony.ch">Chez Vrony Zermatt</Link>
      <Link to="www.baeren-oberbottigen.ch">Bären Oberbottigen</Link>
      <Link to="www.eventmakers.ch">Eventmakers Bern</Link>
      <Link to="www.balancehotels.ch/">Seerose Meisterschwanden</Link>
      <Link to="www.dapino-frohheim.ch">Da Pino Murten</Link>
      <Link to="www.stadthausag.ch/rotonde">Rotonde Biel</Link>
      <Link to="www.urspruenglech.ch">Ur.Sprünglech Sirup Bern</Link>
      <Link to="www.samses.ch">Samses Zürich</Link>
      <Link to="www.eigerbern.ch">Eiger Bern</Link>
      <Link to="www.du-nord.ch">Du Nord Bern</Link>
      <Link to="lebeizli.ch">Le Beizli Köniz</Link>
      <Link to="kirchenfeld.ch">Kirchenfeld Bern</Link>
      <Link to="restaurant-baerengasse.ch">Bärengasse Zürich</Link>
      <Link to="www.noa-restaurant.ch">NOA</Link>
      <Link to="www.restaurant-lechef.ch ">Le Chef </Link>
    </ul>
    <h1>Lieferanten und Partner</h1>
    <ul style={{ listStyleType: 'none' }}>
      <Link to="www.fideco.ch">Fideco</Link> 
      <Link to="www.hosberg.ch">Hosberg</Link> 
      <Link to="www.biopartner.ch">Bio Partner</Link> 
      <Link to="www.comestibles">Schröder</Link> 
      <Link to="www.mezzaluna.ch">MezzaLuna Zürich</Link> 
      <Link to="www.horai.ch">Horai</Link>
      <Link to="www.michel-comestibles.ch">Michel Comestibles Interlaken</Link>
      <Link to="catchmorefish.ch">Gertsch Catch more fish</Link>
      <Link to="www.alaska-wildlachs.ch">Alaska Wildlachs Sam Gugger</Link>
      <Link to="www.polarag.ch">Polar Rheinach</Link>
    </ul>

  </div>
)
export const query = graphql`
  query LinksImageQuery {
    backgroundImage: imageSharp(id: { regex: "/nudeln3/" }) {
      sizes(maxWidth: 1000 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;


export default IndexPage
