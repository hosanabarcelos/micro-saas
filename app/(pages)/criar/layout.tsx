import { auth } from "@/app/lib/auth";
import { getProfileId } from "@/app/server/get-profile-data";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) redirect("/");

  let profileId = null;
  if (session.user?.id) {
    profileId = await getProfileId(session.user.id);
  }

  if (profileId) redirect(`/${profileId}`);

  return <>{children}</>;
}