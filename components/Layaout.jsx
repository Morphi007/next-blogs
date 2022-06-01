import Head from "next/head";
import styles from "../styles/Layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image"
import Link from "next/link";
const name="Morphi Next.js"

const Layaout = ({ children, title,home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
       <title>{title}</title>
        <meta name="descricion" content="Descrcion de mi head"></meta>
      </Head>
        
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/imag/santos.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={"named"}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/img/santos.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={"named"}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <nav>
      <Link href="/">
            <a>Inicio | </a>
          </Link>
          <Link href="/blog/alimentos">
            <a>alimentos| </a>
          </Link>
          <Link href="/blog/">
            <a>articulos|</a>
          </Link>
          <Link href="/blog/contan">
            <a>Contan</a>
          </Link>

      </nav>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <footer>footer</footer>
    </div>
  );
};

export default Layaout;

Layaout.defaultProps = {
  title: "next.js",
};
