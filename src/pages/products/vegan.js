import React from 'react';
import Helmet from 'react-helmet';

const VeganPage = () => (
  <div>
    <Helmet
      title="Vegane Teigwaren von Ingredienza | Ingredienza"
      meta={[
        { name: 'description', content: 'Bei Ingredienza gibt es vegane Teigwaren – denn bei uns gibt es für jeden das Passende. Genau das Richtige für Ihre vegane Kunden. Pasta kann auch vegan wunderbar schmecken. Mit Aubergine, Basilikum oder Spinat im Dinkel- oder Kurkumateig.  ► Entdecken Sie unsere veganen Teigwaren' },
        { name: 'keywords', content: 'Vegane Teigwaren' }
      ]}
    />
 
    <h1>Vegane Teigwaren aus Bern – Ingredienza goes vegan</h1>
    <p>
    Aufgrund der gestiegenen Nachfrage an veganer Pasta haben wir unser Angebot
    erweitert. Als eine der ersten Teigwaren-Manufakturen führen wir ein veganes
    Ravioli-Sortiment. Auch unsere Kartoffelgnocchi sind alle vegan. <br /><br />
    Die gefüllten veganen Teigwaren bieten wir in Kartons à 2 kg lose schockgefroren
    an.
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
        <td>V ITA007</td>
        <td>Aubergine-Mezzelune Grande im Kurkumateig</td>
        <td>&cent; &agrave; 2kg TK</td>
        <td>Fr. 24.50</td>
      </tr> 
      <tr>
        <td>V 40002</td>
        <td>Basilikum-Triangoli im Kurkumateig</td>
        <td>&cent; &agrave; 2kg TK</td>
        <td>Fr. 23.50</td>
      </tr>
      <tr>
        <td>V 40001</td>
        <td>No-Muh (by Vegusto) Rondellen im Spinatteig</td>
        <td>&cent; &agrave; 2kg TK</td>
        <td>Fr. 24.50</td>
      </tr>
      <tr>
        <td>VITA005</td>
        <td>Zitronen-Thymian-Raviolo Grande 7 x 9cm im weissen Teig <br /> (extra viel F&uuml;llung)</td>
        <td>&cent; &agrave; 2kg TK</td>
        <td>Fr. 24.50</td>
      </tr>
      <tr>
        <td>V40005</td>
        <td>Steinpilz-Mezzelune Grande im Dinkelteig</td>
        <td>&cent; &agrave; 2kg TK</td>
        <td>Fr. 25.50</td>
      </tr>
      <tr>
        <td>V50012</td>
        <td>Pastinaken-Rechtecke im Spinatteig (ab Oktober)</td>
        <td>&cent; &agrave; 2kg TK</td>
        <td>Fr. 19.50</td>
      </tr>
    </table>

    <p> Auf Bestellung erh&auml;ltlich. Mindestmenge 5&cent; &agrave; 3kg TK </p>

    <table border="0" bordercolor="#000000" cellpadding="2" cellspacing="2" width="660">
      <colgroup>
        <col width="100" />
        <col width="350" />
        <col width="100" />
        <col width="100" />
      </colgroup>
      <tr>
        <td>VB600025</td>
        <td>Bio-weisse Nudeln</td>
        <td>&cent; &agrave; 3kg TK</td>
        <td>Fr. 9.50</td>
      </tr>
      <tr>
        <td>V600135</td>
        <td>Spinat-Nudeln</td>
        <td>&cent; &agrave; 3kg TK</td>
        <td>Fr. 10.50</td>
      </tr>
    </table>
    <p>Vegane Wunsch-Nudeln auf Anfrage.</p>
  </div>
)

export default VeganPage;
