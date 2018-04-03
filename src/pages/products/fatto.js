import React from 'react';
import Helmet from 'react-helmet';

const FattoPage = () => (
  <div>
    <Helmet
      title="Gourmet Ravioli von Ingredienza | Ingredienza"
      meta={[
        { name: 'description', content: 'Wir von Ingredienza kümmern uns um Ihre Pasta-Wünsche. Gerne präsentieren wir Ihnen unser exklusivstes Angebot – unsere gourmet Pasta. Diese Pasta wird mit viel Sorgfalt und Liebe in Bern von Hand hergestellt. Für jeden, der das Besondere liebt genau das Richtige. ► Zur einmaligen Gourmet Pasta von Ingredienza' },
      ]}
    />
 
    <h1>Fatto a Mano – von Hand gemacht</h1>
    <p>
      Die Linie „Fatto a mano“ hält, was ihr Name verspricht – die Pasta wird mit
      viel Sorgfalt von Hand hergestellt. „Fatto a mano“ gehört zum Exklusivsten,
      was es im Pastasektor zu entdecken gibt. 
    </p>
  </div>
)

export default FattoPage;
