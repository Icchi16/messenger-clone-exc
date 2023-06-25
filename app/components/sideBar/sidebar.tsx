import { ReactNode } from "react";
import DesktopSidebar from "./desktopSidebar";
import MobileFooter from "./mobileFooter";

import getCurrentUser from "@/app/actions/getCurrentUser";
import { User } from "@prisma/client";

const Sidebar = async ({ children }: { children: ReactNode }) => {
  const currentUser = await getCurrentUser();

  return (
    <div className="h-full">
      <DesktopSidebar currentUser={currentUser} />
      <MobileFooter />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
};

export default Sidebar;
