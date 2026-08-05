import { redirect } from "next/navigation";
import { headers } from "next/headers";

// Fallback only — middleware.ts normally rewrites "/" to /bn or /en
// before this ever renders.
export default async function RootFallback() {
  const hdrs = await headers();
  const host = hdrs.get("host") || "";
  redirect(host.includes("ans.digital") ? "/en" : "/bn");
}
