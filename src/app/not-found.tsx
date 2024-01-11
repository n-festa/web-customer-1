import Link from "next/link"
const NotFoundPage = () => (
    <section className="error-page">
        <div className="container">
            <h1>Error 404</h1>
            <p>Woops. Looks like this page doesn't exist</p>
            <Link href="/homepage" className="btn btn--rounded btn--yellow">Go to home</Link>
        </div>
    </section>
)

export default NotFoundPage