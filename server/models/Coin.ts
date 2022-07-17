export default class Coin{
    name : string  =  '';
    price : string | number  =  '';

    public static async getALlCoins() : Promise<Coin[]>{
        return [{
            name:'bitcoin',
            price:20000
        }]
    }

}