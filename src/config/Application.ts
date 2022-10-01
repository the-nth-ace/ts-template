import * as dotenv from "dotenv";
import { dataSource } from "./Database";
import { ExpressConfig } from "./Express";

import "@account/account.controller";

dotenv.config();
export class Application {
  server: any;
  express: ExpressConfig;

  constructor() {
    this.express = new ExpressConfig();
    const port = process.env.PORT;
    this.server = this.express.app.listen(port, () => {
      console.log(`Server started. Express: http://localhost:${port}`);
    });

    dataSource
      .initialize()
      .then(() => {
        console.log(`Data Source has been initialized`);
      })
      .catch((err) => {
        console.error("Error during initialization", err);
      });
  }
}
