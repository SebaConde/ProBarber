import "dotenv/config";  // 👈 esta línea primero que todo


import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import sampleData from "./sample-data";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.booking.deleteMany();
  await prisma.user.deleteMany();

  await prisma.user.createMany({ data: sampleData.users });
  await prisma.service.createMany({ data: sampleData.services });

  console.log("✅ DB seeded successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });