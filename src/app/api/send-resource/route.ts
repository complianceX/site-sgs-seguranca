import { NextResponse } from "next/server";
import { sendResourceEmail } from "@/lib/email";
import { resourceFiles } from "@/lib/resource-files";
import { rateLimit } from "@/lib/security/rate-limit";

const SEND_RATE_LIMIT = 5;
const SEND_WINDOW_MS = 10 * 60 * 1000;

export async function POST(req: Request) {
  try {
    const rl = await rateLimit(SEND_RATE_LIMIT, SEND_WINDOW_MS);
    if (!rl.success) {
      return NextResponse.json(
        { sent: false, reason: "rate_limited" },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { email, resourceTitle, referenceId } = body;

    if (!email || !resourceTitle || !referenceId) {
      return NextResponse.json(
        { sent: false, reason: "missing_fields" },
        { status: 400 }
      );
    }

    const resource = resourceFiles.find((r) => r.title === resourceTitle);
    if (!resource) {
      return NextResponse.json(
        { sent: false, reason: "resource_not_found" },
        { status: 404 }
      );
    }

    const result = await sendResourceEmail({
      to: email,
      resourceTitle: resource.title,
      resourceFileName: resource.fileName,
      referenceId,
    });

    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { sent: false, reason: "internal_error" },
      { status: 500 }
    );
  }
}
