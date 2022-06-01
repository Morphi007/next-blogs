import Layaout from "../components/Layaout";
import  utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layaout title="Home page" home>
      <section className={utilStyles.headingMd} >
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layaout>
  );
}
