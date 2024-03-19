export type StockDetails = {
    name: string,
    ticker: string,
    exchange: string,
    marketCapitalization: number,
    shareOutstanding: number,
    ipo: string, phone: string,
    weburl: string,
    logo: string,
    country: string,
    currency: string,
    estimateCurrency: string,
    finnhubIndustry: string
} | any;
export let sampleStockDetails: StockDetails = {
  "country": "US",
  "currency": "USD",
  "estimateCurrency": "USD",
  "exchange": "NASDAQ NMS - GLOBAL MARKET",
  "finnhubIndustry": "Technology",
  "ipo": "1980-12-12",
  "logo": "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/AAPL.svg",
  "marketCapitalization": 2665577.4739454375,
  "name": "Apple Inc",
  "phone": "14089961010",
  "shareOutstanding": 15441.88,
  "ticker": "AAPL",
  "weburl": "https://www.apple.com/"
}



export type StockQuote = {
    c: number,
    d: number,
    dp: number,
    h: number,
    l: number,
    o: number,
    pc: number,
    t: number
} | any;
export let SampleStockQuote: StockQuote = {
  "c": 172.62,
  "d": -0.38,
  "dp": -0.2197,
  "h": 172.62,
  "l": 170.29,
  "o": 171,
  "pc": 173,
  "t": 1710532802
}



export type Recommendation = {
    buy: number,
    hold: number,
    period: string,
    sell: number,
    strongBuy: number,
    strongSell: number,
    symbol: string
} | any;
export let sampleRecommendation: Array<Recommendation> = [
  {
    "buy": 20,
    "hold": 14,
    "period": "2024-03-01",
    "sell": 2,
    "strongBuy": 12,
    "strongSell": 0,
    "symbol": "AAPL"
  },
  {
    "buy": 19,
    "hold": 13,
    "period": "2024-02-01",
    "sell": 2,
    "strongBuy": 12,
    "strongSell": 0,
    "symbol": "AAPL"
  },
  {
    "buy": 22,
    "hold": 13,
    "period": "2024-01-01",
    "sell": 1,
    "strongBuy": 12,
    "strongSell": 0,
    "symbol": "AAPL"
  },
  {
    "buy": 24,
    "hold": 13,
    "period": "2023-12-01",
    "sell": 1,
    "strongBuy": 12,
    "strongSell": 0,
    "symbol": "AAPL"
  }
]



