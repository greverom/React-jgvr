import { Route, Routes, Navigate } from "react-router-dom";
import { Sidebar } from "../ui/sidebar/sidebar"; 
import { appRoutes } from "../../router/routes";
import { AppRoute } from "../../router/type";
import Loading from "../ui/loading";
import { Suspense } from "react";
import "../../styles/layout.css";

export const Layout = () => {
  return (
    <div className="main-layout">
      <Sidebar /> 

      <div className="content">
        <Suspense fallback={<Loading />}>
          <Routes>
            {appRoutes.map((route: AppRoute, index: number) => (
              <Route key={index} path={route.path} element={route.element}>
                {route.children?.map((childRoute, childIndex) => (
                  <Route
                    key={childIndex}
                    path={childRoute.path}
                    index={childRoute.index}
                    element={childRoute.element}
                  />
                ))}
              </Route>
            ))}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;