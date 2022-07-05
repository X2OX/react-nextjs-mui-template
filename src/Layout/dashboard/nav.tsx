import Iconify from '$components/Iconify';

const getIcon = (name: string): JSX.Element => (<Iconify icon={name} sx={{width: 20, height: 20}}/>)

export interface NavList {
    title: string
    path: string
    icon: JSX.Element
    info?: string
    children?: NavList[]
}

const navConfig: NavList[] = [
    {
        title: 'dashboard',
        path: '/',
        icon: getIcon('eva:pie-chart-2-fill'),
    },
    {
        title: 'user',
        path: '/User',
        icon: getIcon('eva:people-fill'),
    },
    {
        title: 'product',
        path: '/Products',
        icon: getIcon('eva:shopping-bag-fill'),
    },
    {
        title: 'nextjs',
        path: 'https://www.nextjs.cn/',
        icon: getIcon('eva:file-text-fill'),
    },
    {
        title: 'login',
        path: '/Login',
        icon: getIcon('eva:lock-fill'),
    },
    {
        title: 'register',
        path: '/Register',
        icon: getIcon('eva:person-add-fill'),
    },
    {
        title: 'Not found',
        path: '/Page404',
        icon: getIcon('eva:alert-triangle-fill'),
    },
];

export default navConfig;
