import { Restaurant } from "@prisma/client"

import { db } from "@/lib/prisma"

export async function getRestaurantBySlug(
  slug: string
): Promise<Restaurant | null> {
  const restaurant = await db.restaurant.findUnique({
    where: {
      slug,
    }
  })
  
  return restaurant
}