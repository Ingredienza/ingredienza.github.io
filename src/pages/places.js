import React from 'react';
import Helmet from 'react-helmet';

const PlacesPage = () => (
	<div>
    <Helmet
      title="Bezugsquellen Privatpersonen | Ingredienza"
      meta={[
        { name: 'description', content: 'Wir sind Ingredienza – bei uns dreht sich alles um vielfältige Pastakreationen und hochwertige Zutaten. Unser Sortiment gibt es nun auch für Privatpersonen an unterschieldlichen Standorten in Bern. ► Entdecken Sie unsere Standorte' },
        { name: 'keywords', content: 'Ingredienza'}
      ]}
    />
		<h1>Bezugsquellen für Privatpersonen</h1>
		<p>
			Nicht nur Gastrobetriebe, sondern auch Private sollen bei uns auf ihre
			Kosten kommen. Deshalb bieten wir unsere feine Pasta und köstlichen Gnocchi an
			unterschiedlichen Standorten in Bern an, wo Sie als Privatkunde einen Teil
			unseres Sortiments direkt beziehen können. 
		</p>
		<p>
      Kommen Sie in unserer <strong>Teigwaren-Manufaktur an der Güterstrasse
      7</strong> vorbei, wo wir von Montag bis Freitag unser Kernsortiment in
      Portionen abgepackt anbieten.
		</p>
		<p>
			Öffnungszeiten: Fabrikladen, Montag bis Freitag 08.00 bis 16.00 Uhr an der
			Güterstrasse 7, 3008 Bern
		</p>
		<p>
			Auch auf dem <strong>Wochenmarkt in Bern</strong> sind wir vertreten. Entdecken Sie eine
			breite Auswahl unserer Pasta und Gnocchi jeweils samstags zwischen 07:30–12:00
			auf dem Bundesplatz vor der Nationalbank. 
		</p>
		<p>
      Unsere Produkte sind zudem auch in der Berner Altstadt im gleichnamigen 
      <strong> „Ingredienza der Laden“</strong> erhältlich. Dort finden Sie neben
      italienischen Delikatessen auch unsere hausgemachte Pasta und Gnocchi aus
      Bern.
		</p>
		<p>
			Öffnungszeiten: Ingredienza der Laden, Dienstag bis Freitag 09.30 bis 19.00
			Uhr und Samstag 08.00 bis 17.00 Uhr an der Kramgasse 80, 3011 Bern.
		</p>
	</div>
)

export default PlacesPage;