export type ChartData = {
    c: number,
    h: number,
    l: number,
    o: number,
    t: number,
    v: number,
    vw: number,
    n: number
} | any;
export type ChartResponse = {
    ticker: string,
    queryCount: number,
    resultsCount: number,
    adjusted: boolean,
    status: string,
    request_id: string,
    count: number
    results: Array<ChartData>
} | any;
export let sampleHourlyChart: ChartResponse ={
  "ticker": "AAPL",
  "queryCount": 744,
  "resultsCount": 16,
  "adjusted": true,
  "results": [
    {
      "v": 18752,
      "vw": 173.4271,
      "o": 173.41,
      "c": 173.49,
      "h": 173.64,
      "l": 173.21,
      "t": 1710489600000,
      "n": 702
    },
    {
      "v": 36227,
      "vw": 173.9169,
      "o": 173.49,
      "c": 174.18,
      "h": 174.21,
      "l": 173.49,
      "t": 1710493200000,
      "n": 769
    },
    {
      "v": 16566,
      "vw": 174.0514,
      "o": 174.15,
      "c": 173.85,
      "h": 174.25,
      "l": 173.85,
      "t": 1710496800000,
      "n": 528
    },
    {
      "v": 61910,
      "vw": 173.7013,
      "o": 173.82,
      "c": 173.4,
      "h": 173.92,
      "l": 173.4,
      "t": 1710500400000,
      "n": 1552
    },
    {
      "v": 160428,
      "vw": 173.6201,
      "o": 173.86,
      "c": 173.68,
      "h": 173.94,
      "l": 173.37,
      "t": 1710504000000,
      "n": 5025
    },
    {
      "v": 22726435,
      "vw": 171.2344,
      "o": 173.65,
      "c": 171.45,
      "h": 173.66,
      "l": 170.05,
      "t": 1710507600000,
      "n": 117204
    },
    {
      "v": 10114287,
      "vw": 170.8659,
      "o": 171.44,
      "c": 170.7,
      "h": 171.605,
      "l": 170.285,
      "t": 1710511200000,
      "n": 188753
    },
    {
      "v": 6871842,
      "vw": 170.9184,
      "o": 170.7,
      "c": 170.985,
      "h": 171.17,
      "l": 170.6111,
      "t": 1710514800000,
      "n": 138893
    },
    {
      "v": 7774199,
      "vw": 171.0942,
      "o": 170.98,
      "c": 170.7073,
      "h": 171.515,
      "l": 170.66,
      "t": 1710518400000,
      "n": 67312
    },
    {
      "v": 5526140,
      "vw": 170.7323,
      "o": 170.705,
      "c": 171.1274,
      "h": 171.14,
      "l": 170.52,
      "t": 1710522000000,
      "n": 60163
    },
    {
      "v": 6583075,
      "vw": 171.2068,
      "o": 171.125,
      "c": 171.52,
      "h": 171.52,
      "l": 170.8,
      "t": 1710525600000,
      "n": 68247
    },
    {
      "v": 11849732,
      "vw": 171.9815,
      "o": 171.5256,
      "c": 172.56,
      "h": 172.6,
      "l": 171.47,
      "t": 1710529200000,
      "n": 113338
    },
    {
      "v": 18405745,
      "vw": 172.6179,
      "o": 172.57,
      "c": 172.49,
      "h": 172.65,
      "l": 172.27,
      "t": 1710532800000,
      "n": 4273
    },
    {
      "v": 92161,
      "vw": 172.502,
      "o": 172.51,
      "c": 172.29,
      "h": 172.62,
      "l": 172.29,
      "t": 1710536400000,
      "n": 1031
    },
    {
      "v": 52133,
      "vw": 172.4273,
      "o": 172.3,
      "c": 172.59,
      "h": 172.6,
      "l": 172.25,
      "t": 1710540000000,
      "n": 560
    },
    {
      "v": 33715,
      "vw": 172.6419,
      "o": 172.59,
      "c": 172.63,
      "h": 172.74,
      "l": 172.59,
      "t": 1710543600000,
      "n": 431
    }
  ],
  "status": "OK",
  "request_id": "f6d92d39b12db0cb4d77086409d7a0d0",
  "count": 16
}
export let sampleChartResponse: ChartResponse = {
  "ticker": "AAPL",
  "queryCount": 125,
  "resultsCount": 125,
  "adjusted": true,
  "results": [
    {
      "v": 67257573,
      "vw": 177.8915,
      "o": 176.48,
      "c": 177.97,
      "h": 179.38,
      "l": 176.17,
      "t": 1695009600000,
      "n": 731278
    },
    {
      "v": 51826941,
      "vw": 178.4293,
      "o": 177.52,
      "c": 179.07,
      "h": 179.63,
      "l": 177.13,
      "t": 1695096000000,
      "n": 524402
    },
    {
      "v": 58436181,
      "vw": 176.9653,
      "o": 179.26,
      "c": 175.49,
      "h": 179.695,
      "l": 175.4,
      "t": 1695182400000,
      "n": 600225
    },
    {
      "v": 62449116,
      "vw": 174.8619,
      "o": 174.55,
      "c": 173.93,
      "h": 176.3,
      "l": 173.86,
      "t": 1695268800000,
      "n": 631478
    },
    {
      "v": 56688985,
      "vw": 175.4667,
      "o": 174.67,
      "c": 174.79,
      "h": 177.079,
      "l": 174.05,
      "t": 1695355200000,
      "n": 606168
    },
    {
      "v": 46172740,
      "vw": 175.6665,
      "o": 174.2,
      "c": 176.08,
      "h": 176.97,
      "l": 174.15,
      "t": 1695614400000,
      "n": 564218
    },
    {
      "v": 64548945,
      "vw": 172.7156,
      "o": 174.82,
      "c": 171.96,
      "h": 175.2,
      "l": 171.66,
      "t": 1695700800000,
      "n": 688340
    },
    {
      "v": 66920708,
      "vw": 170.5335,
      "o": 172.62,
      "c": 170.43,
      "h": 173.04,
      "l": 169.05,
      "t": 1695787200000,
      "n": 707850
    },
    {
      "v": 56294419,
      "vw": 170.297,
      "o": 169.34,
      "c": 170.69,
      "h": 172.03,
      "l": 167.62,
      "t": 1695873600000,
      "n": 618584
    },
    {
      "v": 51861083,
      "vw": 171.5997,
      "o": 172.02,
      "c": 171.21,
      "h": 173.07,
      "l": 170.341,
      "t": 1695960000000,
      "n": 535134
    },
    {
      "v": 52156935,
      "vw": 173.2879,
      "o": 171.22,
      "c": 173.75,
      "h": 174.3,
      "l": 170.93,
      "t": 1696219200000,
      "n": 617249
    },
    {
      "v": 49594613,
      "vw": 172.1342,
      "o": 172.255,
      "c": 172.4,
      "h": 173.63,
      "l": 170.82,
      "t": 1696305600000,
      "n": 542569
    },
    {
      "v": 53006286,
      "vw": 172.9437,
      "o": 171.09,
      "c": 173.66,
      "h": 174.21,
      "l": 170.97,
      "t": 1696392000000,
      "n": 560975
    },
    {
      "v": 48527918,
      "vw": 174.2297,
      "o": 173.79,
      "c": 174.91,
      "h": 175.45,
      "l": 172.68,
      "t": 1696478400000,
      "n": 509175
    },
    {
      "v": 57266675,
      "vw": 176.3366,
      "o": 173.8,
      "c": 177.49,
      "h": 177.99,
      "l": 173.18,
      "t": 1696564800000,
      "n": 593944
    },
    {
      "v": 42344772,
      "vw": 177.8683,
      "o": 176.81,
      "c": 178.99,
      "h": 179.05,
      "l": 175.8,
      "t": 1696824000000,
      "n": 518256
    },
    {
      "v": 43698019,
      "vw": 178.6901,
      "o": 178.1,
      "c": 178.39,
      "h": 179.72,
      "l": 177.95,
      "t": 1696910400000,
      "n": 524939
    },
    {
      "v": 47544848,
      "vw": 178.9503,
      "o": 178.2,
      "c": 179.8,
      "h": 179.85,
      "l": 177.6,
      "t": 1696996800000,
      "n": 503477
    },
    {
      "v": 56743119,
      "vw": 180.9482,
      "o": 180.07,
      "c": 180.71,
      "h": 182.34,
      "l": 179.04,
      "t": 1697083200000,
      "n": 616891
    },
    {
      "v": 51412082,
      "vw": 179.4154,
      "o": 181.42,
      "c": 178.85,
      "h": 181.93,
      "l": 178.14,
      "t": 1697169600000,
      "n": 531441
    },
    {
      "v": 52516984,
      "vw": 178.1478,
      "o": 176.75,
      "c": 178.72,
      "h": 179.075,
      "l": 176.51,
      "t": 1697428800000,
      "n": 632605
    },
    {
      "v": 57549350,
      "vw": 176.8623,
      "o": 176.645,
      "c": 177.15,
      "h": 178.42,
      "l": 174.8,
      "t": 1697515200000,
      "n": 592323
    },
    {
      "v": 54764375,
      "vw": 176.3501,
      "o": 175.58,
      "c": 175.84,
      "h": 177.575,
      "l": 175.11,
      "t": 1697601600000,
      "n": 540187
    },
    {
      "v": 59192863,
      "vw": 176.215,
      "o": 176.04,
      "c": 175.46,
      "h": 177.84,
      "l": 175.19,
      "t": 1697688000000,
      "n": 560260
    },
    {
      "v": 64211828,
      "vw": 173.7459,
      "o": 175.31,
      "c": 172.88,
      "h": 175.42,
      "l": 172.64,
      "t": 1697774400000,
      "n": 600318
    },
    {
      "v": 55980109,
      "vw": 172.3829,
      "o": 170.91,
      "c": 173,
      "h": 174.01,
      "l": 169.93,
      "t": 1698033600000,
      "n": 639616
    },
    {
      "v": 43816644,
      "vw": 172.7333,
      "o": 173.05,
      "c": 173.44,
      "h": 173.67,
      "l": 171.45,
      "t": 1698120000000,
      "n": 530406
    },
    {
      "v": 57156962,
      "vw": 171.4932,
      "o": 171.88,
      "c": 171.1,
      "h": 173.06,
      "l": 170.65,
      "t": 1698206400000,
      "n": 610143
    },
    {
      "v": 70625258,
      "vw": 167.5944,
      "o": 170.37,
      "c": 166.89,
      "h": 171.3775,
      "l": 165.67,
      "t": 1698292800000,
      "n": 815217
    },
    {
      "v": 58257129,
      "vw": 167.9072,
      "o": 166.91,
      "c": 168.22,
      "h": 168.96,
      "l": 166.83,
      "t": 1698379200000,
      "n": 609511
    },
    {
      "v": 51239218,
      "vw": 170.0788,
      "o": 169.02,
      "c": 170.29,
      "h": 171.17,
      "l": 168.87,
      "t": 1698638400000,
      "n": 628258
    },
    {
      "v": 44846017,
      "vw": 169.9252,
      "o": 169.35,
      "c": 170.77,
      "h": 170.9,
      "l": 167.9,
      "t": 1698724800000,
      "n": 509879
    },
    {
      "v": 56934906,
      "vw": 172.6187,
      "o": 171,
      "c": 173.97,
      "h": 174.23,
      "l": 170.12,
      "t": 1698811200000,
      "n": 633476
    },
    {
      "v": 77292052,
      "vw": 176.6794,
      "o": 175.52,
      "c": 177.57,
      "h": 177.78,
      "l": 175.46,
      "t": 1698897600000,
      "n": 805046
    },
    {
      "v": 79829246,
      "vw": 175.5751,
      "o": 174.24,
      "c": 176.65,
      "h": 176.82,
      "l": 173.35,
      "t": 1698984000000,
      "n": 858038
    },
    {
      "v": 63841310,
      "vw": 178.5589,
      "o": 176.38,
      "c": 179.23,
      "h": 179.43,
      "l": 176.21,
      "t": 1699246800000,
      "n": 678103
    },
    {
      "v": 70529966,
      "vw": 181.2627,
      "o": 179.18,
      "c": 181.82,
      "h": 182.44,
      "l": 178.97,
      "t": 1699333200000,
      "n": 653779
    },
    {
      "v": 49340282,
      "vw": 182.6566,
      "o": 182.35,
      "c": 182.89,
      "h": 183.45,
      "l": 181.59,
      "t": 1699419600000,
      "n": 542421
    },
    {
      "v": 53631840,
      "vw": 182.912,
      "o": 182.96,
      "c": 182.41,
      "h": 184.12,
      "l": 181.81,
      "t": 1699506000000,
      "n": 545657
    },
    {
      "v": 66177922,
      "vw": 185.4104,
      "o": 183.97,
      "c": 186.4,
      "h": 186.565,
      "l": 183.53,
      "t": 1699592400000,
      "n": 610938
    },
    {
      "v": 43627519,
      "vw": 184.8317,
      "o": 185.82,
      "c": 184.8,
      "h": 186.03,
      "l": 184.21,
      "t": 1699851600000,
      "n": 530407
    },
    {
      "v": 60108378,
      "vw": 187.2038,
      "o": 187.7,
      "c": 187.44,
      "h": 188.11,
      "l": 186.3,
      "t": 1699938000000,
      "n": 609218
    },
    {
      "v": 53608999,
      "vw": 188.4191,
      "o": 187.845,
      "c": 188.01,
      "h": 189.5,
      "l": 187.78,
      "t": 1700024400000,
      "n": 564159
    },
    {
      "v": 54412915,
      "vw": 189.7109,
      "o": 189.57,
      "c": 189.71,
      "h": 190.96,
      "l": 188.65,
      "t": 1700110800000,
      "n": 620748
    },
    {
      "v": 50737404,
      "vw": 189.6022,
      "o": 190.25,
      "c": 189.69,
      "h": 190.38,
      "l": 188.57,
      "t": 1700197200000,
      "n": 510217
    },
    {
      "v": 46538614,
      "vw": 191.2984,
      "o": 189.89,
      "c": 191.45,
      "h": 191.905,
      "l": 189.88,
      "t": 1700456400000,
      "n": 554014
    },
    {
      "v": 38134485,
      "vw": 190.51,
      "o": 191.41,
      "c": 190.64,
      "h": 191.52,
      "l": 189.74,
      "t": 1700542800000,
      "n": 450749
    },
    {
      "v": 39630011,
      "vw": 191.7223,
      "o": 191.49,
      "c": 191.31,
      "h": 192.93,
      "l": 190.825,
      "t": 1700629200000,
      "n": 463560
    },
    {
      "v": 24018404,
      "vw": 189.7899,
      "o": 190.87,
      "c": 189.97,
      "h": 190.9,
      "l": 189.25,
      "t": 1700802000000,
      "n": 335946
    },
    {
      "v": 40456609,
      "vw": 189.7974,
      "o": 189.92,
      "c": 189.79,
      "h": 190.67,
      "l": 188.9,
      "t": 1701061200000,
      "n": 508895
    },
    {
      "v": 38415419,
      "vw": 190.165,
      "o": 189.78,
      "c": 190.4,
      "h": 191.08,
      "l": 189.4,
      "t": 1701147600000,
      "n": 458154
    },
    {
      "v": 43014224,
      "vw": 189.9974,
      "o": 190.9,
      "c": 189.37,
      "h": 192.09,
      "l": 188.97,
      "t": 1701234000000,
      "n": 493064
    },
    {
      "v": 48744366,
      "vw": 189.337,
      "o": 189.84,
      "c": 189.95,
      "h": 190.32,
      "l": 188.19,
      "t": 1701320400000,
      "n": 486786
    },
    {
      "v": 45676673,
      "vw": 190.8613,
      "o": 190.33,
      "c": 191.24,
      "h": 191.56,
      "l": 189.23,
      "t": 1701406800000,
      "n": 515537
    },
    {
      "v": 43389519,
      "vw": 188.916,
      "o": 189.98,
      "c": 189.43,
      "h": 190.05,
      "l": 187.4511,
      "t": 1701666000000,
      "n": 587461
    },
    {
      "v": 66628398,
      "vw": 193.1715,
      "o": 190.21,
      "c": 193.42,
      "h": 194.4,
      "l": 190.18,
      "t": 1701752400000,
      "n": 700669
    },
    {
      "v": 41055862,
      "vw": 192.8014,
      "o": 194.45,
      "c": 192.32,
      "h": 194.76,
      "l": 192.11,
      "t": 1701838800000,
      "n": 491436
    },
    {
      "v": 47413955,
      "vw": 194.3967,
      "o": 193.63,
      "c": 194.27,
      "h": 195,
      "l": 193.59,
      "t": 1701925200000,
      "n": 495048
    },
    {
      "v": 53383658,
      "vw": 195.1638,
      "o": 194.2,
      "c": 195.71,
      "h": 195.99,
      "l": 193.67,
      "t": 1702011600000,
      "n": 538968
    },
    {
      "v": 60943699,
      "vw": 192.7089,
      "o": 193.11,
      "c": 193.18,
      "h": 193.49,
      "l": 191.42,
      "t": 1702270800000,
      "n": 691172
    },
    {
      "v": 52696900,
      "vw": 193.7834,
      "o": 193.08,
      "c": 194.71,
      "h": 194.72,
      "l": 191.721,
      "t": 1702357200000,
      "n": 510768
    },
    {
      "v": 70404183,
      "vw": 196.9085,
      "o": 195.09,
      "c": 197.96,
      "h": 198,
      "l": 194.85,
      "t": 1702443600000,
      "n": 672552
    },
    {
      "v": 66831572,
      "vw": 198.2872,
      "o": 198.02,
      "c": 198.11,
      "h": 199.62,
      "l": 196.16,
      "t": 1702530000000,
      "n": 691862
    },
    {
      "v": 127387901,
      "vw": 197.56,
      "o": 197.53,
      "c": 197.57,
      "h": 198.3999,
      "l": 197,
      "t": 1702616400000,
      "n": 625452
    },
    {
      "v": 55751861,
      "vw": 195.6255,
      "o": 196.09,
      "c": 195.89,
      "h": 196.63,
      "l": 194.39,
      "t": 1702875600000,
      "n": 655763
    },
    {
      "v": 40714051,
      "vw": 196.5277,
      "o": 196.16,
      "c": 196.94,
      "h": 196.95,
      "l": 195.89,
      "t": 1702962000000,
      "n": 451709
    },
    {
      "v": 52242815,
      "vw": 196.142,
      "o": 196.9,
      "c": 194.83,
      "h": 197.68,
      "l": 194.83,
      "t": 1703048400000,
      "n": 550599
    },
    {
      "v": 46482549,
      "vw": 194.7425,
      "o": 196.1,
      "c": 194.68,
      "h": 197.08,
      "l": 193.5,
      "t": 1703134800000,
      "n": 554844
    },
    {
      "v": 37149570,
      "vw": 194.1013,
      "o": 195.18,
      "c": 193.6,
      "h": 195.41,
      "l": 192.97,
      "t": 1703221200000,
      "n": 500544
    },
    {
      "v": 28919310,
      "vw": 193.1713,
      "o": 193.61,
      "c": 193.05,
      "h": 193.89,
      "l": 192.83,
      "t": 1703566800000,
      "n": 488257
    },
    {
      "v": 48087681,
      "vw": 192.5679,
      "o": 192.49,
      "c": 193.15,
      "h": 193.5,
      "l": 191.09,
      "t": 1703653200000,
      "n": 548076
    },
    {
      "v": 34049898,
      "vw": 193.9222,
      "o": 194.14,
      "c": 193.58,
      "h": 194.66,
      "l": 193.17,
      "t": 1703739600000,
      "n": 472404
    },
    {
      "v": 42672148,
      "vw": 192.5761,
      "o": 193.9,
      "c": 192.53,
      "h": 194.4,
      "l": 191.725,
      "t": 1703826000000,
      "n": 509123
    },
    {
      "v": 81964874,
      "vw": 185.9465,
      "o": 187.15,
      "c": 185.64,
      "h": 188.44,
      "l": 183.885,
      "t": 1704171600000,
      "n": 1008871
    },
    {
      "v": 58414460,
      "vw": 184.3226,
      "o": 184.22,
      "c": 184.25,
      "h": 185.88,
      "l": 183.43,
      "t": 1704258000000,
      "n": 656853
    },
    {
      "v": 71878670,
      "vw": 182.0183,
      "o": 182.15,
      "c": 181.91,
      "h": 183.0872,
      "l": 180.88,
      "t": 1704344400000,
      "n": 712692
    },
    {
      "v": 62371161,
      "vw": 181.474,
      "o": 181.99,
      "c": 181.18,
      "h": 182.76,
      "l": 180.17,
      "t": 1704430800000,
      "n": 682334
    },
    {
      "v": 59144470,
      "vw": 184.3702,
      "o": 182.085,
      "c": 185.56,
      "h": 185.6,
      "l": 181.5,
      "t": 1704690000000,
      "n": 669173
    },
    {
      "v": 42841809,
      "vw": 184.3706,
      "o": 183.92,
      "c": 185.14,
      "h": 185.15,
      "l": 182.73,
      "t": 1704776400000,
      "n": 538180
    },
    {
      "v": 46192908,
      "vw": 185.2509,
      "o": 184.35,
      "c": 186.19,
      "h": 186.4,
      "l": 183.92,
      "t": 1704862800000,
      "n": 554777
    },
    {
      "v": 49128408,
      "vw": 185.0604,
      "o": 186.54,
      "c": 185.59,
      "h": 187.05,
      "l": 183.62,
      "t": 1704949200000,
      "n": 584008
    },
    {
      "v": 40477782,
      "vw": 185.8199,
      "o": 186.06,
      "c": 185.92,
      "h": 186.74,
      "l": 185.19,
      "t": 1705035600000,
      "n": 477050
    },
    {
      "v": 65076641,
      "vw": 182.8866,
      "o": 182.16,
      "c": 183.63,
      "h": 184.26,
      "l": 180.934,
      "t": 1705381200000,
      "n": 767281
    },
    {
      "v": 47317433,
      "vw": 181.9201,
      "o": 181.27,
      "c": 182.68,
      "h": 182.93,
      "l": 180.3,
      "t": 1705467600000,
      "n": 594632
    },
    {
      "v": 77722754,
      "vw": 187.9358,
      "o": 186.09,
      "c": 188.63,
      "h": 189.14,
      "l": 185.83,
      "t": 1705554000000,
      "n": 787233
    },
    {
      "v": 68887985,
      "vw": 190.6149,
      "o": 189.33,
      "c": 191.56,
      "h": 191.95,
      "l": 188.82,
      "t": 1705640400000,
      "n": 682663
    },
    {
      "v": 60131852,
      "vw": 193.9891,
      "o": 192.3,
      "c": 193.89,
      "h": 195.33,
      "l": 192.26,
      "t": 1705899600000,
      "n": 718107
    },
    {
      "v": 42355590,
      "vw": 194.8203,
      "o": 195.02,
      "c": 195.18,
      "h": 195.75,
      "l": 193.8299,
      "t": 1705986000000,
      "n": 533093
    },
    {
      "v": 53631316,
      "vw": 195.2063,
      "o": 195.42,
      "c": 194.5,
      "h": 196.38,
      "l": 194.34,
      "t": 1706072400000,
      "n": 594714
    },
    {
      "v": 54822126,
      "vw": 194.7337,
      "o": 195.22,
      "c": 194.17,
      "h": 196.2675,
      "l": 193.1125,
      "t": 1706158800000,
      "n": 644526
    },
    {
      "v": 44587111,
      "vw": 193.1207,
      "o": 194.27,
      "c": 192.42,
      "h": 194.76,
      "l": 191.94,
      "t": 1706245200000,
      "n": 534165
    },
    {
      "v": 47145622,
      "vw": 191.2954,
      "o": 192.01,
      "c": 191.73,
      "h": 192.2,
      "l": 189.58,
      "t": 1706504400000,
      "n": 599513
    },
    {
      "v": 55836970,
      "vw": 188.7927,
      "o": 190.94,
      "c": 188.04,
      "h": 191.8,
      "l": 187.47,
      "t": 1706590800000,
      "n": 690705
    },
    {
      "v": 55467803,
      "vw": 185.3525,
      "o": 187.04,
      "c": 184.4,
      "h": 187.095,
      "l": 184.35,
      "t": 1706677200000,
      "n": 679844
    },
    {
      "v": 64885408,
      "vw": 185.5688,
      "o": 183.985,
      "c": 186.86,
      "h": 186.95,
      "l": 183.82,
      "t": 1706763600000,
      "n": 820977
    },
    {
      "v": 102527680,
      "vw": 184.744,
      "o": 179.86,
      "c": 185.85,
      "h": 187.33,
      "l": 179.25,
      "t": 1706850000000,
      "n": 1108465
    },
    {
      "v": 69654320,
      "vw": 187.6824,
      "o": 188.15,
      "c": 187.68,
      "h": 189.25,
      "l": 185.84,
      "t": 1707109200000,
      "n": 804748
    },
    {
      "v": 43490759,
      "vw": 188.4788,
      "o": 186.86,
      "c": 189.3,
      "h": 189.31,
      "l": 186.7695,
      "t": 1707195600000,
      "n": 530825
    },
    {
      "v": 53438955,
      "vw": 189.3803,
      "o": 190.64,
      "c": 189.41,
      "h": 191.05,
      "l": 188.61,
      "t": 1707282000000,
      "n": 596088
    },
    {
      "v": 40962046,
      "vw": 188.3032,
      "o": 189.385,
      "c": 188.32,
      "h": 189.535,
      "l": 187.35,
      "t": 1707368400000,
      "n": 521464
    },
    {
      "v": 45155216,
      "vw": 189.0056,
      "o": 188.65,
      "c": 188.85,
      "h": 189.99,
      "l": 188,
      "t": 1707454800000,
      "n": 544714
    },
    {
      "v": 41781934,
      "vw": 187.5914,
      "o": 188.415,
      "c": 187.15,
      "h": 188.67,
      "l": 186.79,
      "t": 1707714000000,
      "n": 585515
    },
    {
      "v": 56529529,
      "vw": 185.0421,
      "o": 185.77,
      "c": 185.04,
      "h": 186.21,
      "l": 183.5128,
      "t": 1707800400000,
      "n": 644015
    },
    {
      "v": 54617917,
      "vw": 183.6207,
      "o": 185.32,
      "c": 184.15,
      "h": 185.53,
      "l": 182.44,
      "t": 1707886800000,
      "n": 679072
    },
    {
      "v": 65434496,
      "vw": 182.8487,
      "o": 183.55,
      "c": 183.86,
      "h": 184.49,
      "l": 181.35,
      "t": 1707973200000,
      "n": 756083
    },
    {
      "v": 49752465,
      "vw": 182.7317,
      "o": 183.42,
      "c": 182.31,
      "h": 184.85,
      "l": 181.665,
      "t": 1708059600000,
      "n": 611770
    },
    {
      "v": 53574453,
      "vw": 181.1005,
      "o": 181.79,
      "c": 181.56,
      "h": 182.43,
      "l": 180,
      "t": 1708405200000,
      "n": 712335
    },
    {
      "v": 41496371,
      "vw": 181.9941,
      "o": 181.94,
      "c": 182.32,
      "h": 182.8888,
      "l": 180.66,
      "t": 1708491600000,
      "n": 522492
    },
    {
      "v": 52284192,
      "vw": 183.8372,
      "o": 183.48,
      "c": 184.37,
      "h": 184.955,
      "l": 182.46,
      "t": 1708578000000,
      "n": 613892
    },
    {
      "v": 44926677,
      "vw": 182.9876,
      "o": 185.01,
      "c": 182.52,
      "h": 185.04,
      "l": 182.23,
      "t": 1708664400000,
      "n": 549250
    },
    {
      "v": 40867421,
      "vw": 181.3213,
      "o": 182.24,
      "c": 181.16,
      "h": 182.76,
      "l": 180.65,
      "t": 1708923600000,
      "n": 615639
    },
    {
      "v": 54318851,
      "vw": 181.8192,
      "o": 181.1,
      "c": 182.63,
      "h": 183.9225,
      "l": 179.56,
      "t": 1709010000000,
      "n": 669751
    },
    {
      "v": 48943139,
      "vw": 181.1915,
      "o": 182.51,
      "c": 181.42,
      "h": 183.12,
      "l": 180.13,
      "t": 1709096400000,
      "n": 596442
    },
    {
      "v": 136682597,
      "vw": 180.6781,
      "o": 181.27,
      "c": 180.75,
      "h": 182.57,
      "l": 179.53,
      "t": 1709182800000,
      "n": 813073
    },
    {
      "v": 73450582,
      "vw": 179.0322,
      "o": 179.55,
      "c": 179.66,
      "h": 180.53,
      "l": 177.38,
      "t": 1709269200000,
      "n": 911077
    },
    {
      "v": 81505451,
      "vw": 174.8938,
      "o": 176.15,
      "c": 175.1,
      "h": 176.9,
      "l": 173.79,
      "t": 1709528400000,
      "n": 1167166
    },
    {
      "v": 94702355,
      "vw": 170.3234,
      "o": 170.76,
      "c": 170.12,
      "h": 172.04,
      "l": 169.62,
      "t": 1709614800000,
      "n": 1108820
    },
    {
      "v": 68568907,
      "vw": 169.5506,
      "o": 171.06,
      "c": 169.12,
      "h": 171.24,
      "l": 168.68,
      "t": 1709701200000,
      "n": 896297
    },
    {
      "v": 71763761,
      "vw": 169.3619,
      "o": 169.15,
      "c": 169,
      "h": 170.73,
      "l": 168.49,
      "t": 1709787600000,
      "n": 825405
    },
    {
      "v": 76267041,
      "vw": 171.5322,
      "o": 169,
      "c": 170.73,
      "h": 173.7,
      "l": 168.94,
      "t": 1709874000000,
      "n": 925213
    },
    {
      "v": 60139473,
      "vw": 172.9273,
      "o": 172.94,
      "c": 172.75,
      "h": 174.38,
      "l": 172.05,
      "t": 1710129600000,
      "n": 793618
    },
    {
      "v": 59813522,
      "vw": 172.8726,
      "o": 173.15,
      "c": 173.23,
      "h": 174.03,
      "l": 171.01,
      "t": 1710216000000,
      "n": 735065
    },
    {
      "v": 52488692,
      "vw": 171.3457,
      "o": 172.77,
      "c": 171.13,
      "h": 173.185,
      "l": 170.76,
      "t": 1710302400000,
      "n": 647120
    },
    {
      "v": 72913507,
      "vw": 173.0899,
      "o": 172.91,
      "c": 173,
      "h": 174.3078,
      "l": 172.05,
      "t": 1710388800000,
      "n": 806014
    },
    {
      "v": 121752699,
      "vw": 171.8002,
      "o": 171.17,
      "c": 172.62,
      "h": 172.62,
      "l": 170.285,
      "t": 1710475200000,
      "n": 771387
    }
  ],
  "status": "DELAYED",
  "request_id": "2a1bb49a20e1389a8591ad3e855b02a3",
  "count": 125
};



