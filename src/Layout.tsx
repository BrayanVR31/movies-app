import { Outlet } from "react-router";
import { Navbar } from "@/components/ui/navbar";
import { ModalProvider } from "@/hooks/useModal";
import { FilterOptions } from "@/components/ui/filter-options";

const Layout = () => {
  return (
    <ModalProvider>
      <div className="min-h-screen bg-neutral-950">
        <div className="bg-neutral-900 text-gray-300 sticky top-0 left-0 z-20">
          <div className="max-w-nav mx-auto">
            <Navbar />
          </div>
        </div>
        <div className="max-w-nav mx-auto min-h-app-y mb-8">
          <div className="mt-8 mb-4">
            <FilterOptions />
          </div>
          <Outlet />
        </div>
      </div>
    </ModalProvider>
  );
};

export default Layout;
