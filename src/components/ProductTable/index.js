import React from 'react';
import styles from '../../styles/table.module.css';

const ProductRow = ({ product: { articleNr, description, unit, price } }) => (
  <tr>
    <td>{articleNr}</td>
    <td>{description}</td>
    { unit ? ( 
        <td>{String.fromCharCode(162) + ' ' + String.fromCharCode(224) + ' ' + unit}</td>
      ) : <td></td>
    }
    { // Check if string starts with a number  
      !isNaN(parseInt(price)) ? ( 
        <td>Fr. {price}</td>
      ) : <td>{price}</td>
    }
  </tr>
)

const ProductTable = ({ showHeader, products }) => (
  <div className={styles.tableResponsive} >
    <table className={styles.productTable} >
      <tbody>
        { showHeader? (
            <tr>
              <th>Art.Nr</th>
              <th>Produkt</th>
              <th>Einheit</th>
              <th>Fr. / kg</th>
            </tr>
          ) : null
        }

        {
          products.map(product => (
            <ProductRow product={product} />
          ))
        } 
      </tbody>
    </table>
  </div>
)

export default ProductTable;
