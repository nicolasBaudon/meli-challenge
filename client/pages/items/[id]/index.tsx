import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";

import Loader from "../../../components/loader/loader";
import BreadCrumb from "../../../components/breadcrumb/breadcrumb";
import Detail from "../../../components/detail/detail";
import Error from "../../../components/error-message/error_message";
import { getItemDetail } from "../../../utils/services/item_service";

import styles from "./styles.module.scss";

const ItemDetail = ({ categories }: { categories: any }) => {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState<any | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (!!id) {
      getItemDetail(id).then((result) => {
        if (result.success) {
          setItem(result.data);
        } else {
          setError(true);
        }
      });
    }
  }, [id]);

  return !!item ? (
    <div className={styles.container}>
      <div className={styles.sub_container}>
        <BreadCrumb categories={categories} />
      </div>
      <div className={styles.sub_container}>
        <Detail item={item.item} />
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

export default ItemDetail;
