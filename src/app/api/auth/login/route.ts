import { scalekit } from "@/lib/scalekit";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const redirectUri =
    `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`;

  const authUrl = new URL(
    scalekit.getAuthorizationUrl(redirectUri)
  );

  authUrl.searchParams.set("prompt", "select_account");

  console.log(authUrl.toString());

  return NextResponse.redirect(authUrl.toString());
}