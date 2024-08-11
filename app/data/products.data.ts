export interface ProductInterface{
    name:string;
    prize:number;
    description:string;
    image:string;
}

export const PRODUCTS_LIST: ProductInterface[] = [
    {
        name:"Fresiluche",
        prize:14.99,
        description:"tu maravilloso",
        image:"/images/merchandaising/peluche.jpeg"
    },
    {
        name:"Fresitaza",
        prize:9.99,
        description:"tu maravilloso",
        image:"/images/merchandaising/taza.jpeg"
    },
    {
        name:"Fresialbornoz",
        prize:19.99,
        description:"tu maravilloso",
        image:"/images/merchandaising/toalla.jpeg"
    }
]