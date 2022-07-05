import type {ReactElement} from 'react'
import type {NextPageWithLayout} from './_app'
import UserLayout from "$Layout/UserLayout";

const Page: NextPageWithLayout = () => {
    return <p>hello world</p>
}

Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <UserLayout>
            {page}
        </UserLayout>
    )
}

export default Page
