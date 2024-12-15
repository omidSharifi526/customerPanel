import  { Suspense,lazy } from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

// بارگذاری تنبل صفحات
const Login = lazy(() => import("../pages/Login/Login"));
const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
const Profile = lazy(() => import("../pages/Profile/Profile"));
const Overview = lazy(() => import("../pages/Overview/Overview"));
const Reports = lazy(() => import("../pages/Reports/Reports"));
const Products = lazy(() => import("../pages/Products/Products"));


// تعریف مسیریابی با Suspense برای بارگذاری تنبل
const Mrouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route
      path="/"
      element={
        <Suspense fallback={<div>در حال بارگذاری...</div>}>
          <Login />
        </Suspense>
      }
    />
    <Route
      path="/dashboard"
      element={
        <Suspense fallback={<div>در حال بارگذاری...</div>}>
          <Dashboard />
        </Suspense>
      }
    >
      {/* مسیرهای فرزند داخل Outlet */}
      <Route
        path="Overview"
        element={
          <Suspense fallback={<div>در حال بارگذاری صفحه خانگی داشبورد...</div>}>
            <Overview/>
          </Suspense>
        }
      />
      <Route
        index
        path="Profile"
        element={
          <Suspense fallback={<div>در حال بارگذاری تنظیمات...</div>}>
            <Profile/>
          </Suspense>
        }
      />
       <Route
        index
        path="Products"
        element={
          <Suspense fallback={<div>در حال بارگذاری تنظیمات...</div>}>
            <Products/>
          </Suspense>
        }
      />
          <Route
        path="Reports"
        element={
          <Suspense fallback={<div>در حال بارگذاری تنظیمات...</div>}>
            <Reports/>
          </Suspense>
        }
      />
    </Route>
  </Route>
  )
);

export default Mrouter;
