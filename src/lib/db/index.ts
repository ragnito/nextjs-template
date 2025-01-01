import { PrismaClient } from "@prisma/client"
import { env } from "@/lib/env";

const createPrismaClient = () =>
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const db = globalForPrisma.prisma || createPrismaClient()

if (env.NODE_ENV !== "production") globalForPrisma.prisma = db