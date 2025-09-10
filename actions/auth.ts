"use server";

import prisma from "@/lib/db";
import { getSession } from "@/lib/session";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export async function registerAction(formData: FormData) {
  const phoneNumber = formData.get("phoneNumber")?.toString().trim();
  const password = formData.get("password")?.toString();
  const name = formData.get("name")?.toString().trim();

  // Validate input
  if (!phoneNumber || !password || !name) {
    return { error: "Phone Number, password and name required" };
  }

  if (password.length < 6) {
    return { error: "Password must be at least 6 characters long" };
  }

  // Check if phone number already exists
  const existingUser = await prisma.user.findUnique({
    where: { phoneNumber },
  });

  if (existingUser) {
    return { error: "Phone number already registered" };
  }

  // Hash password
  const hashed = await bcrypt.hash(password, 10);

  // Create user
  const user = await prisma.user.create({
    data: { phoneNumber, password: hashed, name },
  });

  // Save session
  const session = await getSession();
  session.user = { id: user.id, phoneNumber: user.phoneNumber };
  await session.save();

  redirect("/");
}

export async function loginAction(formData: FormData) {
  const phoneNumber = formData.get("phoneNumber")?.toString();
  const password = formData.get("password")?.toString();

  if (!phoneNumber || !password) {
    throw new Error("Phone number and password required");
  }

  const user = await prisma.user.findUnique({ where: { phoneNumber } });
  if (!user) throw new Error("User not found");

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) throw new Error("Invalid credentials");

  const session = await getSession();
  session.user = { id: user.id, phoneNumber: user.phoneNumber };
  await session.save();

  redirect("/"); // after login redirect to homepage
}

export async function logoutAction() {
  const session = await getSession();
  session.destroy();
  redirect("/"); // after logout redirect to homepage
}
