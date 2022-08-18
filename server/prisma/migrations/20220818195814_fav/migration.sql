/*
  Warnings:

  - The primary key for the `Favorites` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Favorites` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,trackId]` on the table `Favorites` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Favorites" DROP CONSTRAINT "Favorites_pkey",
DROP COLUMN "id";

-- CreateIndex
CREATE UNIQUE INDEX "Favorites_userId_trackId_key" ON "Favorites"("userId", "trackId");
