import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="bg-[#EEEEEE]  w-full h-[80px] flex justify-center  justify-items-center px-5">
      <div className="flex w-full h-full justify-between items-center">
        <div className="bg-[#FFFFFF] rounded-md p-3 cursor-pointer">
          {/* <img src={image} alt="sports" className="size-16 rounded-full" /> */}
          <span className="text-2xl text-[#434343] font-bold hover:text-[#F45634] duration-300 ease-in-out">
            Sports Club
          </span>
        </div>
        <div>Search bar</div>
        <div>
          <nav>
            <ul className="flex justify-center justify-items-center  space-x-5">
              <li>
                <Link
                  to="/products"
                  className="font-semibold text-[#434343] text-lg hover:text-[#F45634]  duration-300 ease-in-out"
                >
                  All products
                </Link>
              </li>
              <li>
                <Link
                  to="/manage-products"
                  className="font-semibold text-[#434343] text-lg hover:text-[#F45634]  duration-300 ease-in-out"
                >
                  Manage Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="font-semibold text-[#434343] text-lg hover:text-[#F45634]  duration-300 ease-in-out"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/cart"
                  className="font-semibold text-[#434343] text-lg flex justify-center justify-items-center hover:text-[#F45634] duration-300 ease-in-out"
                >                              
                <span className="text-red-500"><FaShoppingCart /></span>
                <span className="relative -top-4 text-sm text-slate-800">  O </span>
               
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
