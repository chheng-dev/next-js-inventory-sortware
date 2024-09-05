import HomeNavbar from "../../../../components/dashboard/home/HomeNavbar";

export default function Layout({children}) {
  return (
    <div className="bg-white">
      <HomeNavbar />
      {children}
    </div>
  );
}
