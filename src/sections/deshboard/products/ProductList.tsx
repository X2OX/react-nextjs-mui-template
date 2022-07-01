import {Grid, SxProps} from '@mui/material';
import ShopProductCard from './ProductCard';
import {Product} from "$pages/api/product";

interface Props{
    products?:Product[],
    other?:SxProps
}

export default function ProductList({ products, ...other }:Props) {
    return (
        <Grid container spacing={3} {...other}>
            {products?.map((product:Product,index:number) => (
                <Grid key={index} item xs={12} sm={6} md={3}>
                    <ShopProductCard product={product} />
                </Grid>
            ))}
        </Grid>
    );
}
