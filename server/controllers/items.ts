import { Request, Response } from "express";

import { getItems, getItem } from "../services/items";
import {
  prepareItemsResults,
  prepareItemDetail,
} from "../shared/transformers/transformer";
import { validId } from "../shared/helpers/helpers";

export const getItemsResult = async (req: Request, res: Response) => {
  const query = req.query.q;
  try {
    const data = await getItems(query.toString());
    const results = prepareItemsResults(data);
    return res.status(200).json(results);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const getItemDetail = async (req: Request, res: Response) => {
  const itemId = req.params.id;
  if (!!validId(itemId)) {
    try {
      const data = await getItem(itemId);
      const results = prepareItemDetail(data);
      return res.status(200).json(results);
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(400).json("Id de item invalido");
  }
};
