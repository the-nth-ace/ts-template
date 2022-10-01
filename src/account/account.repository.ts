import { Repository } from "typeorm";
import { Injectable } from "@decorators/di";
import { Account } from "./account.entity";

import { dataSource } from "@config/Database";

@Injectable()
export class AccountsRepository {
  private _repo: Repository<Account>;

  constructor() {
    this._repo = dataSource.getRepository(Account);
  }

  async getAll() {
    return [];
  }

  // async getAllAccounts() {
}
