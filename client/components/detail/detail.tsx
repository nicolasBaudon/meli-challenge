import { formatItemPrice } from "../../utils/services/gral_services";
import { IItem } from "../../utils/interfaces";

import styles from "./styles.module.scss";

const ItemDetail = ({ item }: { item: IItem }) => {
  return (
    <div className={styles.container}>
      <div className={styles.prod_container}>
        <img src={item.picture} alt="Foto" className={styles.item_picture} />
        <div>
          <div className={styles.item_info}>
            {item.condition === "new" ? "Nuevo" : "Usado"} -{" "}
            {item.sold_quantity} vendidos
          </div>
          <h1 className={styles.item_title}>{item.title}</h1>
          {item.price.amount !== null && (
            <h2 className={styles.item_price}>
              $ {formatItemPrice(item.price.amount)}
              <span className={styles.price_decimals}>
                {String(item.price.decimals).padEnd(2, "0")}
              </span>
            </h2>
          )}
          <button className={styles.buy_btn}>Comprar</button>
        </div>
      </div>
      <div className={styles.description_container}>
        <h2 className={styles.description_title}>Descripción del producto</h2>
        <p className={styles.item_description}>{item.description}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
