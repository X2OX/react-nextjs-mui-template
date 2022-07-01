import {NextApiRequest, NextApiResponse} from "next";
import UUID from "$utils/uuid";
import {randomArr} from "$utils/random";

export interface Product{
    cover:string,
    id:string,
    name:string,
    price:string,
    priceSale:string,
    colors:string[],
    status:string
}

const PRODUCT_NAME = [
    'Avocado Essentials for Weight Loss',
    'I don\'t know what it\'s called',
    'small pomegranate',
    'Grapes bathing in the sun',
    'The romance that belongs only to strawberries',
    'Orange and Wild Chrysanthemum',
    'Fragaria',
    'Afternoon tea time',
    'have you tried raspberry?',
    'It doesn\'t look sour...',
    'What can Qingti be used for?',
    'It\'s looks nice!',
    'Guess how big this pineapple will be',
    'The raw materials of red wine generally come from it',
    'Realize the freedom of cherries',
    'I\'m guessing it might be a blackcurrant',
    'strange and unknown',
    'Did you have it in your childhood?',
    'Strawberries disguised as I can\'t afford to eat',
    'I don\'t know, I don\'t know, shaking my head',
    'Mix in a mushroom',
    'looks crystal clear',
    'Grapefruit and Pomegranate',
    'Strange ending',
];
const PRODUCT_COLOR = ['#00AB55', '#000000', '#FFFFFF', '#FFC0CB', '#FF4842', '#1890FF', '#94D82D', '#FFC107'];

const products = [...Array(24)].map((_, index) :Product=> {
    const setIndex = index + 1;

    return {
        id:new UUID().toString(),
        cover: `/static/product/product_${setIndex}.jpg`,
        name: PRODUCT_NAME[index],
        price: `${(setIndex * 10 + 99)/2}$`,
        priceSale: `${(setIndex * 10 + 99)}$`,
        colors:
            (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
            (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
            (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
            (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
            (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
            (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
            PRODUCT_COLOR,
        status: randomArr(['sale', 'new', '', '']),
    };
});

export default function ProductReq(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json({
        data:products,
        code:0,
        msg:''
    })
}
