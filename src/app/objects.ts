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
export let sampleChartResponse: ChartResponse ={
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
  'charts': sampleChartResponse,
  'peers': samplePeers,
  'search': sampleAutoSearchResult,
  'news': sampleNewsResponse,
  'insider': sampleInsiderResponse,
  'earnings': sampleEarningsResponse,
}
