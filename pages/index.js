import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am very strong at core technologies, frameworks, and languages. I can work on relatively complex projects/tasks with relative ease. The projects I deliver mostly involve very sophisticated security elements, the highest level of user interactivity, and huge performance benefits. I've been a programmer for around two decades and have a lot of experience to bring to the table. I have a Bachelors's in computer science.
</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

    </Layout>
  );
}
