import {Box, Card, Stack, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import Link from "$components/Link";
import Label from '$components/Label';
import {Product} from "$pages/api/product";

interface props {
    product: Product
}

const ProductImgStyle = styled('img')({
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
});

export default function ProductCard({product}: props) {
    const {name, price, status, priceSale, cover} = product;

    return (
        <Card>
            <Box sx={{pt: '100%', position: 'relative'}}>
                {status && (
                    <Label
                        variant="filled"
                        color={(status === 'sale' && 'error') || 'info'}
                        sx={{
                            zIndex: 9,
                            top: 16,
                            right: 16,
                            position: 'absolute',
                            textTransform: 'uppercase',
                        }}
                    >
                        {status}
                    </Label>
                )}
                <ProductImgStyle alt={name} src={cover}/>
            </Box>

            <Stack spacing={2} sx={{p: 3}}>
                <Link href="#" color="inherit" underline="hover">
                    <Typography variant="subtitle2" noWrap>
                        {name}
                    </Typography>
                </Link>

                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="subtitle1">
                        <Typography
                            component="span"
                            variant="body1"
                            sx={{
                                color: 'text.disabled',
                                textDecoration: 'line-through',
                            }}
                        >
                            {priceSale}
                        </Typography>
                        &nbsp;
                        {price}
                    </Typography>
                </Stack>
            </Stack>
        </Card>
    );
}
