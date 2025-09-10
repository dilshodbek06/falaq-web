-- CreateEnum
CREATE TYPE "public"."OrderStatus" AS ENUM ('NEW', 'INPROGRESS', 'CANCELED', 'COMPLETED');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Book" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "oldPrice" INTEGER,
    "salePrice" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "categoryId" TEXT,
    "bookTypeId" TEXT,
    "authorId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Order" (
    "id" TEXT NOT NULL,
    "status" "public"."OrderStatus" NOT NULL DEFAULT 'NEW',
    "phoneNumber" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "locationName" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "totalPrice" INTEGER NOT NULL,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."OrderBook" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "bookId" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OrderBook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AdBanner" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "linkUrl" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdBanner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BookType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Author" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "definition" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BookPage" (
    "id" TEXT NOT NULL,
    "pageNumber" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "bookId" TEXT NOT NULL,

    CONSTRAINT "BookPage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BookRating" (
    "id" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "review" TEXT NOT NULL,
    "bookId" TEXT NOT NULL,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookRating_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_phoneNumber_key" ON "public"."User"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "public"."Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "BookType_name_key" ON "public"."BookType"("name");

-- AddForeignKey
ALTER TABLE "public"."Book" ADD CONSTRAINT "Book_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Book" ADD CONSTRAINT "Book_bookTypeId_fkey" FOREIGN KEY ("bookTypeId") REFERENCES "public"."BookType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Book" ADD CONSTRAINT "Book_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."Author"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."OrderBook" ADD CONSTRAINT "OrderBook_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "public"."Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."OrderBook" ADD CONSTRAINT "OrderBook_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "public"."Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BookPage" ADD CONSTRAINT "BookPage_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "public"."Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BookRating" ADD CONSTRAINT "BookRating_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "public"."Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BookRating" ADD CONSTRAINT "BookRating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
