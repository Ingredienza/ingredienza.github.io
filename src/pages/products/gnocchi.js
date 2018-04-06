import React from 'react';
import Helmet from 'react-helmet';
import styles from '../../styles/gnocchi.module.css';

const GnocchiPage = () => (
  <div>
    <Helmet
      title="Gnocchi von Ingredienza | Ingredienza"
      meta={[
        { name: 'description', content: 'Frisch, variantenreich, fein und der ideale Farbtupfer auf jedem Pasta-Teller – das sind unsere Gnocchi. Denn bei uns gibt es alles, was das Gnocchi-Herz begehrt. Unsere Gnocchi-Kreationen sind vielfältig und passen ideal als Hauptspeise oder Beilage ► Sehen Sie sich unsere Gnocchi an' },
        { name: 'keywords', content: 'Gnocchi' }
      ]}
    />
    <h1>Unsere abwechslungsreichen Gnocchi-Kreationen</h1>
    <p>
      Für unsere Gnocchi by Ingredienza verwandeln wir das klassische
      Kartoffel-Gnocchi in etwas ganz Besonderes. Verzaubern Sie Ihre Gäste mit
      abwechslungsreichen Gnocchi-Kreationen. Kombinieren Sie die unterschiedlichen
      Sorten nach Lust und Laune als bunte Hauptspeise oder Beilage.
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
        <td>60035</td>
        <td>Kartoffel-Gnocchi</td>
        <td>&cent; &agrave; 3kg TK</td>
        <td>Fr. 10.--</td>			
      </tr>
      <tr>
        <td>60036</td>
        <td>... mit Spinat</td>
        <td>&cent; &agrave; 3kg TK</td>
        <td>Fr. 11.--</td>			
      </tr>
      <tr>
        <td>60050</td>
        <td>... mit Paprika</td>
        <td>&cent; &agrave; 3kg TK</td>
        <td>Fr. 11.--</td>			
      </tr>
      <tr>
        <td>60035SAF</td>
        <td>... mit Safran</td>
        <td>&cent; &agrave; 3kg TK</td>
        <td>Fr. 14.50</td>			
      </tr>
  </table>
  <h1>Saison-Gnocchi</h1>
  <table border="0" bordercolor="#000000" cellpadding="2" cellspacing="2" width="660">
      <colgroup>
          <col width="100" />
          <col width="350" />
          <col width="100" />
          <col width="100" />
      </colgroup>
      <tr>
        <th></th>
        <th>Produkt</th>
        <th>Einheit</th>
        <th>Fr. / kg</th>
      </tr>
      <tr>
        <td>Fr&uuml;hling</td>
        <td>... mit frischem B&auml;rlauch</td>
        <td>&cent; &agrave; 3kg TK</td>
        <td>Fr. 11.--</td>			
      </tr>
      <tr>
        <td>Sommer</td>
        <td>... mit frischem Basilikum</td>
        <td>&cent; &agrave; 3kg TK</td>
        <td>Fr. 11.--</td>			
      </tr>
      <tr>
        <td></td>
        <td>... mit frischem Rosmarin</td>
        <td>&cent; &agrave; 3kg TK</td>
        <td>Fr. 12.50</td>			
      </tr>
      <tr>
        <td></td>
        <td>... mit diversen Sommerkr&auml;utern (Zitronenthymian, Basilikum,
            Kerbel, Schnittlauch, Oregano, Lavendel, Mayoran)
        </td>
        <td>&cent; &agrave; 3kg TK</td>
        <td>Fr. 11.--</td>			
      </tr>
      <tr>
        <td></td>
        <td>... mit getrockneten Tomaten und Basilikum</td>
        <td>&cent; &agrave; 3kg TK</td>
        <td>Fr. 11.--</td>			
      </tr>
      <tr>
        <td>Herbst</td>
        <td>... mit K&uuml;rbis und Kurkuma</td>
        <td>&cent; &agrave; 3kg TK</td>
        <td>Fr. 11.--</td>			
      </tr>
      <tr>
        <td></td>
        <td>... mit Steinpilzen</td>
        <td>&cent; &agrave; 3kg TK</td>
        <td>Fr. 11.--</td>			
      </tr>
  </table> 
  <p>Auch ausserhalb der Saison erh&auml;ltlich. Mindestbestellmenge 7&cent; &agrave; 3kg</p>
  <h1>Spezial-Gnocchi</h1>
  <table border="0" bordercolor="#000000" cellpadding="2" cellspacing="2" width="660">
      <colgroup>
          <col width="100" />
          <col width="350" />
          <col width="100" />
          <col width="100" />
      </colgroup>
      <tr>
        <th></th>
        <th>Produkt</th>
        <th>Einheit</th>
        <th>Fr. / kg</th>
      </tr>
      <tr>
        <td></td>
        <td>... mit Blattspinat und Sonnenblumenkernen</td>
        <td>&cent; &agrave; 3kg TK</td>
        <td>Fr. 11.--</td>			
      </tr>
      <tr>
        <td></td>
        <td>... mit frischen Brennesseln</td>
        <td>&cent; &agrave; 3kg TK</td>
        <td>Fr. 12.50</td>			
      </tr>
      <tr>
        <td></td>
        <td>... mit Curry und Kokosmilch</td>
        <td>&cent; &agrave; 3kg TK</td>
        <td>Fr. 11.--</td>			
      </tr>
      <tr>
        <td></td>
        <td>... mit Kastanienmehl</td>
        <td>&cent; &agrave; 3kg TK</td>
        <td>Fr. 13.--</td>			
      </tr>
      <tr>
        <td></td>
        <td>... mit roher Rande</td>
        <td>&cent; &agrave; 3kg TK</td>
        <td>Fr. 12.50</td>			
      </tr>
      <tr>
        <td></td>
        <td>... mit Quark, frischem Ingwer und schwarzem Pfeffer</td>
        <td>&cent; &agrave; 3kg TK</td>
        <td>Fr. 11.--</td>			
      </tr>
      <tr>
        <td></td>
        <td>... mit schwarzen Oliven</td>
        <td>&cent; &agrave; 3kg TK</td>
        <td>Fr. 11.--</td>			
      </tr>
      <tr>
        <td></td>
        <td>... mit Sepiatinte</td>
        <td>&cent; &agrave; 3kg TK</td>
        <td>Fr. 15.--</td>			
      </tr>
      <tr>
        <td></td>
        <td>... S&uuml;sskartoffel-Gnocchi Mindestbestellung 48kg</td>
        <td>&cent; &agrave; 3kg TK</td>
        <td>Fr. 13.--</td>			
      </tr>
      <tr>
        <td></td>
        <td>... mit Zitronenschale und Zitronen-Melisse</td>
        <td>&cent; &agrave; 3kg TK</td>
        <td>Fr. 11.--</td>			
      </tr>
      <tr>
        <td></td>
        <td>... oder Wunsch-Gnocchi auf Anfrage.</td>
        <td></td>
        <td></td>
      </tr>
    </table> 
    <p> Unsere Spezialgnocchi sind nur auf Bestellung erh&auml;ltlich.  Mindestbestellmenge 7&cent; &agrave; 3kg </p>

  </div>
)

export default GnocchiPage;
