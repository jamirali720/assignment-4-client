import { Fragment, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useGetSportsQuery } from "../../redux/api/productsApi";
import ProductCard from "../products/ProductCard";
import { toast } from "sonner";
import { IErrorResponse, IErrorResponseStatus } from "../../types/types";
import { setBrand, setCategory } from "../../redux/features/filterSlice";
import { categories } from "../../utils/categories";
import { Link } from "react-router-dom";
import Spinner from "../../utils/Spinner";
import Pagination from "../pagination/Pagination";
import Contact from "../contact/Contact";
import LatestProducts from "./LatestProducts";
import { Button } from "antd";
import MetaData from "../MetaData/MetaData";

const Home = () => {
  const dispatch = useAppDispatch();
  const { category, brand } = useAppSelector((state) => state.filter);
  const { data, isError, isLoading, error } = useGetSportsQuery();
  const [itemPerPage, setItemPerPage] = useState<number>(8);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages =
    data?.data.length && Math.ceil(data?.data.length / itemPerPage);
  const startIndex = (currentPage - 1) * itemPerPage;
  const lastIndex = startIndex + itemPerPage;
  const renderData = data?.data.slice(startIndex, lastIndex);

  // show error message
  let message = "";
  if (error) {
    message =
      (error as IErrorResponse).data?.message ||
      (error as IErrorResponseStatus).error;
  }
  useEffect(() => {
    if (isError) {
      toast.error(message, {
        position: "top-center",
        duration: 3000,
      });
    }
  }, [message, data, isError]);

  return (
    <Fragment>
      <MetaData title="Home page" />
      {isLoading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <div className="bg-[#FFFFFF] w-screen md:w-full px-2">
          <section className="my-10">
            <h1 className="text-start text-3xl font-bold">
              {" "}
              Latest Features Products
            </h1>
            <LatestProducts />
          </section>
          <div className="w-full  p-3 mx-auto my-4">
            <div className="w-full  space-x-3">
              <h1 className="text-center text-2xl my-4 text-red-500 ">
                Shop by Category
              </h1>
              <div className="space-y-3 space-x-4">
                {categories.map((button, index) => {
                  return (
                    <Link to="/products" key={index}>
                      <Button
                        className={`border border-slate-200 p-5 my-2 font-semibold  rounded ${
                          button === category ? "bg-red-500 text-white" : ""
                        }`}
                        onClick={() => {
                          dispatch(setCategory(button));
                          {
                            brand !== "All" && dispatch(setBrand("All"));
                          } // initial brand is all selected
                        }}
                      >
                        {button}
                      </Button>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* // products display part */}
          <section>
            <div className="grid md:grid-cols-4 gap-4 p-2 ">
              {renderData &&
                renderData.map((product, index) => (
                  <ProductCard key={index} product={product}></ProductCard>
                ))}
            </div>
            <section className="w-full h-auto p-4 mx-1">
              {data?.data && (
                <Pagination
                  products={data?.data}
                  startIndex={startIndex}
                  lastIndex={lastIndex}
                  itemPerPage={itemPerPage}
                  currentPage={currentPage}
                  setItemPerPage={setItemPerPage}
                  setCurrentPage={setCurrentPage}
                  totalPages={totalPages}
                />
              )}
            </section>
          </section>
          {/* contact section */}
          <section>
            <Contact />
          </section>
        </div>
      )}
    </Fragment>
  );
};

export default Home;
