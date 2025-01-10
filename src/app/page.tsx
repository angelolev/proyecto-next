import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Mi tienda</h1>
      {/* <img src={bgImage.src} /> */}
      <Image
        src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Background image"
        width={800}
        height={600}
      />
      <Link prefetch={true} href="/productos">
        Mira todos los productos
      </Link>
    </>
  );
}
