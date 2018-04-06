import React from 'react';
import Helmet from 'react-helmet';

const NoodlePage = () => (
  <div>
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
          <td>B60001</td>
          <td>Bio Nur-Eier-Nudeln</td>
          <td>&cent; &agrave; 3kg TK</td>
          <td>Fr. 14.50</td>      
        </tr>
        <tr>
          <td>B60002</td>
          <td>Bio 5-Eier-Nudeln</td>
          <td>&cent; &agrave; 3kg TK</td>
          <td>Fr. 12.50</td>
        </tr>
        <tr>
          <td>B60013</td>
          <td>Bio Spinat-Nudeln</td>
          <td>&cent; &agrave; 3kg TK</td>
          <td>Fr. 13.50</td>
        </tr>
    </table>

    <p><b>Konventionelle Nudeln</b></p>

    <table border="0" bordercolor="#000000" cellpadding="5" cellspacing="0" width="660">
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
          <td>60002</td>
          <td>5-Eier-Nudeln</td>
          <td>&cent; &agrave; 3kg TK</td>
          <td>Fr 10.50</td>
        </tr>
        
        <tr>
          <td>60003</td>
          <td>Safran-Nudeln</td>
          <td>&cent; &agrave; 3kg TK</td>
          <td>Fr. 15.-</td>
        </tr>
        <tr>
          <td>60023</td>
          <td>Sepia-Nudeln (schwarz)</td>
          <td>&cent; &agrave; 3kg TK</td>
          <td>Fr. 15.50</td>
        </tr>
        <tr>
          <td>60013</td>
          <td>Spinat-Nudeln</td>
          <td>&cent; &agrave; 3kg TK</td>
          <td>Fr. 11.00</td>
        </tr>
    </table>

    <p>Die nachfolgenden Nudeln sind nur auf Bestellung erh&auml;ltlich.<br /> Mindestbezug 5&cent; &agrave; 3kg</p>
    <table border="0" bordercolor="#000000" cellpadding="5" cellspacing="0" width="660">
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
          <td>B60030</td>
          <td>Bio rote Peperoni-Nudeln</td>
          <td>&cent; &agrave; 3kg TK</td>
          <td>Fr. 14.50</td>
        </tr>
        <tr>
          <td>B60029</td>
          <td>Dinkel-Nudeln mit 100% Dinkelmehl</td>
          <td>&cent; &agrave; 3kg TK</td>
          <td>Fr. 11.50</td>
        </tr>
        <tr>
          <td>60015</td>
          <td>Basilikum-Nudeln</td>
          <td>&cent; &agrave; 3kg TK</td>
          <td>Fr 11.-</td>
        </tr>
        <tr>
          <td>60020</td>
          <td>Buchweizen-Nudeln</td>
          <td>&cent; &agrave; 3kg TK</td>
          <td>Fr. 13.50</td>
        </tr>
        <tr>
          <td>60027</td>
          <td>Curry-Nudeln</td>
          <td>&cent; &agrave; 3kg TK</td>
          <td>Fr. 11.-</td>
        </tr>
        <tr>
          <td>60014</td>
          <td>Dill-Nudeln</td>
          <td>&cent; &agrave; 3kg TK</td>
          <td>Fr. 12.50</td>
        </tr>
        <tr>
          <td>60019</td>
          <td>Espresso-Nudeln - Zu Pilzen und Kalb ein Gedicht.</td>
          <td>&cent; &agrave; 3kg TK</td>
          <td>Fr 12.50</td>
        </tr>
        <tr>
          <td>60026</td>
          <td>Kastanien-Nudeln</td>
          <td>&cent; &agrave; 3kg TK</td>
          <td>Fr. 15.-</td>
        </tr>
        <tr>
          <td>60005</td>
          <td>Knoblauch-Nudeln</td>
          <td>&cent; &agrave; 3kg TK</td>
          <td>Fr. 12.50</td>
        </tr>
        <tr>
          <td>60033</td>
          <td>K&uuml;rbis-Curry-Nudeln</td>
          <td>&cent; &agrave; 3kg TK</td>
          <td>Fr. 11.-</td>
        </tr>
        <tr>
          <td>60022</td>
          <td>Mohn-Nudeln</td>
          <td>&cent; &agrave; 3kg TK</td>
          <td>Fr. 11.50</td>
        </tr>
        <tr>
          <td>60042</td>
          <td>Orangen-Peperoncino-Nudeln</td>
          <td>&cent; &agrave; 3kg TK</td>
          <td>Fr. 13.50</td>
        </tr>
        <tr>
          <td>60012</td>
          <td>Petersilien-Nudeln</td>
          <td>&cent; &agrave; 3kg TK</td>
          <td>Fr. 12.50</td>
        </tr>
        <tr>
          <td>60017</td>
          <td>Pfefferminz-Nudeln</td>
          <td>&cent; &agrave; 3kg TK</td>
          <td>Fr. 13.-</td>
        </tr>
        <tr>
          <td>60011</td>
          <td>Randen-Nudeln</td>
          <td>&cent; &agrave; 3kg TK</td>
          <td>Fr. 11.50</td>
        </tr>
        <tr>
          <td>60018</td>
          <td>Schwarze Oliven-Nudeln</td>
          <td>&cent; &agrave; 3kg TK</td>
          <td>Fr. 12.50</td>
        </tr>
        <tr>
          <td>60046</td>
          <td>Schnittlauch-Nudeln</td>
          <td>&cent; &agrave; 3kg TK</td>
          <td>Fr. 13.-</td>
        </tr>
        <tr>
          <td>60006</td>
          <td>Sesam-Nudeln</td>
          <td>&cent; &agrave; 3kg TK</td>
          <td>Fr. 13.-</td>
        </tr>
        <tr>
          <td>60010</td>
          <td>Tomaten-Nudeln</td>
          <td>&cent; &agrave; 3kg TK</td>
          <td>Fr. 10.50</td>
        </tr>
        <tr>
          <td>60021</td>
          <td>Zimt-Nudeln</td>
          <td>&cent; &agrave; 3kg TK</td>
          <td>Fr. 11.50</td>
        </tr>
        <tr>
          <td>60008</td>
          <td>Zitronen-Nudeln</td>
          <td>&cent; &agrave; 3kg TK</td>
          <td>Fr. 12.-</td>
        </tr>
    </table>
  </div>
)

export default NoodlePage;
