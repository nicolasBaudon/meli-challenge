import { Request, Response, NextFunction } from "express";

// Manejador del error para un endpoint que no existe
const badEndpoint = (_request: Request, response: Response) => {
  response.status(404).send({ error: "No endpoint" });
};

// Manejador de cualquier otro tipo de error
const errorHandler = (
  error: any,
  _request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  } else if (error.name === "Error") {
    return response.status(404).json({ error: error.message });
  }
  next(error);
};

export { errorHandler, badEndpoint };
