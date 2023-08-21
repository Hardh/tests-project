import { Injectable } from '@angular/core';
import {HttpService} from "../../http.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly BASE_PATCH = 'product';

  constructor(
    private httpService: HttpService,
  ) { }
}
