"use client";
import AppSidebar from "@/components/AppSidebar";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  const [courseId, setCourseId] = useState<string | null>(null);
  const { user, isLoaded } = useUser();

  //handle useEffect for if course page

  if (!isLoaded) return <Loading />;
  if (!user) return <div>Please Sign In to access this page</div>;

  return (
    <SidebarProvider>
      <div className="dashboard">
        {/* Sidebar here */}
        <AppSidebar />

        <div className="dashboard__content">
          {/* Course chapter sidebar here if it the course page */}
          <div
            className={cn("dashboard__main")}
            style={{
              height: "100vh",
            }}
          >
            <Navbar isCoursePage={false} />
            <main className="dashboard__body">{children}</main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
