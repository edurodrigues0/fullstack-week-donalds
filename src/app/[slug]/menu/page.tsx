
import { notFound } from "next/navigation"

import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug"

import { RestaurantHeader } from "./components/header"

interface RestaurantMenuPageProps {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ consumptionMethod: string }>
}

function isConsumptionMethodValid(consumptionMethod: string) {
  return ['DINE_IN', 'TAKEAWAY'].includes(consumptionMethod.toUpperCase())
}

export default async function RestaurantMenuPage({
  params,
  searchParams
}: RestaurantMenuPageProps) {
  const { slug } = await params
  const { consumptionMethod } = await searchParams

  if (!isConsumptionMethodValid(consumptionMethod)) {
    return notFound()
  }

  const restaurant = await getRestaurantBySlug(slug)

  if (!restaurant) {
    return notFound()
  }

  return (
    <div>
      <RestaurantHeader restaurant={restaurant} />
    </div>
  );

}