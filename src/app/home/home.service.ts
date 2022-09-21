import { Injectable } from '@angular/core';
import { Currency } from '../common/classes/Currency';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  fetchCurrencyExchangeRateByCode(code: string): Currency {


    return new Currency();
  }
}
