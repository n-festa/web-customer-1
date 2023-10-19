import Head from 'next/head';
import Header from 'components/header';
import { useRouter } from 'next/router';

type LayoutType = {
    title?: string;
    children?: React.ReactNode;
}

export default ({ children, title = 'Next.js Ecommerce' }: LayoutType) => {
    const router = useRouter();
    const pathname = router.pathname;

    return (
        <div className="app-main">
            <Head>
                <title>{ title }</title>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
                />
                <link href="https://fonts.cdnfonts.com/css/svn-gilroy" rel="stylesheet" />

                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap"
                />
            </Head>

            <Header />

            <main className={(pathname !== '/' ? 'main-page' : '')}>
                { children }
            </main>
        </div>
  )
}