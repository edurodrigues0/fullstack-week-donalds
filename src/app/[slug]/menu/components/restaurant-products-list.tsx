import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface RestaurantProductsListProps {
  products: Product[]
}

export default function RestaurantProductsList({
  products
}: RestaurantProductsListProps) {
  return (
    <div className="space-y-3 px-5">
      { products.map((product) => {
        return (
          <Link
            href="/"
            key={product.id}
            className="flex items-center justify-between gap-10 py-3 border-b"
          >
            <div>
              <h3 className="text-sm font-medium">{ product.name}</h3>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                { product.description }
              </p>

              <p className="pt-3 text-sm font-semibold">
                { Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                }).format(product.priceInCents /*/ 100 */ )}
              </p>
            </div>

            <div className="relative min-h-[82px] min-w-[120px]">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </Link>
        )
      })}
    </div>
  )
}