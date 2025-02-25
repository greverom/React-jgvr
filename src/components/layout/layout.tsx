import { Route, Routes, Navigate } from "react-router-dom";
import { Sidebar } from "../ui/sidebar/sidebar"; 
import { appRoutes } from "../../router/routes";
import { AppRoute } from "../../router/type";
import Loading from "../ui/loading";
import { Suspense } from "react";
import { ToastProvider } from "../../Store/Toast/toastProvider";
import { Content, MainLayout } from "../../styles/styled/layout.styles";

export const Layout = () => {
  return (
    <ToastProvider>
      <MainLayout>
        <Sidebar /> 
        <Content>
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
        </Content>
      </MainLayout>
    </ToastProvider>
  );
};

export default Layout;