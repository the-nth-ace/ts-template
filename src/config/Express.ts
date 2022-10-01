import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import { attachControllers, Controller } from "@decorators/express";
import { AccountController } from "@account/account.controller";

export class ExpressConfig {
  app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.setUpControllers();
  }

  setUpControllers() {
    attachControllers(this.app, [AccountController]);
  }
}
