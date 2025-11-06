import { ProductCard } from "@/components/product-card/ProductCard";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return (
    <div className="p-12">
      <ProductCard product={product} variant="with-back-btn" />
    </div>
  );
}

// "use client";
// import { useParams } from "next/navigation";

// export default function ProductPage() {
//   const { id } = useParams();
//   return <div>{id}</div>;
// }
