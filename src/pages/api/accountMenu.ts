import {NextApiRequest, NextApiResponse} from "next";

export default function MenuOptions(
    req: NextApiRequest,
    res: NextApiResponse) {
    res.status(200).json({
        data: options,
        code: 0,
        msg: ''
    })
}

export interface MenuOptions {
    label: string
    icon: string
    linkTo: string
}

const options: MenuOptions[] = [
    {
        label: 'Home',
        icon: 'eva:home-fill',
        linkTo: '/',
    },
    {
        label: 'Profile',
        icon: 'eva:person-fill',
        linkTo: '#',
    },
    {
        label: 'Settings',
        icon: 'eva:settings-2-fill',
        linkTo: '#',
    },
];
