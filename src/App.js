import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// server

import "./server";

// Utilities
import { requireAuth } from "./utils";

// styles
import "./App.css";

// Layouts
import Layout from "./layouts/Layout";
import HomeLayout from "./layouts/HomeLayout";
import ProductLayout, {
  loader as productsLayoutLoader,
} from "./layouts/ProductLayout/ProductLayout";
import ProductDetailLayout, {
  loader as productDetailLayoutLoader,
} from "./layouts/ProductDetailLayout/ProuductDetailLayout";
import HostLayout from "./layouts/HostLayout/HostLayout";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout";
import IncomeLayout from "./layouts/IncomeLayout/IncomeLayout";
import HostProductsLayout, {
  loader as hostProductsLayoutLoader,
} from "./layouts/HostProductsLayout/HostProductsLayout";
import HostProductsDetailLayout, {
  loader as hostProductsDetailLayoutLoader,
} from "./layouts/HostProductsDetailLayout";

// Components
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "./components/Login/Login";
import Error from "./components/Error/Error";

// Other layouts
import NotFound from "./layouts/NotFound";
import Description from "./layouts/Description";
import Details from "./layouts/Details";
import PhotosLayout from "./layouts/PhotosLayout";
import ReviewsLayout from "./layouts/ReviewsLayout/ReviewsLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<parentError />}>
      <Route index element={<HomeLayout />} />
      <Route path="*" element={<NotFound />} />
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <Route
        path="products"
        element={<ProductLayout />}
        errorElement={<Error />}
        loader={productsLayoutLoader}
      />

      <Route
        path="products/:id"
        element={<ProductDetailLayout />}
        errorElement={<Error />}
        loader={productDetailLayoutLoader}
      >
        <Route index element={<Description />} />
        <Route path="details" element={<Details />} />
        <Route path="photos" element={<PhotosLayout />} />
      </Route>

      {/* HOST START */}

      <Route path="host" element={<HostLayout />} errorElement={<Error />}>
        <Route
          index
          element={<DashboardLayout />}
          loader={async ({ request }) => {
            return await requireAuth(request);
          }}
        />
        <Route
          path="income"
          element={<IncomeLayout />}
          loader={async ({ request }) => {
            return await requireAuth(request);
          }}
        />

        <Route
          path="reviews"
          element={<ReviewsLayout />}
          loader={async ({ request }) => {
            return await requireAuth(request);
          }}
        />
        <Route
          path="products"
          element={<HostProductsLayout />}
          errorElement={<Error />}
          loader={hostProductsLayoutLoader}
        />
        {/* ProductDetail START */}
        <Route
          path="products/:id"
          element={<HostProductsDetailLayout />}
          errorElement={<Error />}
          loader={hostProductsDetailLayoutLoader}
        >
          <Route
            index
            element={<Description />}
            loader={async ({ request }) => {
              return await requireAuth(request);
            }}
          />
          <Route
            path="details"
            element={<Details />}
            loader={async ({ request }) => {
              return await requireAuth(request);
            }}
          />
          <Route
            path="photos"
            element={<PhotosLayout />}
            loader={async ({ request }) => {
              return await requireAuth(request);
            }}
          />
        </Route>
        {/* ProductDetail END */}
      </Route>
      {/* HOST END */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
