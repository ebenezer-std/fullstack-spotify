/*
  Warnings:

  - You are about to drop the column `timesPlayed` on the `Song` table. All the data in the column will be lost.
  - Added the required column `url` to the `Song` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `duration` on the `Song` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Song" DROP COLUMN "timesPlayed",
ADD COLUMN     "url" TEXT NOT NULL,
DROP COLUMN "duration",
ADD COLUMN     "duration" INTEGER NOT NULL;
