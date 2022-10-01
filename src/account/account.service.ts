import { Injectable, Inject } from "@decorators/di";
import { Account } from "./account.entity";
import { AccountsRepository } from "./account.repository";

@Injectable()
export class AccountService {
  _accountRepo: AccountsRepository;
  constructor(@Inject(AccountsRepository) _accountRepo: AccountsRepository) {
    this._accountRepo = _accountRepo;
  }

  async getManyAccounts(): Promise<Iterable<Account>> {
    return await this._accountRepo.getAll();
  }
}
