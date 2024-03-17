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
}

export type Recommendation = {
    buy: number,
    hold: number,
    period: string,
    sell: number,
    strongBuy: number,
    strongSell: number,
    symbol: string
}

export type ChartData = {
    c: number,
    h: number,
    l: number,
    o: number,
    t: number,
    v: number,
    vw: number,
    n: number
}

export type ChartResponse = {
    ticker: string,
    queryCount: number,
    resultsCount: number,
    adjusted: boolean,
    status: string,
    request_id: string,
    count: number
    results: Array<ChartData>
}
