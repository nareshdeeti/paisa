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

const data: any = {
    "data": {
        "AED": {
            "code": "AED",
            "value": 3.67306
        },
        "AFN": {
            "code": "AFN",
            "value": 91.80254
        }
    }};

// console.log(data)
// console.log(data.data.AED);

const datas: DataInterface = data.data;

for (let key in datas) {
    let value: CurrentCurrencyRate = datas[key];
    // console.log(value);
    console.log('code: ' + value.code )
}