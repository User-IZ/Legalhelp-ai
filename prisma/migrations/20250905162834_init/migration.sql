/*
  Warnings:

  - The `kyc_type` column on the `vkyc_documents` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('REGULAR_USER', 'BARRISTER', 'LAWYER', 'GOVERNMENT_OFFICIAL');

-- CreateEnum
CREATE TYPE "KycType" AS ENUM ('REGULAR', 'PROFESSIONAL');

-- CreateEnum
CREATE TYPE "ConsultationType" AS ENUM ('VIDEO', 'CHAT', 'BOTH');

-- CreateEnum
CREATE TYPE "RequestStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'PROCESSING', 'COMPLETED', 'FAILED', 'REFUNDED');

-- CreateEnum
CREATE TYPE "MessageType" AS ENUM ('TEXT', 'FILE', 'IMAGE');

-- CreateEnum
CREATE TYPE "CallStatus" AS ENUM ('PENDING', 'ACTIVE', 'ENDED', 'FAILED');

-- DropForeignKey
ALTER TABLE "Report" DROP CONSTRAINT "Report_user_id_fkey";

-- DropForeignKey
ALTER TABLE "vkyc_documents" DROP CONSTRAINT "vkyc_documents_user_id_fkey";

-- AlterTable
ALTER TABLE "vkyc_documents" DROP COLUMN "kyc_type",
ADD COLUMN     "kyc_type" "KycType" NOT NULL DEFAULT 'REGULAR';

-- DropTable
DROP TABLE "Profile";

-- CreateTable
CREATE TABLE "profiles" (
    "id" TEXT NOT NULL,
    "address" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT,
    "password" TEXT,
    "first_name" TEXT,
    "last_name" TEXT,
    "phone" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'REGULAR_USER',
    "kyc_type" "KycType" NOT NULL DEFAULT 'REGULAR',
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "vkyc_completed" BOOLEAN NOT NULL DEFAULT false,
    "vkyc_completed_at" TIMESTAMP(3),
    "can_upload_reports" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "advocate_profiles" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "specialization" TEXT[],
    "experience" INTEGER NOT NULL,
    "bio" TEXT,
    "education" TEXT,
    "certifications" TEXT[],
    "hourly_rate" DOUBLE PRECISION NOT NULL,
    "location" TEXT,
    "languages" TEXT[],
    "image_url" TEXT,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "is_available" BOOLEAN NOT NULL DEFAULT true,
    "total_consultations" INTEGER NOT NULL DEFAULT 0,
    "total_earnings" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "advocate_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "consultation_requests" (
    "id" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,
    "advocate_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "consultation_type" "ConsultationType" NOT NULL,
    "status" "RequestStatus" NOT NULL DEFAULT 'PENDING',
    "amount" DOUBLE PRECISION NOT NULL,
    "scheduled_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "consultation_requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payments" (
    "id" TEXT NOT NULL,
    "request_id" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,
    "advocate_id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "stripe_payment_id" TEXT,
    "stripe_session_id" TEXT,
    "status" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "payment_method" TEXT,
    "processed_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "access_grants" (
    "id" TEXT NOT NULL,
    "request_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "granted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "access_grants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chat_messages" (
    "id" TEXT NOT NULL,
    "request_id" TEXT NOT NULL,
    "sender_id" TEXT NOT NULL,
    "receiver_id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "message_type" "MessageType" NOT NULL DEFAULT 'TEXT',
    "is_read" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "chat_messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "video_calls" (
    "id" TEXT NOT NULL,
    "request_id" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,
    "advocate_id" TEXT NOT NULL,
    "call_id" TEXT NOT NULL,
    "status" "CallStatus" NOT NULL DEFAULT 'PENDING',
    "started_at" TIMESTAMP(3),
    "ended_at" TIMESTAMP(3),
    "duration" INTEGER,
    "recording_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "video_calls_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "monthly_earnings" (
    "id" TEXT NOT NULL,
    "advocate_id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "total_amount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "consultation_count" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "monthly_earnings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "profiles_email_key" ON "profiles"("email");

-- CreateIndex
CREATE UNIQUE INDEX "advocate_profiles_user_id_key" ON "advocate_profiles"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "payments_request_id_key" ON "payments"("request_id");

-- CreateIndex
CREATE UNIQUE INDEX "payments_stripe_session_id_key" ON "payments"("stripe_session_id");

-- CreateIndex
CREATE UNIQUE INDEX "access_grants_request_id_key" ON "access_grants"("request_id");

-- CreateIndex
CREATE UNIQUE INDEX "video_calls_request_id_key" ON "video_calls"("request_id");

-- CreateIndex
CREATE UNIQUE INDEX "video_calls_call_id_key" ON "video_calls"("call_id");

-- CreateIndex
CREATE UNIQUE INDEX "monthly_earnings_advocate_id_year_month_key" ON "monthly_earnings"("advocate_id", "year", "month");

-- AddForeignKey
ALTER TABLE "advocate_profiles" ADD CONSTRAINT "advocate_profiles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vkyc_documents" ADD CONSTRAINT "vkyc_documents_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
