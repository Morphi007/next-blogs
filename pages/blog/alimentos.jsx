import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layaout";

const alimentos = () => {
  return (
    <div>
      
      <Layout title="alimentos"></Layout>
      <h1>alimento</h1>

      <Image src="/img/santos.jpg" width={600} height={600} alt="image"></Image>
      <Link href="/blog/contan">
        <a style={{ border: "1px solid" }}>volver a inicio</a>
      </Link>
    </div>
  );
};

export default alimentos;
