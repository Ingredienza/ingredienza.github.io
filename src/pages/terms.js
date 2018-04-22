import React from 'react';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';


const TermsPage = ({ data }) => (
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
      title="Konditionen Gastronomie | Ingredienza"
      meta={[
        { name: 'description', content: 'Ingredienza, das ist Ihre Teigwarenmanufaktur aus Bern. Frische Zutaten aus der Region zu vielseitigen Pasta-Kreationen weiterverarbeiten – das ist unsere Leidenschaft. Interessieren Sie sich für unser Angebot?  ► Erfahren Sie mehr zu unseren Konditionen für die Gastronomie' },
        { name: 'keywords', content: 'Konditionen' }
      ]}
    />
    <h1>Unsere Konditionen – für Ihren Gastronomiebetrieb</h1>
    <p>
    Unsere Konditionen sind gültig ab 1. Dezember 2017
    </p>
    <table border="0" bordercolor="#000000" cellpadding="2" cellspacing="2" width="660">
      <colgroup>
          <col width="100" />
          <col width="450" />
      </colgroup>
      <tr>
        <td>Bestellung:</td>
        <td>Ihre Bestellung erreicht uns per Telefon, Fax oder E-Mail. <br />
<b>Eing&auml;nge bis 09.30h werden am folgenden Arbeitstag geliefert. </b></td>
      </tr>
      <tr>
        <td>Lieferung und Preise</td>
        <td>Wir bieten unsere Produkte generell lose schockgefroren an (TK) <br />
            Bern und umliegende Regionen beliefern wir per K&uuml;hlwagen (Keine Mindestbestellmenge).<br />
            F&uuml;r alle Regionen in der Schweiz verf&uuml;gen wir &uuml;ber
            ein gut funktionierendes Verteilsystem durch Tiefk&uuml;hltransport
            Unternehmen.<br /> Beim Einkauf ab Fr. 200.-- ist die Lieferung franko Domizil.<br />
            Unter Fr. 200.-- gelten die effektiven Frachtkosten. <br /> F&uuml;r Lieferungen
            am Samstag werden Frachtkosten von Fr. 60.-- verrechnet. <br /> Terminlieferungen
            im Zeitfenster von &lt;/= 2 Std sowie vor 10.00h kosten plus Fr. 50.--. <br />
            Unsere Preise verstehen sich netto exklusive 2,5 % MwSt. &Auml;nderungen vorbehalten.

          </td>
      </tr>
      <tr>
        <td>Rabatte <br />
        pro Bestellung:</td>
        <td>
          2% &nbsp;&nbsp;&nbsp;&nbsp;ab Fr. &nbsp;&nbsp;700.--<br />
        5% &nbsp;&nbsp;&nbsp;&nbsp;ab Fr. 1000.--<br />
        7% &nbsp;&nbsp;&nbsp;&nbsp;ab Fr. 1500.--<br />
        10% &nbsp;&nbsp;ab Fr. 2000.--<br />
        </td>
      </tr>
      <tr>
        <td>Selbstabholer</td>
        <td>5% Rabatt</td>
      </tr>
      <tr>
        <td>Barzahler</td>
        <td>5% Rabatt</td>
      </tr>
      <tr>
        <td>Zahlung:</td>
        <td>Die Rechnungen sind innert 30 Tagen netto zur Zahlung f&auml;llig.</td>
      </tr>
    </table>
  </div>
)

export const query = graphql`
  query TermsImageQuery {
    backgroundImage: imageSharp(id: { regex: "/saison2/" }) {
      sizes(maxWidth: 1000 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
export default TermsPage;
