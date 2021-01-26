import React, { useState, useEffect } from "react";

// Dependencies
import { Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";

// Import utils
import {
  normalizeString,
  unnormalizeString,
} from "../../utils/services/services";

// Styles
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
    <Row lg={12} md={12} sm={12} xs={12} style={{ margin: 0 }}>
      <Col lg={12} md={12} sm={12} xs={12} className={styles.container}>
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
      </Col>
    </Row>
  );
};

export default SearchBox;
