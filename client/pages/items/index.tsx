import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";

import BreadCrumb from "../../components/breadcrumb/breadcrumb";
import SearchResults from "../../components/search-results/search_results";
import Loader from "../../components/loader/loader";
import { getItemsResults } from "../../utils/services/item_service";
import { unnormalizeString } from "../../utils/services/gral_services";

import styles from "./styles.module.scss";

const ItemsResults = ({
  categories,
  setCategories,
}: {
  categories: any;
  setCategories: any;
}) => {
  const router = useRouter();
  const [items, setItems] = useState<any | null>(null);

  useEffect(() => {
    setItems(null);
    if (!!router.query.search) {
      getItemsResults(unnormalizeString(router.query.search.toString())).then(
        (result) => {
          setItems(result);
          setCategories(result.categories);
        }
      );
    }
  }, [router.query]);

  return items ? (
    <div className={styles.container}>
      <div className={styles.sub_container}>
        <BreadCrumb categories={categories} />
      </div>
      <div className={styles.sub_container}>
        <SearchResults items={items.items} />
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default ItemsResults;
