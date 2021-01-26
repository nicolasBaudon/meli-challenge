import React, { useState, useEffect } from "react";

import { Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";

import BreadCrumb from "../../components/breadcrumb/breadcrumb";
import SearchResults from "../../components/search-results/search_results";
import Loader from "../../components/loader/loader";
import { getItemsResults } from "../../utils/services/item_service";
import { unnormalizeString } from "../../utils/services/gral_services";

const ItemsResults = () => {
  const router = useRouter();
  const [items, setItems] = useState(null);

  useEffect(() => {
    setItems(null);
    if (!!router.query.search) {
      getItemsResults(
        unnormalizeString(router.query.search.toString())
      ).then((result) => setItems(result));
    }
  }, [router.query]);

  return items ? (
    <Row lg={12} md={12} sm={12} xs={12} style={{ margin: 0 }}>
      <Col lg={8} md={9} sm={10} xs={12} style={{ margin: "16px auto" }}>
        <BreadCrumb categories={items.categories} />
      </Col>
      <Col lg={8} md={9} sm={10} xs={12} style={{ margin: "auto" }}>
        <SearchResults items={items.items} />
      </Col>
    </Row>
  ) : (
    <Loader />
  );
};

export default ItemsResults;
