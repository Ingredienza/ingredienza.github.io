import React from 'react';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';

const SpecialPage = ({ data }) => (
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
      title="Pasta-Spezialitäten von Ingredienza | Ingredienza"
      meta={[
        { name: 'description', content: 'Ein besonderes Highlight von Ingredienza sind unsere Spezialfüllungen. Unsere Pasta-Füllungen sind so abwechslungsreich wie die Geschmäcker Ihrer Kundschaft vielfältig sind. Unsere Spezialitäten lassen mit Sicherheit keine Pasta-Wünsche offen. ► Sehen Sie sich unser Angebot an Spezialfüllungen an' },
        { name: 'keywords', content: 'Spezialitäten' }
      ]}
    />
 
    <h1>Entdecken Sie unsere Spezialitäten – Teigwaren mit Spezialfüllung</h1>
    <p>
      Bei uns gibt es Teigwaren ganz nach Ihren individuellen Wünschen. Sie
      bestimmen den Teig als auch die Form Ihrer Pasta. Je nach Rezeptur liegt der
      Mindestbezug bei unseren Spezialitäten bei 30–40 kg. 
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
				<td>40034</td>
				<td>Apfel-Thymian mit Honig u. Ricotta</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 23.50</td>
			</tr>
			<tr>
				<td>B50003</td>
				<td>Broccoli-Quark</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 20.50</td>
			</tr>
			<tr>
				<td>40025</td>
				<td>Chorizobr&auml;t-Rahm</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 27.--</td>
			</tr>	
			<tr>
				<td>40027</td>
				<td>Feigen-Mascarpone (Dessertravioli)</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 25.--</td>
			</tr>
			<tr>
				<td>40020</td>
				<td>Geissk&auml;se mit Rosinen und Peperoncino</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 22.50</td>
			</tr>
			<tr>
				<td>40009</td>
				<td>Gorgonzola</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 24.50</td>
			</tr>
			<tr>
				<td>40009B</td>
				<td>Gorgonzola-Baumnuss</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 25.--</td>
			</tr>
			<tr>
				<td>40021</td>
				<td>Kalbsbr&auml;t-Mangold (Sommer)</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 21.50</td>
			</tr>
			<tr>
				<td>50016</td>
				<td>Kerbel-Ricotta-Knoblauch (Sommer)</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 20.50</td>
			</tr>
			<tr>
				<td>50005</td>
				<td>K&uuml;rbis-Amaretti-Senffr&uuml;chte (Herbst)</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 23.50</td>
			</tr>
			<tr>
				<td>40039</td>
				<td>Lachs mit Fenchel</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 23.50</td>
			</tr>
			<tr>
				<td>40028</td>
				<td>Lauch mit Gem&uuml;sebrunoise</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 22.50</td>
			</tr>
			<tr>
				<td>MARRON</td>
				<td>Marron glacè-Orange (Herbst)</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 22.50</td>
			</tr>
			<tr>
				<td>50013</td>
				<td>Mousseline de saumon<br />Lachs, Rahm, Gem&uuml;sebrunoise und Gew&uuml;rze</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 25.50</td>
			</tr>
			<tr>
				<td>40035</td>
				<td>Randen-Apfel</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 19.50</td>
			</tr>			
			<tr>
				<td>40032</td>
				<td>Rosenkohl-Rohschinken (Winter)</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 23.50</td>
			</tr>
			<tr>
				<td>40036</td>
				<td>R&uuml;ebli-Rhabarber</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 19.50</td>
			</tr>
			<tr>
				<td>20003</td>
				<td>Schinken-Ricotta-Schnittlauch</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 28.50</td>
			</tr>			
			<tr>
				<td>40037</td>
				<td>Sellerie</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 19.50</td>
			</tr>
			<tr>
				<td>30002</td>
				<td>Shii Take-Soja-Haselnuss</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 27.--</td>
			</tr>
			<tr>
				<td>40024</td>
				<td>Steinpilz-Spinat-Ricotta</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 24.50</td>
			</tr>
			<tr>
				<td>40017</td>
				<td>Trevisano (Sommer)</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 29.50</td>
			</tr>
			<tr>
				<td>40038</td>
				<td>Vermicelles Dessertravioli</td>
				<td>&cent; &agrave; 2kg TK</td>
				<td>Fr. 25.--</td>
			</tr>
		</table>
  </div>
)

export const query = graphql`
  query SpecialImageQuery {
    backgroundImage: imageSharp(id: { regex: "/spez2/" }) {
      sizes(maxWidth: 1000 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
export default SpecialPage;
