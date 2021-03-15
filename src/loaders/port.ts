import config from "../config";

export default (app) => {
  app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  })
}