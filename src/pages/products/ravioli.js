import React from 'react';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';

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
    <p><b>...mit Kr&auml;utern und Gem&uuml;se</b></p>    
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
        <td>BITA007</td>
        <td>Bio Auberginen-Triangoli im Eierteig</td>
        <td>&cent; &agrave; 2kg TK</td>
        <td>Fr. 23.50</td>
      </tr>
      <tr>
        <td>B50002</td>
        <td>Bio Baumnuss-Mohn-Zitrone-Rechtecke im Spinatteig</td>
        <td>&cent; &agrave; 2kg TK</td>
        <td>Fr. 24.50</td>
      </tr>
      <tr>
        <td>BITA003</td>
        <td>Bio Ricotta-Rucola-Quadrolini im Eierteig</td>
        <td>&cent; &agrave; 2kg TK</td>
        <td>Fr. 23.50</td>
      </tr>
      <tr>
        <td>B30001</td>
        <td>Bio Ricotta-Spinat-Mezzelune 3-farbig gemischt</td>
        <td>&cent; &agrave; 2kg TK</td>
        <td>Fr. 21.--</td>
      </tr>
      <tr>
        <td>BITA005</td>
        <td>Bio Ricotta-Zitronen-Rondellen im Eierteig</td>
        <td>&cent; &agrave; 2kg TK</td>
        <td>Fr. 22.50</td>
      </tr>
      <tr>
        <td>40042</td>
        <td>All'arrabbiata-Quadrolini grün-weiss gestreift</td>
        <td>&cent; &agrave; 2kg TK</td>
        <td>Fr. 22.50</td>
      </tr>
      <tr>
        <td>ITA004</td>
        <td>Artischocken-Triangoli im Eierteig</td>
        <td>&cent; &agrave; 2kg TK</td>
        <td>Fr. 22.50</td>
      </tr>
      <tr>
        <td>20001</td>
        <td>Basilikum-Mezzelune Grande im Dinkelteig</td>
        <td>&cent; &agrave; 2kg TK</td>
        <td>Fr. 18.50</td>
      </tr>
      <tr>
        <td>40002</td>
        <td>Basilikum-Triangoli im Safranteig</td>
        <td>&cent; &agrave; 2kg TK</td>
        <td>Fr. 22.50</td>
      </tr>
      <tr>
        <td>10003</td>
        <td>Basilikum-Raviolini im Safranteig<br /> Ideal als Suppeneinlage 2.0 x 2.5cm.</td>
        <td>&cent; &agrave; 3kg TK</td>
        <td>Fr. 13.50</td>
      </tr>
      <tr>
        <td>10006</td>
        <td>Basilikum-Tortellini im Eierteig</td>
        <td>&cent; &agrave; 5kg TK</td>
        <td>Fr. 13.50</td>
      </tr>
      
      <tr>
        <td>20002</td>
        <td>Ricotta-Kr&auml;uter-Quadrolini rot weiss gestreift</td>
        <td>&cent; &agrave; 2kg TK</td>
        <td>Fr. 23.50</td>
      </tr>
      <tr>
        <td>40006</td>
        <td>Pelati-Rondellen im Peterliteig</td>
        <td>&cent; &agrave; 2kg TK</td>
        <td>Fr. 15.50</td>
      </tr>
      <tr>
        <td>ITA 008</td>
        <td>Pomodori secchi-Ricotta-Triangoli im Eierteig</td>
        <td>&cent; &agrave; 2kg TK</td>
        <td>Fr. 20.50</td>
      </tr>
      <tr>
        <td>ITA008M</td>
        <td>Pomodori secchi-Mascarpone-Rondellen im Eierteig</td>
        <td>&cent; &agrave; 2kg TK</td>
        <td>Fr. 22.50</td>
      </tr>
      <tr>
        <td>50001</td>
        <td>Ratatouille-Rechtecke im Dillteig</td>
        <td>&cent; &agrave; 2kg TK</td>
        <td>Fr. 18.50</td>
      </tr>     
    </table>

    <p><b>... mit Fleisch und Fisch</b></p>
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
        <td>40004</td>
        <td>
          Brasato-Quadrolini-im Spinatteig<br />
          (Highland Rindfleisch von der Powerfarm in Lyssach)
        </td>
        <td>&cent; &agrave; 2kg TK</td>
        <td>Fr. 23.50</td>
      </tr>
      <tr>
        <td>50011</td>
        <td>
          Ricotta-Rauchlachs-Meerettich-Fischli im Dillteig<br />
          (Alaska Wildlachs von Sami Gugger)
        </td>
        <td>&cent; &agrave; 2kg TK</td>
        <td>Fr. 24.50</td>
      </tr>
      <tr>
        <td>40030</td>
        <td>Rohschinken-Quadroloni im Eierteig</td>
        <td>&cent; &agrave; 2kg TK</td>
        <td>Fr. 23.50</td>
      </tr>
    </table>

    <p><b>...mit Pilzen</b></p>

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
        <td>40005</td>
        <td>Steinpilz-Frischk&auml;se-Rondellen im Eierteig</td>
        <td>&cent; &agrave; 2kg TK</td>
        <td>Fr. 31.50</td>
      </tr>
      <tr>
        <td>50021</td>
        <td>Butterpilz-Rondellen im Eierteig</td>
        <td>&cent; &agrave; 2kg TK</td>
        <td>Fr. 19.50</td>
      </tr>
    </table>

    <p><b>... mit K&auml;se</b></p>

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
        <td>B50004</td>
        <td>Bio Ricotta-Balsamico-Rondellen im Peperoniteig</td>
        <td>&cent; &agrave; 2kg TK</td>
        <td>Fr. 22.50</td>
      </tr>
      <tr>
        <td>40001</td>
        <td>Ricotta-Parmesan-Rondellen im Paprikateig</td>
        <td>&cent; &agrave; 2kg TK</td>
        <td>Fr. 18.50</td>
      </tr>
      <tr>
        <td>40018</td>
        <td>Geissk&auml;se-Pomodori secchi-Quadrolini im Schnittlauchteig</td>
        <td>&cent; &agrave; 2kg TK</td>
        <td>Fr. 23.50</td>
      </tr>
      <tr>
        <td>40021</td>
        <td>Ziegenfrischk&auml;se-Honig-Thymian-Raviolo Grande</td>
        <td>&cent; &agrave; 2kg TK</td>
        <td>Fr. 24.50</td>
      </tr>
      <tr>
        <td>40033</td>
        <td>
          Quattro-Formaggi-Mezzelune Grande im Eierteig <br />
          (Ricotta, Gorgonzola, Taleggio und Parmesan)
        </td>
        <td>&cent; &agrave; 2kg TK</td>
        <td>Fr. 22.50</td>
      </tr>     
      <tr>
        <td>40044</td>
        <td>Feigen-Pecorino-Rechtecke im Eierteig</td>
        <td>&cent; &agrave; 2kg TK</td>
        <td>Fr. 26.50</td>
      </tr>     
    </table>
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
