import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet';
import pricelist_ge from '../pdfs/preisliste_de.pdf';
import pricelist_fr from '../pdfs/preisliste_fr.pdf';


const PriceListPage = () => (
  <div>
    <Helmet
      title="Pasta-Preisliste | Ingredienza"
      meta={[
        { name: 'description', content: 'Ingredienza – das ist feinste Pasta aus Bern. Frisch, bunt und in jeder Jahreszeit genau das Richtige. Wir l(i)eben Pasta. Unser Sortiment ist vielfältig und bunt. Bei uns gibt es beinahe alles – und dies zum angemessenen Preis. ► Sehen Sie ich unsere Pasta-Preisliste an' },
        { name: 'keywords', content: 'Pasta-Preisliste' }

      ]}
    />
    <h1>Unsere Preislisten für Pasta</h1>
    <p>Unsere Preisliste können Sie als .pdf Datei herunterladen:</p>
    <a style={{color: '#000'}} href={pricelist_ge}>Download Preisliste De</a> <br />
    <a style={{color: '#000'}} href={pricelist_fr}>Download offre tarifaire Fr</a>
  </div>
)

export default PriceListPage 
