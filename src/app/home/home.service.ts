import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CurrentCurrencyRate, DataInterface } from '../common/classes/CurrencyApiRes'
import { GlobalProperties } from '../common/classes/GlobalProperties';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  fetchCurrencyExchangeRateByCode(code: string): CurrentCurrencyRate[] {

    let currentCurrency: DataInterface;
    let currentCurrentCurrencyRates: CurrentCurrencyRate[] = [];
    let currentCurrentCurrencyRate: CurrentCurrencyRate;

    this.httpClient.get<any>(GlobalProperties.currencyApiUrl + '?apikey=' + GlobalProperties.currencyApiSecret +
      '&base_currency=' + code.toUpperCase() +
      '&currencies=' + GlobalProperties.currencies).subscribe(response => {
        currentCurrency = response.data;

        for (let key in currentCurrency) {
          currentCurrentCurrencyRate = currentCurrency[key];
          currentCurrentCurrencyRates.push(currentCurrentCurrencyRate);
        }
      });

    return currentCurrentCurrencyRates;
  }
}
