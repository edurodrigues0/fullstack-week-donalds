import { Prisma } from "@prisma/client"

import { db } from "@/lib/prisma"

interface GetRestaurantBySlugResponse {
  restaurant: Prisma.RestaurantGetPayload<{
    include: {
      menuCategories: {
        include: {
          products: true
        }
      }
    }
  }> | null
}

export async function getRestaurantBySlug(
  slug: string
): Promise<GetRestaurantBySlugResponse | null> {
  const restaurant = await db.restaurant.findUnique({
    where: {
      slug,
    },
    include: {
      menuCategories: {
        include: {
          products: true,
        },
      },
    },
  })
  
  return { restaurant }
}