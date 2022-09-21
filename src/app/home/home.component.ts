import { Component, OnInit } from '@angular/core';
import { Currency } from '../common/classes/Currency';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currencies: Currency[] = [];

  constructor() { }

  ngOnInit(): void {}

  getCurrencyExchange(): void {
      
      let currencyAed = new Currency();
      currencyAed.symbol = "AED";
      currencyAed.name = "Afghan Afghani";
      currencyAed.symbol_native = "؋"
      currencyAed.decimal_digits = 0;
      currencyAed.rounding = 0;
      currencyAed.code = "AFN";
      currencyAed.name_plural = "Afghan Afghanis";

      let currencyAf = new Currency();
      currencyAf.symbol = "Af";
      currencyAf.name = "United Arab Emirates Dirham";
      currencyAf.symbol_native = "د.إ"
      currencyAf.decimal_digits = 2;
      currencyAf.rounding = 0;
      currencyAf.code = "AED";
      currencyAf.name_plural = "UAE dirhams";

      this.currencies= [currencyAed, currencyAf];
  
  }
}
