import Blog from "../Pages/Blog/Blog";
import Sign_up from "../Pages/Sign_up/Sign_up";
import Sign_in from "../Pages/Signin_page/SignIn";
import Products from "../Pages/Products/Product";
import Single_product_details from "../Pages/Single_product_details/Single_product_details";
import Private_route from "../Private_router/Private_route";
import Product_service from "../Pages/Whole_products/Product_service";
import Deshboard_layout from "../Deshboard/Deshboard_layout/Deshboard_layout";
import Add_product from "../Deshboard/Add_product/Add_product";
import All_users from "../Deshboard/All_users/All_users";
import All_selar from "../Deshboard/All_selar/All_selar";
import My_product from "../Deshboard/My_product/My_product";
import All_buyer from "../Deshboard/All_buyers/All_buyer";
import Testimonial from "../Deshboard/Testimoniul_sec/Testimonial";


const { createBrowserRouter } = require("react-router-dom");
const { default: Layout } = require("../Layout/Layout");
const { default: Home } = require("../Pages/Home/Home");

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/product/:product_name",
                element: <Products />
            },
            {
                path: "/service",
                element: <Product_service />
            },
            {
                path: "/contact",
                element: <Blog />
            },
            {
                path: "/single_product/:id",
                element: <Private_route>
                    <Single_product_details />
                </Private_route>
            },
            {
                path: "/signin",
                element: <Sign_in />
            },
            {
                path: "/signup",
                element: <Sign_up />
            },

        ]
    },
    {
        // deshboard router
        path: "/deshboard",
        element: <Deshboard_layout />,
        children: [
            {
                path: "/deshboard",
                element: <Private_route>
                    <Testimonial />
                </Private_route>
            },
            {
                path: "/deshboard/add_product",
                element: <Add_product />
            },
            {
                path: "/deshboard/my_product",
                element: <My_product />
            },
            {
                path: "/deshboard/all_users",
                element: <All_users />
            },
            {
                path: "/deshboard/all_seller",
                element: <All_selar />
            },
            {
                path: "/deshboard/all_buyers",
                element: <All_buyer />
            },


        ]
    }
])

export default router