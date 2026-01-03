import './styles/main.css'
import * as ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ADMIN_PATH, ADMIN_APPRAISER_PATH, ADMIN_USER_LIST_PATH, HOME_PATH, SIGNUP_PATH, SIGNIN_PATH, PROFILE_PATH, INTRODUCTION, NEWS, CONTACT, STAFF_PATH, STAFF_USER_PATH, STAFF_CATEGORY_PATH, STAFF_NEW_PATH, STAFF_WAREHOUSE_PATH, STAFF_AUCTION_PATH, STAFF_PRODUCT_PATH, STAFF_REQUEST_PATH, ADMIN_PERSONAL_INFOR_PATH,ADMIN_USER_PATH, ADMIN_NEWS_PATH,ADMIN_WAREHOUSE_PATH,ADMIN_AUCTION_PATH,ADMIN_PRODUCT_PATH,ADMIN_LOGOUT_PATH,ADMIN_PR_AUCTION_PATH,
  ADMIN_CUSTOMER_REQUEST_PATH} from './constants/Routes';
import ClientLayout from './layouts/Client/ClientLayout';
// import Profile from './pages/Client/Profile';
// import Introduction from './pages/Client/Introduction';
// import News from './pages/Client/News';
// import Contact from './pages/Client/Contact';
// import StaffLayout from './layouts/Staff/StaffLayout';
// import StaffUsers from './pages/Staff/Users';
// import StaffCategories from './pages/Staff/Categories';
// import StaffNews from './pages/Staff/News';
// import StaffWarehouse from './pages/Staff/Warehouse';
// import StaffAuction from './pages/Staff/Auction';
// import StaffProducts from './pages/Staff/Products';
// import StaffRequests from './pages/Staff/Requests';
import Register from "./layouts/Auth/Register.tsx"
import AuthLayout from "./layouts/Auth/AuthLayout.tsx";
import AdminPage from "./pages/Admin";
// import AdminUsers from "./pages/Admin/Users";
// import AdminAppraiser from "./pages/Admin/Appraiser";
import NotFound from "./pages/Errors/NotFound";
import PersonalProfile from "./pages/Client/PersonalProfile";
import ErrorPage from "./pages/Error/ErrorPage.tsx";

import ManegeNews from "./pages/Admin/ManageNews"
import ManageWarehouse from "./pages/Admin/ManageWarehouse"
import ManageAuction from "./pages/Admin/ManageAuction"
import ManageProduct from './pages/Admin/ManageProduct';
import PresidingAuction from "./pages/Admin/PresidingAuction"

const router = createBrowserRouter([
  {
    path: HOME_PATH,
    element: <ClientLayout />,
    errorElement: <NotFound/>,
  },
  {
    path: PROFILE_PATH,
    element: <PersonalProfile />,
  },
  {
    path: INTRODUCTION,
    element: "<Introduction />",
  },
  {
    path: NEWS,
    element: "<News />",
  },
  {
    path: CONTACT,
    element: "<Contact />",
  },
  {
    path: SIGNIN_PATH,
    element: <AuthLayout />,
  },
  {
    path: SIGNUP_PATH,
    element: <Register />,
  },
  {
    path: ADMIN_PATH,
    element: <AdminPage />,
    children: [
      // {
      //   path: ADMIN_PERSONAL_INFOR_PATH,
      //   element: <PersonalInfor/>
      // },
      {
        path: ADMIN_USER_LIST_PATH,
        element: <ErrorPage/>
      },
      
      {
        path: ADMIN_NEWS_PATH,
        element: <ManegeNews/>
      },
      {
        path: ADMIN_WAREHOUSE_PATH,
        element: <ManageWarehouse/>
      },
      {
        path: ADMIN_AUCTION_PATH,
        element: <ManageAuction/>
      },
      {
        path: ADMIN_PRODUCT_PATH,
        element: <ManageProduct/>
      },
      {
        path: ADMIN_PR_AUCTION_PATH,
        element: <PresidingAuction/>
      },
      {
        path: ADMIN_CUSTOMER_REQUEST_PATH,
        element: <ErrorPage/>
      },
      {
        path: ADMIN_APPRAISER_PATH,
        element: "<AdminAppraiser />",
      },
    ],
    errorElement: "<ErrorPage />",
  },
  {
    path: STAFF_PATH,
    element: "<StaffLayout />",
    children: [
      {
        path: STAFF_USER_PATH,
        element: "<StaffUsers />",
      },
      {
        path: STAFF_CATEGORY_PATH,
        element: "<StaffCategories />",
      },
      {
        path: STAFF_NEW_PATH,
        element:" <StaffNews />",
      },
      {
        path: STAFF_WAREHOUSE_PATH,
        element: "<StaffWarehouse />,"
      },
      {
        path: STAFF_AUCTION_PATH,
        element:" <StaffAuction />,"
      },
      {
        path: STAFF_PRODUCT_PATH,
        element: "<StaffProducts />,"
      },
      {
        path: STAFF_REQUEST_PATH,
        element: "<StaffRequests />,"
      },
    ],
    errorElement: "<ErrorPage />,"
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>,
)