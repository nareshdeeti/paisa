import { Component, OnInit } from '@angular/core';
import { Currency } from '../common/classes/Currency';
import { DataInterface, CurrentCurrencyRate } from '../common/classes/CurrencyApiRes';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currencies: Currency[] = [];
  currenCurrencyData: DataInterface = {};
  currentCurrentCurrencyRates: CurrentCurrencyRate[] = [];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    // this.homeService.fetchCurrencyExchangeRateByCode('INR');
  }

  /* getCurrencyExchange(): void {
      
      let currencyAed = new Currency();
      currencyAed.symbol = "AED";
      currencyAed.name = "Afghan Afghani";
      currencyAed.symbol_native = "؋"
      currencyAed.decimal_digits = 0;
      currencyAed.rounding = 0;
      currencyAed.code = "AFN";
      currencyAed.name_plural = "Afghan Afghanis";
      currencyAed.currency = 231;

      let currencyAf = new Currency();
      currencyAf.symbol = "Af";
      currencyAf.name = "United Arab Emirates Dirham";
      currencyAf.symbol_native = "د.إ"
      currencyAf.decimal_digits = 2;
      currencyAf.rounding = 0;
      currencyAf.code = "AED";
      currencyAf.name_plural = "UAE dirhams";
      currencyAf.currency = 131;

      this.currencies= [currencyAed, currencyAf];
  
  } */

  getCurrencyExchange(): void {
    this.currenCurrencyData = this.homeService.fetchCurrencyExchangeRateByCode('INR');

    for(let key in this.currenCurrencyData) {
      this.currentCurrentCurrencyRates.push(this.currenCurrencyData[key]);
    }

    console.log(this.currentCurrentCurrencyRates);
  }
}
