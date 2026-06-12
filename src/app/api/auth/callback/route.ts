import { scalekit } from "@/lib/scalekit";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const code = searchParams.get("code");

    if (!code) {
      return NextResponse.json(
        { error: "Authorization code not found" },
        { status: 400 }
      );
    }

    const redirectUri = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`;

    console.log("Code received:", code);
    console.log("Redirect URI:", redirectUri);

    const session = await scalekit.authenticateWithCode(
      code,
      redirectUri
    );

    console.log("Session created successfully");

    const response = NextResponse.redirect(
      new URL("/", process.env.NEXT_PUBLIC_APP_URL)
    );

    response.cookies.set("access_token", session.accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return response;
  } catch (error: any) {
    console.error("ScaleKit Callback Error:", error);

    return NextResponse.json(
      {
        error: error?.message || "Authentication failed",
      },
      { status: 500 }
    );
  }
}
