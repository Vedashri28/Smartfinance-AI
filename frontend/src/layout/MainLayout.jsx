import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#050816] flex">

      <Sidebar />

      <div className="flex-1 ml-72">

        <Navbar />

        <main className="p-8">
          {children}
        </main>

      </div>

    </div>
  );
}

export default MainLayout;
