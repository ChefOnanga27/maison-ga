import type { ReactNode, FC } from "react";
import { Navigation } from "@/app/components/navigation";
import  Footer  from "@/app/components/footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow px-4 md:px-8 lg:px-16 py-6">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
