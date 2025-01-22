import { Link, Outlet } from "react-router";

interface MainLayoutProps {
  routes: {
    label: string;
    path: string;
    key: number;
  }[];
}

function MainLayout({ routes }: MainLayoutProps) {
  return (
    <>
      <div className="h-16 border-4">
        Temporary Navbar. Replace with actual navbar
      </div>
      <div className="h-12 border-4">
        <div className="flex h-full w-full flex-row justify-around">
          {routes.map((route) => (
            <Link key={route.key} to={`/${route.path}`}>
              {route.label}
            </Link>
          ))}
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
