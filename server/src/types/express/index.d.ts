declare namespace Express {
    type PrismaClient = import('@prisma/client').PrismaClient;

    export interface Request {
        userId: number
        prisma: PrismaClient
        agent: "android" | "browser" | "postman"
    }
}