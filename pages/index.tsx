import Layout from '../layouts/main';
import Link from 'next/link';
//import PageIntro from '../components/page-intro';
const IndexPage = () => {
  return (
    <Layout>
        
        <section className="featured">
        <div className="container">
          <Link href="/homepage">
            <a>Homepage</a>
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage