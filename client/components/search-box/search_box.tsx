import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";

import {
  normalizeString,
  unnormalizeString,
} from "../../utils/services/gral_services";

import styles from "./styles.module.scss";

const SearchBox = () => {
  const [searchedString, setSearchedString] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    if (!!router.query.search) {
      setSearchedString(unnormalizeString(router.query.search.toString()));
    }
  }, [router.query]);

  const search = (e: React.SyntheticEvent) => {
    e.preventDefault();
    !!searchedString &&
      router.push(`/items?search=${normalizeString(searchedString)}`);
  };

  return (
    <div className={styles.search_box_container}>
      <img src="./Logo_ML.png" alt="logo" className={styles.logo} />
      <form className={styles.search_form} onSubmit={search}>
        <input
          placeholder="Nunca dejes de buscar"
          className={styles.search_input}
          onChange={(e) => setSearchedString(e.target.value)}
          value={searchedString}
        />
        <button type="submit" className={styles.submit_form_btn}>
          <img
            src="./ic_Search.png"
            alt="buscar"
            className={styles.search_icon}
          />
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
