import app from "./app";
import config from "./config";
import { initBD } from "./db";

const main = () => {

  initBD();

  app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`);
  });
};

main();
