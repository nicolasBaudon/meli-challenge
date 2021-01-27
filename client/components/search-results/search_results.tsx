import React from "react";

import Item from "../item/item";

import styles from "./styles.module.scss";

const SearchResults = ({ items }: { items: any }) => {
  return (
    <div className={styles.container}>
      {items?.map((item, key) => (
        <div
          key={item.id}
          style={
            key < items.length - 1 ? { borderBottom: "1px solid #eeeeee" } : {}
          }
        >
          <Item item={item} />
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
