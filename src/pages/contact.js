import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';

const ContactPage = ({ data }) => (
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
      title="Kontakt | Ingredienza"
      meta={[
        { name: 'description', content: 'Nehmen Sie Kontakt auf mit uns. Gerne beantworten wir Ihre Frage oder nehmen Bestellungen entgegen. Überzeugen Sie sich von unserem vielfältigen Angebot. Ingredienza – Ihre Teigwarenmanufaktur für frische Pasta für Ihren Gastronomiebetrieb  ► Kontaktieren Sie uns' },
        { name: 'keywords', content: 'Kontakt' }
      ]}
    />
    <h1>Kontakt</h1>

    <p>
      Haben Sie Fragen oder möchten Sie eine Bestellung aufgeben? Dann treten
      Sie mit uns in Kontakt. Sie können uns telefonisch, per E-Mail oder Fax
      erreichen.
    </p>

    <p>
      Tel: +41(0)31 382 42 42<br />
      Fax: +41(0)31 382 49 05<br />
      Mail: <a href="mailto:info@ingredienza.ch?subject=Kontakt%20Ingredienza.ch"> info(at)ingredienza.ch </a>
    </p>

    <p>
      Ingredienza – die Teigwaren-Manufaktur GmbH <br />
      Rolf Thalheim<br />
      Güterstrasse 7 3008<br />
      Bern<br />
    </p>

  </div>
)

export const query = graphql`
  query ContactImageQuery {
    backgroundImage: imageSharp(id: { regex: "/fatto3/" }) {
      sizes(maxWidth: 1000 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;

export default ContactPage;
