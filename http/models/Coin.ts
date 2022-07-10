import { Api } from "../Api";

export  default  class Coin{
    static url:string = 'Board/GetPairsDifferentialPriceForLast24Hours'

    lastPriceInToman:string | number = 0
    lastPriceInTether:string | number = 0
    changeForLastIn24HoursInPercent:string  = '0'
    pairId:string | number = 0
    pairSymbol:string = ''
    pairIsFavorite:boolean = false
    sourceAssetId:string | number = 0
    sourceAssetSymbol:string  = ''
    sourceAssetPersianTitle:string  = ''
    sourceAssetEnglishTitle:string  = ''
    sourceAssetUrlGraphData:string  = ''
    sourceAssetImageAddress:string  = ''
    destinationAssetId:string | number = 0
    destinationAssetSymbol:string  = ''
    destinationAssetPersianTitle:string  = ''
    destinationAssetEnglishTitle:string  = ''

    public static async getALlCoins():Promise<Coin[]> {
        const result = await  Api.call({ url: Coin.url }, {
            returnData: true,
        });
        if(result)
            return result as Coin[]
        return [new Coin()]
    }


}