import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CurrentCurrencyRate, DataInterface } from '../common/classes/CurrencyApiRes'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  fetchCurrencyExchangeRateByCode(code: string): CurrentCurrencyRate[] {

    const currencyApiUrl = 'https://api.currencyapi.com/v3/latest';
    const currencyApiSecret = '';
    const currencies: string[] = ['USD', 'JPY', 'KRW', 'OMR', 'GBP', 'EUR']

    let currentCurrency: DataInterface;
    let currentCurrentCurrencyRates: CurrentCurrencyRate[] = [];
    let currentCurrentCurrencyRate: CurrentCurrencyRate;

    this.httpClient.get<any>(currencyApiUrl + '?apikey=' + currencyApiSecret +
      '&base_currency=' + code +
      '&currencies=' + currencies).subscribe(response => {
        currentCurrency = response.data;

        for (let key in currentCurrency) {
          currentCurrentCurrencyRate = currentCurrency[key];
          currentCurrentCurrencyRates.push(currentCurrentCurrencyRate);
        }
      });

    return currentCurrentCurrencyRates;
  }
}
