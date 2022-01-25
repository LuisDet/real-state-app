import styles from '../../styles/TableRelation.module.css'

export const TableRelation = () => {
  return (
    <section>
      <div className={styles['container']}>
        <div className={styles['small-info-container']}>
          <div className={styles['small-info-item']}>
            <p>Propiedades actules</p> <p>56</p>
          </div>
          <div className={styles['small-info-item']}>
            <p>Propiedades vendidas</p> <p>12</p>
          </div>
        </div>
        <div>
          <h2>Listado de propiades</h2>
          <table className={styles['table']}>
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Precio</th>
                <th>Fase</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td>450,000.00$</td>
                <td>2</td>
              </tr>
              <tr>
                <td>01</td>
                <td>450,000.00$</td>
                <td>2</td>
              </tr>
              <tr>
                <td>01</td>
                <td>450,000.00$</td>
                <td>2</td>
              </tr>
              <tr>
                <td>01</td>
                <td>450,000.00$</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
