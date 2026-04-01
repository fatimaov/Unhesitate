import { NextResponse } from "next/server";
import { createDream, getMyDreams } from "@/lib/actions/dream.action";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const dream = await createDream(body);
    return NextResponse.json(dream, { status: 201 });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message },
      { status: err.message === "Unauthorized" ? 401 : 500 }
    );
  }
}

export async function GET() {
  try {
    const dreams = await getMyDreams();
    return NextResponse.json(dreams);
  } catch {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
