import { Express } from "express";
import config from "../config";

/**
 * port
 */
export default (app: Express) => {
  app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  })
}