import { lazy } from "react";
import PrivateRoutes from "./PrivateRoutes";
import { path } from "../Constants/Paths";

const HomePage = lazy(() => import("../pages/HomePage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const CategoriesPage = lazy(() => import("../pages/CategoriesPage"));
const VegetablesPage = lazy(() => import("../pages/VegetablesPage"));
const WishlistPage = lazy(() => import("../pages/WishlistPage"));
const ShoppingCartPage = lazy(() => import("../pages/ShoppingCartPage"));
const CheckoutPage = lazy(() => import("../pages/CheckoutPage"));
const BlogPage = lazy(() => import("../pages/BlogPage"));
const SingleBlogPostPage = lazy(() => import("../pages/SingleBlogPostPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const FAQsPage = lazy(() => import("../pages/FAQsPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const DashboardPage = lazy(() => import("../pages/DashboardPage"));
const OrderHistoryPage = lazy(() => import("../pages/OrderHistoryPage"));
const DetailOrderHistoryPage = lazy(
  () => import("../pages/DetailOrderHistoryPage"),
);
const SettingsPage = lazy(() => import("../pages/SettingsPage"));

const routes = [
  { path: path.home, element: <HomePage /> },
  { path: path.about, element: <AboutPage /> },
  { path: path.contact, element: <ContactPage /> },
  { path: path.faqs, element: <FAQsPage /> },

  { path: path.category, element: <CategoriesPage /> },
  { path: path.categoryDetails, element: <VegetablesPage /> },
  {
    path: path.productDetails,
    element: <div>hello from product id page</div>,
  },
  { path: path.cart, element: <ShoppingCartPage /> },
  { path: path.checkout, element: <CheckoutPage /> },

  { path: path.blog, element: <BlogPage /> },
  { path: path.blogDetails, element: <SingleBlogPostPage /> },

  { path: path.login, element: <LoginPage /> },
  { path: path.register, element: <RegisterPage /> },

  {
    element: <PrivateRoutes />,
    children: [
      { path: path.dashboard, element: <DashboardPage /> },
      { path: path.orderHistory, element: <OrderHistoryPage /> },
      {
        path: path.detailOrderHistory,
        element: <DetailOrderHistoryPage />,
      },
      { path: path.settings, element: <SettingsPage /> },
      { path: path.wishlist, element: <WishlistPage /> },
    ],
  },
];

export default routes;
