/*
  Warnings:

  - Added the required column `precio` to the `Libro` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Libro" ADD COLUMN     "disponible" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "precio" INTEGER NOT NULL;
