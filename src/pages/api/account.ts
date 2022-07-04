import {NextApiRequest, NextApiResponse} from "next";

const account: AccountType = {
    displayName: 'Tom&Jerry',
    email: 'Tom@mui/material.cc',
    photoURL: '/static/avatar/avatar.png',
};

export default function accountReq(
    req: NextApiRequest,
    res: NextApiResponse) {
    res.status(200).json({
        data: account,
        code: 0,
        msg: ''
    })
}

export interface AccountType {
    displayName: string
    email: string
    photoURL: string
}
