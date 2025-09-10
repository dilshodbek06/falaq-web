import prisma from "@/lib/db";
import { Role } from "@prisma/client";
import bcrypt from "bcryptjs";

async function main() {
  // hash password
  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD!, 10);

  // check if admin already exists
  const existingAdmin = await prisma.user.findFirst({
    where: {
      role: Role.ADMIN,
      phoneNumber: process.env.ADMIN_PHONE,
    },
  });

  if (!existingAdmin) {
    await prisma.user.create({
      data: {
        name: process.env.ADMIN_NAME!,
        phoneNumber: process.env.ADMIN_PHONE!,
        password: hashedPassword,
        role: Role.ADMIN,
      },
    });

    console.log("✅ Default admin created!");
  } else {
    console.log("ℹ️ Default admin already exists, skipping...");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
