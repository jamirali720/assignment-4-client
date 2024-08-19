import { MdDashboard } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";


const ProductManagement = () => {
    return (
      <div className="md:flex justify-center justify-items-center">
        <div className="w-full md:w-2/12 h-screen bg-[#EEEEEE] rounded-sm" >
          <ul className="w-full h-screen px-4">
            <li>
              <Link
                to=""
                className="flex justify-between justify-items-center border border-transparent hover:border-white py-2 hover:text-[#F45634] px-2 font-semibold"
              >
                <MdDashboard size={28} className="text-[#F45634] w-18 h-18" />
                <span>Add Product</span>
              </Link>
            </li>
           
            <li>
              <Link
                to="/manage-products/all-products"
                className="flex justify-between justify-items-center border border-transparent hover:border-white py-2 hover:text-[#F45634] px-2 font-semibold"
              >
                <MdDashboard size={28} className="text-[#F45634] w-18 h-18" />
                <span>All Products</span>
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="flex justify-between justify-items-center border border-transparent hover:border-white py-2 hover:text-[#F45634] px-2 font-semibold"
              >
                <MdDashboard size={28} className="text-[#F45634] w-18 h-18" />
                <span>Add Orders</span>
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="flex justify-between justify-items-center border border-transparent hover:border-white py-2 hover:text-[#F45634]  px-2 font-semibold"
              >
                <MdDashboard size={28} className="text-[#F45634] w-18 h-18" />
                <span>Add Product</span>
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="flex justify-between justify-items-center border border-transparent hover:border-white py-2 hover:text-[#F45634] px-2  font-semibold"
              >
                <MdDashboard size={28} className="text-[#F45634] w-18 h-18" />
                <span>Add Product</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-10/12 md:m-3">
          <Outlet />
        </div>
      </div>
    );
};

export default ProductManagement;