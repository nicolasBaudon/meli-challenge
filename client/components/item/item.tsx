import Link from "next/link";

import { formatItemPrice } from "../../utils/services/gral_services";

import styles from "./styles.module.scss";

const Item = ({ item }: { item: any }) => {
  return (
    <Link href="/items/[id]" as={`/items/${item.id}`}>
      <div className={styles.container}>
        <div
          className={styles.picture_container}
          style={{ backgroundImage: `url(${item.picture})` }}
        ></div>
        <div className={styles.content_container}>
          <div className={styles.info_container}>
            <div className={styles.pay_info_container}>
              <h1 className={styles.item_price}>
                $ {formatItemPrice(item.price.amount)}
              </h1>
              {item.free_shipping && (
                <img
                  src="./ic_shipping.png"
                  alt=""
                  className={styles.free_shipping}
                />
              )}
            </div>
            <div>
              <h2 className={styles.item_title}>{item.title}</h2>
            </div>
          </div>
          <div className={styles.location_container}>
            <span className={styles.item_location}>{item.location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
