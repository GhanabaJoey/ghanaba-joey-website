import { redirect } from "next/navigation";

/** Canonical public path alias — preserves `/boxgames` application experience. */
export default function BoxGamesAliasPage() {
  redirect("/boxgames");
}
