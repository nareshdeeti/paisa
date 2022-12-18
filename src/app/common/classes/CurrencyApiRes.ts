export class CurrencyApiLatestRes {
    meta: any = {};
    data: any = {};
}


export interface DataInterface {
    [key: string]: CurrentCurrencyRate;
}

export interface CurrentCurrencyRate {
    code: string;
    value: number;
}