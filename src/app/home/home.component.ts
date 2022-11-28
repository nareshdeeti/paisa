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

  ngOnInit(): void { }

  getCurrencyExchange(): void {
    this.currentCurrentCurrencyRates = this.homeService.fetchCurrencyExchangeRateByCode('INR');
  }
}
