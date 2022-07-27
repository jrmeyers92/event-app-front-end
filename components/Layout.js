import Head from "next/head"
import styles from "@/styles/Layout.module.css"
import Header from "./Header"
import Footer from "./Footer"


export default function Layout({title, description, keywords, children}) {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </Head>
        <Header />
        <div className={styles.container}>
          {children}
        </div>

        <Footer />
    </div>
  )
}

Layout.defaultProps = {
     title: "Events app",
     description: "Event application helping you find or post events in your local area",
     keywords: "music, sports, concerts, food, parties, charity, galas"
}
