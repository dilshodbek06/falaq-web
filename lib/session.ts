// lib/session.ts
import { getIronSession, SessionOptions } from "iron-session";
import { cookies } from "next/headers";

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_SECRET!, // must be at least 32 characters
  cookieName: "myapp_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export async function getSession() {
  return await getIronSession<{ user?: { id: string; phoneNumber: string } }>(
    await cookies(),
    sessionOptions
  );
}
