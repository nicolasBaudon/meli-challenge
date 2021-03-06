import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";

import Loader from "../../../components/loader/loader";
import BreadCrumb from "../../../components/breadcrumb/breadcrumb";
import Detail from "../../../components/detail/detail";
import Error from "../../../components/error-message/error_message";
import { getItemDetail } from "../../../utils/services/item_service";
import { IItem } from "../../../utils/interfaces";

import styles from "./styles.module.scss";

const ItemDetail = ({ categories }: { categories: string[] }) => {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState<IItem | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (!!id) {
      getItemDetail(id).then((result) => {
        if (result.success) {
          setItem(result.data.item);
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
        <Detail item={item} />
      </div>
    </div>
  ) : !error ? (
    <Loader />
  ) : (
    <div className={styles.container}>
      <div className={styles.sub_container}>
        <Error text="Hubo un error. ¡Intentá nuevamente!" />
      </div>
    </div>
  );
};

export default ItemDetail;
