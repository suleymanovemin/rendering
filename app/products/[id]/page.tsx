import { Metadata } from "next";
import Image from "next/image";

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/products");
  const { products } = await res.json();

  return products.map((product: any) => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: [
        {
          url: product.thumbnail,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
      title: product.title,
      type: "article",
      description: product.description,
      publishedTime: product.meta.createdAt,
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
      images: [product.thumbnail],
    },
  };
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  console.log(product);

  return (
    <div>
      <Image
        src={product.thumbnail}
        alt={product.title}
        blurDataURL="/blur.avif"
        placeholder="blur"
        width={400}
        className="h-[280px] object-contain"
        height={400}
      />
      <h1>{product.title}</h1>
      <p>{product.price}</p>
    </div>
  );
};

export default Page;
