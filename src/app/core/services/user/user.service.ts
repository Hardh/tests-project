import { Injectable } from '@angular/core';
import {HttpService} from "../../http.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly BASE_PATCH = 'user';

  constructor(
    private httpService: HttpService,
  ) { }
}