export type Peers = Array<string> | any;
export let samplePeers: Peers = [
  "MSFT",
  "IBM",
  "GOOGL",
  "AMZN",
  "FB",
  "INTC",
  "CSCO",
  "ORCL",
  "HPQ",
  "AAPL"
]



export type AutoSearch = {
    description: string,
    displaySymbol: string,
    symbol: string,
    type: string
};
export type AutoSearchResult = {
    count: number,
    result: Array<AutoSearch>
} | any;
export let sampleAutoSearchResult: AutoSearchResult = {
  "count": 5,
  "result": [
    {
      "description": "APPLE INC",
      "displaySymbol": "AAPL",
      "symbol": "AAPL",
      "type": "Common Stock"
    },
    {
      "description": "APPLE INC",
      "displaySymbol": "AAPL.VI",
      "symbol": "AAPL.VI",
      "type": "Common Stock"
    },
    {
      "description": "APPLE INC",
      "displaySymbol": "AAPL.BC",
      "symbol": "AAPL.BC",
      "type": "Common Stock"
    },
    {
      "description": "LS 1X AAPL",
      "displaySymbol": "AAPL.AS",
      "symbol": "AAPL.AS",
      "type": "ETP"
    },
    {
      "description": "APPLE INC",
      "displaySymbol": "AAPL.MX",
      "symbol": "AAPL.MX",
      "type": "Common Stock"
    }]};


