import { Express } from "express";
import config from "../config";

export default (app: Express) => {
  app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  })
}