import React from 'react';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';

const SeasonPage = ({ data }) => (
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
      title="Pasta aus Saisongemüse | Ingredienza"
      meta={[
        { name: 'description', content: 'Ingredienza steht für frische Zutaten aus der Region. Deshalb setzen wir auf Saisonprodukte. Wir kreieren für unsere Kunden saisongerechte Pasta aus Saisongemüse. Frischer geht\'s nicht. ► Entdecken Sie unsere Saison-Empfehlungen' },
        { name: 'keywords', content: 'Pasta, Saisongemüse' }
      ]}
    />
 
    <h1>Saisonprodukte – Pasta aus Saisongemüse</h1>
    <p>
      Bei Ingredienza setzen wir uns für regionale Produkte ein. Deshalb bieten wir
      unseren Kunden saisonale Pasta. Je nach Jahreszeit kreieren wir aus frischen
      Saison-Zutaten feinste Pasta und Gnocchi. 
    </p>
		<h3>Fr&uuml;hling (Februar - Mai)</h3>
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
				<td>40013</td>
				<td>B&auml;rlauch-Quadrolini mit Cashew-N&uuml;ssen im Eierteig</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 20.50</td>
			</tr>
			<tr>
				<td>40019</td>
				<td>Morchel-Triangoli im Eierteig</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Saisonpreis</td>
			</tr>
			<tr>
				<td>50017</td>
				<td>Gr&uuml;ne Spargel-Rondellen im Eierteig</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 20.50</td>
			</tr>
			<tr>
				<td>50007</td>
				<td>Gr&uuml;ne Spargel-Rondellen im Orangenteig</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 21.50</td>
			</tr>
			<tr>
				<td>60024</td>
				<td>B&auml;rlauch-Nudeln</td>
				<td>&cent; &agrave; 3kg TK</td>
				<td>Fr. 11.-</td>
			</tr>
			<tr>
				<td>60037</td>
				<td>B&auml;rlauch-Gnocchi</td>
				<td>&cent; &agrave; 3kg TK</td>
				<td>Fr. 11.-</td>
			</tr>
		</table>

		<h3>Sommer (Juni - August)</h3>

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
				<td>20004</td>
				<td>Ricotta-Minze-Quadrolini gr&uuml;n-weiss gestreift<br />(erh&auml;ltlich sobald es frische Minze gibt)</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 23.50</td>
			</tr>
			<tr>
				<td>50020</td>
				<td>Eierschw&auml;mmli-Rondellen <br /> (bis Ende Oktober erh&auml;ltlich)</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 24.50</td>
			</tr>
			<tr>
				<td>ITA002</td>
				<td>Zucchetti mit ger&ouml;steten Pinien und Minze Quadrolini im Eierteig</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 22.50</td>
			</tr>
			<tr>
				<td>40040</td>
				<td>Oliva Nera mit Feta, Petersilie und Knoblauch <br />Mezzelune grande im Dinkelteig</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 22.50</td>
			</tr>
		</table>

		<h3>Herbst & Winter (September - Januar)</h3>

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
				<td>BITA009</td>
				<td>Bio Ricotta-Orangen-Rondellen (ab Dezember)</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 22.50</td>
			</tr>
			<tr>
				<td>40007</td>
				<td>K&uuml;rbis-Rondellen im Dinkelteig</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 18.50</td>
			</tr>
			<tr>
				<td>40010</td>
				<td>Weisse Tr&uuml;ffel-Rondellen im Eierteig</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 34.50</td>
			</tr>	
			<tr>
				<td>40020</td>
				<td>Ziegenfrischk&auml;se mit Quitten Rechtecke im Eierteig</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 24.50</td>
			</tr>	
      <tr>
				<td>40041</td>
        <td>
          Hirsch-Butterpilz-Apfel-Quadrolini im Eierteig <br />
          (September bis November)
        </td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 19.50</td>
			</tr>
			<tr>
				<td>40046</td>
        <td>
          Wildschwein mit Holunder und schwarzer Schokolade 
          Rechtecke im Eierteig
        </td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 24.50</td>
			</tr>	
      <tr>
				<td>B60007</td>
				<td>Bio-Orangen-Nudeln</td>
				<td>&cent; &agrave; 3kg TK</td>
				<td>Fr. 14.50</td>
			</tr>
			<tr>
				<td>60016</td>
				<td>Honig Thymian-Nudeln</td>
				<td>&cent; &agrave; 3kg TK</td>
				<td>Fr. 12.50</td>
			</tr>			
			<tr>
				<td>60025</td>
				<td>Piemonteser Haselnuss-Nudeln<br /> mit ger&ouml;steten Haselnssen</td>
				<td>&cent; &agrave; 3kg TK</td>
				<td>Fr. 12.-</td>
			</tr>
			<tr>
				<td>60028</td>
				<td>Steinpilz-Nudeln</td>
				<td>&cent; &agrave; 3kg TK</td>
				<td>Fr. 12.50</td>
			</tr>			
			<tr>
				<td>60035S</td>
				<td>Steinpilz-Gnocchi</td>
				<td>&cent; &agrave; 3kg TK</td>
				<td>Fr. 11.-</td>
			</tr>	
			<tr>
				<td>60035RK</td>
				<td>
          Gnocchi-Roulade mit K&uuml;rbis-Curry-F&uuml;llung <br />
          Super-Vegi-Variante Stk. ca. 350gr
        </td>
				<td>&cent; &agrave; 5-6kg TK</td>
				<td>Fr. 23.50</td>
			</tr>	
		</table>
  
    <h2>Spezialit&auml;ten</h2>
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
				<td>BITA001</td>
				<td>Bio Rotolo alla fiorentina (Ricotta-Spinat-Teigrolle) lose schockgefroren</td>
				<td>&cent; &agrave; 10 X 500gr TK</td>
				<td>Fr. 23.50</td>
			</tr>
			<tr>
				<td>BITA011</td>
				<td>
          Bio Rotolo alla fiorentina einzeln vakuumiert<br />
          Eignet sich f&uuml;r den Detail-Verkauf <br />
          Aufgetaut 2 Wochen gek&uuml;hlt haltbar
        </td>
				<td>&cent; &agrave; 10 X 500gr TK</td>
				<td>Fr. 25.50</td>
			</tr>
      <tr>
				<td>60035RK</td>
				<td>
          Gnocchi-Roulade mit Ricotta-Spinat-F&uuml;llung <br />
          Stk. ca. 350gr Langsam in Butter gebraten – ein Gedicht 
        </td>
				<td>&cent; &agrave; 5-6kg TK</td>
				<td>Fr. 23.50</td>
			</tr>
    </table>
  </div>
)

export const query = graphql`
  query SeasonImageQuery {
    backgroundImage: imageSharp(id: { regex: "/saison5/" }) {
      sizes(maxWidth: 1000 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
export default SeasonPage;
