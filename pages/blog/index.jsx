import Layaout from "../../components/Layaout";
import Link from "next/link";
export default function index({ data }) {
  return (
    <Layaout>
      <h1>lista de blog</h1>
      {data.map(({ id, title, body }) => (
        <div key={id}>
          <Link href={`/blog/${id}`}>
            <a>{id}-{title}</a>
           </Link>
          <br></br>
          <p>{body}</p>
        </div>
      ))}

      {console.log(data)}
    </Layaout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
