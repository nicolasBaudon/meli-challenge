import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";

import BreadCrumb from "../../components/breadcrumb/breadcrumb";
import SearchResults from "../../components/search-results/search_results";
import Loader from "../../components/loader/loader";
import Error from "../../components/error-message/error_message";
import { getItemsResults } from "../../utils/services/item_service";
import { unnormalizeString } from "../../utils/services/gral_services";
import { IItem } from "../../utils/interfaces";

import styles from "./styles.module.scss";

const ItemsResults = ({
  categories,
  setCategories,
}: {
  categories: string[];
  setCategories: any;
}) => {
  const router = useRouter();
  const [items, setItems] = useState<IItem[] | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setItems(null);
    if (!!router.query.search) {
      getItemsResults(unnormalizeString(router.query.search.toString())).then(
        (result) => {
          if (result.success) {
            setItems(result.data.items);
            setCategories(result.data.categories);
          } else {
            setError(true);
          }
        }
      );
    }
  }, [router.query]);

  return !!items ? (
    <div className={styles.container}>
      <div className={styles.sub_container}>
        <BreadCrumb categories={categories} />
      </div>
      <div className={styles.sub_container}>
        <SearchResults items={items} />
      </div>
    </div>
  ) : !error ? (
    <Loader />
  ) : (
    <div className={styles.container}>
      <div className={styles.sub_container}>
        <Error />
      </div>
    </div>
  );
};

export default ItemsResults;
