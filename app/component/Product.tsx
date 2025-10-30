import Image from "next/image";
import Link from "next/link";

const Product = ({ product }: { product: any }) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className="rounded-md border p-2 w-max"
    >
      <Image
        src={product.thumbnail}
        alt={product.title}
        blurDataURL="/blur.avif"
        placeholder="blur"
        width={200}
        height={200}
      />
      <h2>{product.title}</h2>
      <p>{product.price}</p>
    </Link>
  );
};

export default Product;