export type News = {
    category: string,
    datetime: number,
    headline: string,
    id: number,
    image: string,
    related: string,
    source: string,
    summary: string,
    url: string
} | any;
export type NewsResponse = Array<News> | any;
export let sampleNewsResponse: NewsResponse = [
  {
    "category": "company",
    "datetime": 1710676796,
    "headline": "Google: Strong Buy - The Cheapest Trillionaire",
    "id": 126546938,
    "image": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1450922167/image_1450922167.jpg?io=getty-c-w1536",
    "related": "AAPL",
    "source": "SeekingAlpha",
    "summary": "Discover how Google's consistent growth, strong balance sheet, and advancements in AI present promising opportunities for investors in the market.",
    "url": "https://finnhub.io/api/news?id=08f116f397ecc76e9fbbd28289645623ff55663453e7c29b75db7b64c1da2a3b"
  },
  {
    "category": "company",
    "datetime": 1710673740,
    "headline": "It's Time for This \"Magnificent Seven\" Stock to Join Its Rivals and Start Contributing to This $1.7 Trillion Payout",
    "id": 126545531,
    "image": "https://g.foolcdn.com/editorial/images/769502/cash-money-hundred-dollar-bills.jpg",
    "related": "AAPL",
    "source": "Yahoo",
    "summary": "Alphabet has the cash to start paying dividends.",
    "url": "https://finnhub.io/api/news?id=68c199eb6aff36ae71aa17d533b9e76bb4f516d8deda38cfbf07c0f6d4e78a01"
  },
  {
    "category": "company",
    "datetime": 1710657000,
    "headline": "2 Cheap \"Tech\" Stocks to Buy Right Now",
    "id": 126544116,
    "image": "https://g.foolcdn.com/editorial/images/769073/online-shopping-with-credit-card-at-home.jpg",
    "related": "AAPL",
    "source": "Yahoo",
    "summary": "Price is what you pay, but value is what you get.",
    "url": "https://finnhub.io/api/news?id=10a38260c592aab98ac40c1d600b496d6507e6a0fe8394bebf44d3f336fa4e38"
  },
  {
    "category": "company",
    "datetime": 1710619806,
    "headline": "50 Cities With The Largest Population In The US",
    "id": 126542222,
    "image": "https://s.yimg.com/ny/api/res/1.2/QKVtjRq7s_Y1pTmMXG9WsA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzM-/https://media.zenfs.com/en/insidermonkey.com/2e44147cc0dd731517c0aa87d15aedfc",
    "related": "AAPL",
    "source": "Yahoo",
    "summary": "In this article, we list and discuss the 50 Cities With The Largest Population In The US. If you would like to skip our detailed discussion of the population change and growth trends in the States, you can go directly to 10 Cities With The Largest Population In The US. The United States of America […]",
    "url": "https://finnhub.io/api/news?id=7aa94efd03a0971f9fe4efc212e6e12987f80c1fd9d5ae0b6a61cfef38af07f7"
  },
  {
    "category": "company",
    "datetime": 1710615900,
    "headline": "Can Nvidia Rally 21% and Surpass Apple to Become the Second Most Valuable \"Magnificent Seven\" Stock?",
    "id": 126542066,
    "image": "https://g.foolcdn.com/editorial/images/768879/gettyimages-1344732001-1200x675-128554e.jpg",
    "related": "AAPL",
    "source": "Yahoo",
    "summary": "Nvidia has the momentum, but don't count Apple out just yet.",
    "url": "https://finnhub.io/api/news?id=782a9b95b6dcec9710bf0a0626970774e7efa93ef2fe06d001a6a2abc23b56e7"
  },
  {
    "category": "company",
    "datetime": 1710602399,
    "headline": "15 US Cities Where Populations Decreased the Most",
    "id": 126538002,
    "image": "https://s.yimg.com/ny/api/res/1.2/KtJ3aLQ1NMD2K59PRaCFnw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/insidermonkey.com/851010a843c49bf9a35614f045298608",
    "related": "AAPL",
    "source": "Yahoo",
    "summary": "In this article, we will be analyzing the population dynamics in the US and the 15 US cities where the population decreased the most. If you wish to skip our detailed analysis, you can move directly to the 5 US Cities Where Populations Decreased the Most. Population Dynamics in the US The United States ranks […]",
    "url": "https://finnhub.io/api/news?id=7e016d4b1a980fb154ac0ca06e03d0c58eba37415d7fc8f2f46df7197b5333aa"
  },
  {
    "category": "company",
    "datetime": 1710598500,
    "headline": "This Warren Buffett \"Magnificent Seven\" Stock Is Riskier Than You Think",
    "id": 126536932,
    "image": "https://g.foolcdn.com/editorial/images/769168/buffett3-tmf.jpg",
    "related": "AAPL",
    "source": "Yahoo",
    "summary": "It is one of the largest companies in the world, but that doesn't guarantee it will be a good investment.",
    "url": "https://finnhub.io/api/news?id=db66ce1e9ec48b3e478fad21012b8be5901b88664ed9815e7095a544a0d4e14f"
  },
  {
    "category": "company",
    "datetime": 1710598494,
    "headline": "TikTok Troubles, Get Your Green On: Saturday US Briefing",
    "id": 126542225,
    "image": "https://s.yimg.com/ny/api/res/1.2/7b8_chpl6V.sm70YMGh5qA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04NDQ-/https://media.zenfs.com/en/bloomberg_markets_842/6856d798ae23bf19cb7d9f748b7cc7ef",
    "related": "AAPL",
    "source": "Yahoo",
    "summary": "(Bloomberg) -- Hello from San Francisco, where we will celebrate St. Patrick a day early, with a parade down Market Street.TikTok fans are on tenterhooks after the House of Representatives overwhelmingly passed a bill that would require the beloved short-video app’s Chinese parent to divest itself of the service in the US or remove the app altogether. TikTok has access to extraordinary amounts of US data and poses a security threat, according to Congress. Privately traded ByteDance doesn’t want",
    "url": "https://finnhub.io/api/news?id=1a4292eb37f8f825d690061e6fc51527511d030ec58e9604628b9418e927e789"
  },
  {
    "category": "company",
    "datetime": 1710594180,
    "headline": "Companies Paid a Record $1.7 Trillion in Dividends Last Year. These 3 Dividend Stocks Led the Way.",
    "id": 126536418,
    "image": "https://g.foolcdn.com/editorial/images/769386/a-money-bag-on-a-pile-of-cash.jpg",
    "related": "AAPL",
    "source": "Yahoo",
    "summary": "These companies paid a massive amount in dividends last year.",
    "url": "https://finnhub.io/api/news?id=227132894e096bba5ae66673e34dd45743ea4968a27aa25f5d3c2e6b0af5e3b9"
  },
  {
    "category": "company",
    "datetime": 1710592200,
    "headline": "Qualcomm's Powerful PC Chip Is Worse for AMD Than for Intel",
    "id": 126536147,
    "image": "https://g.foolcdn.com/editorial/images/769217/shopping-for-electronics-laptop.jpg",
    "related": "AAPL",
    "source": "Yahoo",
    "summary": "More competition is coming to the PC CPU market, and it's all downside for AMD.",
    "url": "https://finnhub.io/api/news?id=a261b660cefdb91baa55e2254a39c8bdd1537d1d6e42364dba7611c7013118ad"
  },
  {
    "category": "company",
    "datetime": 1710586800,
    "headline": "Can Nvidia Become the World's Largest Company?",
    "id": 126536025,
    "image": "https://g.foolcdn.com/editorial/images/768985/person-looking-at-a-screen-with-lots-of-data-for-artificial-intelligeince-ai-applicaitons.jpg",
    "related": "AAPL",
    "source": "Yahoo",
    "summary": "In 2024, Nvidia would need to have a repeat of its incredible growth to leapfrog Microsoft and Apple in valuation.",
    "url": "https://finnhub.io/api/news?id=5100d11769bdb341c3773dfae0bafaffa044f10a29cfeed1276bacf52bd83733"
  },
  {
    "category": "company",
    "datetime": 1710576000,
    "headline": "Ahead Of Nvidia's 'Grand' Event, This Analyst Compares AI Revolution To '10 PM In A Party That Goes To 4:30 AM'",
    "id": 126537760,
    "image": "",
    "related": "AAPL",
    "source": "Benzinga",
    "summary": "Looking for stock market analysis and research with proves results? Zacks.com offers in-depth financial research with over 30years of proven results.",
    "url": "https://finnhub.io/api/news?id=65e9a52faa7a9edfa2392fee953c681a7c94f631afbb12b0e75561135c417b85"
  },
  {
    "category": "company",
    "datetime": 1710563080,
    "headline": "Q2 2024 Zedge Inc Earnings Call",
    "id": 126533925,
    "image": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo-1200x1200.png",
    "related": "AAPL",
    "source": "Yahoo",
    "summary": "Q2 2024 Zedge Inc Earnings Call",
    "url": "https://finnhub.io/api/news?id=8c3a0bfe573e3cf4e8db490607842ff83aef4a003aa5ea46be3fbf32884ba8bf"
  },
  {
    "category": "company",
    "datetime": 1710559680,
    "headline": "Apple Fails To Dismiss Lawsuit Claiming AirTags Are Weapon Of Stalkers: 'Determination Cannot Be Made At This Early Stage'",
    "id": 126538862,
    "image": "",
    "related": "AAPL",
    "source": "Benzinga",
    "summary": "Looking for stock market analysis and research with proves results? Zacks.com offers in-depth financial research with over 30years of proven results.",
    "url": "https://finnhub.io/api/news?id=a74cc1f830b67bd2e3913cf016a4008d5fade3828b4f950cb9a1a154416379d7"
  }
  ];


