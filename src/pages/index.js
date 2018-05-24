import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet';
import Img from 'gatsby-image';

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
    <h1>Ingredienza</h1><h2> frisch zubereitete Pastasorten aus Bern</h2>
    <p>
      INGREDIENZA... heisst Zutaten. Wir sind ein Unternehmen, welches sich ganz der
      Herstellung von erstklassigen Pastasorten widmet.  Was im Februar 1990 mit
      drei Sorten gefüllten Teigwaren begonnen hat, entwickelte sich zu einem
      abwechslungsreichen, fantasievollen und qualitativ hochwertigen Angebot an
      Pastasorten auf dem Schweizer Gastromarkt. Nebst saisonalen Spezialitäten
      führen wir über 40 Sorten gefüllte Teigwaren und ein grosses Nudelangebot in
      verschiedenen Schnittbreiten. Unsere Linie “Fatto a mano” gehört zum
      Exklusivsten, was es im Pastasektor zu entdecken gibt. 
    </p>

    <p>
      INGREDIENZA... heisst Zutaten, weil es uns wichtig ist, woher unsere
      Lebensmittel kommen. Da wir selbst seit Jahren unsere Pastasorten auf dem
      Berner Wochenmarkt anbieten, haben wir uns ein breites Netz an
      Landwirtschaftsbetrieben aufgebaut, welche uns mit Gemüsen und Kräutern
      beliefern. Einen grossen Teil unserer Produkte stellen wir in lizenzierter
      BIO-Qualität her – aus Überzeugung und Liebe zum besseren Produkt. 
    </p>

    <p>INGREDIENZA... heisst Zutaten.</p> 

    <p>Lassen Sie unsere Produkte eine wertvolle Zutat in Ihrer Küche werden.</p>

    <p>
      Übrigens - auch Privatpersonen sind bei uns herzlich willkommen. Kaufen Sie
      Ihre frische Pasta direkt in unserem Fabrikladen oder auf dem Wochenmarkt.  
    </p>
    <Link style={{color: '#000'}} to="/places/">Standorte</Link>
  </div>
)
export const query = graphql`
  query IndexImageQuery {
    backgroundImage: imageSharp(id: { regex: "/nudeln3/" }) {
      sizes(maxWidth: 1000 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;


export default IndexPage
