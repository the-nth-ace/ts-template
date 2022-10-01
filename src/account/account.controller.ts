import { AccountService } from "./account.service";
import { Controller, Get, Response } from "@decorators/express";
import { Inject } from "@decorators/di";

@Controller("/accounts")
export class AccountController {
  _service: AccountService;

  constructor(@Inject(AccountService) _service: AccountService) {
    this._service = _service;
  }

  @Get("/")
  async getAccounts(@Response() res) {
    res.send(await this._service.getManyAccounts());
  }
}