export type Insider = {
  symbol: string,
  year: number,
  month: number,
  change: number,
  mspr: number
}
export type InsiderResponse = {  data: Array<Insider>, symbol: string } | any;
export let sampleInsiderResponse: InsiderResponse = {
  "data": [
    {
      "symbol": "AAPL",
      "year": 2022,
      "month": 2,
      "change": -28436,
      "mspr": -49.702858
    },
    {
      "symbol": "AAPL",
      "year": 2022,
      "month": 3,
      "change": 13480,
      "mspr": 100
    },
    {
      "symbol": "AAPL",
      "year": 2022,
      "month": 4,
      "change": -458595,
      "mspr": -26.980762
    },
    {
      "symbol": "AAPL",
      "year": 2022,
      "month": 5,
      "change": -26276,
      "mspr": -100
    },
    {
      "symbol": "AAPL",
      "year": 2022,
      "month": 8,
      "change": -250366,
      "mspr": -79.69429
    },
  ],
  "symbol": "AAPL"
}


export type Earnings = {
  actual: number,
  estimate: number,
  period: string,
  quarter: number,
  surprise: number,
  surprisePercent: number,
  symbol: string,
  year: number
}
export type EarningsResponse = Array<Earnings> | any;
export let sampleEarningsResponse: EarningsResponse = [
  {
    "actual": 2.18,
    "estimate": 2.1401,
    "period": "2023-12-31",
    "quarter": 1,
    "surprise": 0.0399,
    "surprisePercent": 1.8644,
    "symbol": "AAPL",
    "year": 2024
  },
  {
    "actual": 1.46,
    "estimate": 1.4194,
    "period": "2023-09-30",
    "quarter": 4,
    "surprise": 0.0406,
    "surprisePercent": 2.8604,
    "symbol": "AAPL",
    "year": 2023
  },
  {
    "actual": 1.26,
    "estimate": 1.2183,
    "period": "2023-06-30",
    "quarter": 3,
    "surprise": 0.0417,
    "surprisePercent": 3.4228,
    "symbol": "AAPL",
    "year": 2023
  },
  {
    "actual": 1.52,
    "estimate": 1.4623,
    "period": "2023-03-31",
    "quarter": 2,
    "surprise": 0.0577,
    "surprisePercent": 3.9458,
    "symbol": "AAPL",
    "year": 2023
  }
]


export let samples = {
  profile: sampleStockDetails,
  'quote': SampleStockQuote,
  'recommendation': sampleRecommendation,
  'hourlychart': sampleHourlyChart,
  'peers': samplePeers,
  'search': sampleAutoSearchResult,
  'news': sampleNewsResponse,
  'insider': sampleInsiderResponse,
  'earnings': sampleEarningsResponse,
  'charts': sampleChartResponse
}
