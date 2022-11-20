import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Currency } from '../common/classes/Currency';
import { DataInterface } from '../common/classes/CurrencyApiRes'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  fetchCurrencyExchangeRateByCode(code: string): DataInterface {

    const currencyApiUrl = 'https://api.currencyapi.com/v3/latest';
    const currencyApiSecret = 'M0K4KaOXqP25x9SlX6EXs7dqVZINGQJi4teqy055';
    const currencies: string[] = ['USD', 'JPY', 'KRW', 'OMR', 'GBP', 'EUR']

    let currentCurrency: DataInterface = {};

    this.httpClient.get<any>(currencyApiUrl + '?apikey=' + currencyApiSecret +
      '&base_currency=' + code +
      '&currencies=' + currencies).subscribe(response => {
        currentCurrency = response.data;
        console.log(currentCurrency);
      });

    return currentCurrency;
  }
}
