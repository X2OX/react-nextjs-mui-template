import {Container, Stack, Typography} from '@mui/material';
import Page from '$components/Page';
import useSWR from 'swr';
import ProductList from "$sections/deshboard/products/ProductList";
import ProductSort from "$sections/deshboard/products/ProductSort";
import {Product} from "$pages/api/product";
import {RequestData} from "$client/request";
import React from "react";
import UserLayout from "$Layout/UserLayout";

const Products = () => {
    const {data} = useSWR('/api/product', RequestData<Product>)
    return (
        <Page title="Dashboard: Products">
            <Container>
                <Typography variant="h4" sx={{mb: 5}}>
                    Products
                </Typography>

                <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end"
                       sx={{mb: 5}}>
                    <Stack direction="row" spacing={1} flexShrink={0} sx={{my: 1}}>
                        <ProductSort/>
                    </Stack>
                </Stack>

                <ProductList products={data?.data}/>
            </Container>
        </Page>
    );
}

Products.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <UserLayout>
            {page}
        </UserLayout>
    )
}

export default Products
