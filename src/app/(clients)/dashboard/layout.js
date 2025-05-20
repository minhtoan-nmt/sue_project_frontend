import { cookies } from "next/headers";

export default async function DashboardLayout({ children }) {
  const token = (await cookies()).get("token");
    return <>{children}</>;
  }
  