import ProductCard from "./ProductCard";

import {
  ChangeEvent,
  Fragment,
  KeyboardEvent,
  useEffect,
  useState,
} from "react";
import { TProductResponse } from "../types/types";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { Slider, Radio, RadioChangeEvent, Rate } from "antd";

import {
  // allProducts,
  clearFilters,
  filteredProducts,
  setBrand,
  setLimit,
  setPage,
  setPrice,
  setRating,
  setSearchTerm,
  setSorting,
} from "../redux/features/filterSlice";
import {
  useGetAllSportsQuery,
  useGetSportsQuery,
} from "../redux/api/productsApi";
import { toast } from "sonner";

import { AiOutlineSearch } from "react-icons/ai";

const Products = () => {
  const filterProducts = useAppSelector(filteredProducts);
  const [searchText, setSearchText] = useState<string>("");
  const dispatch = useAppDispatch();
  const filterOptions = useAppSelector((state) => state.filter);

  const [currentPage, setCurrentPage] = useState(1);
  // called all products use hooks

  const { data: products } = useGetSportsQuery(undefined, {
    pollingInterval: 3000,
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  // remove duplicates values from brand array;
  const uniqueBrands = [
    ...new Set(
      products?.data.map((prod) => {
        if (filterOptions.category === "All") {
          return prod.brand;
        } else {
          return prod.category === filterOptions.category && prod.brand;
        }
      })
    ),
  ].filter(Boolean); // remove false values

  const queryOptions = {
    name: filterOptions.searchTerm,
    category: filterOptions.category,
    minPrice: filterOptions.minPrice,
    maxPrice: filterOptions.maxPrice,
    limit: filterOptions.limit,
    page: filterOptions.page,
    sort: filterOptions.sort,
    brand: filterOptions.brand,
    ratings: filterOptions.ratings,
  };

  const { isLoading, isError } = useGetAllSportsQuery(queryOptions, {
    pollingInterval: 3000,
    refetchOnMountOrArgChange: true,
    skip: false,
  });
  const { data: allProducts } = useGetSportsQuery();

  const initialPrices = { min: Infinity, max: -Infinity };

  const minMaxPrice = allProducts?.data.reduce((acc, item) => {
    return {
      min: Math.min(acc.min, item.price),
      max: Math.max(acc.max, item.price),
    };
  }, initialPrices);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value;
    setSearchText(searchQuery);
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
     const searchQuery = (event.target as HTMLInputElement).value;
    if (event.key === "Enter") {     
      dispatch(setSearchTerm(searchQuery));
    }    
  };
  const handleChangeSearchProducts = () => {
    dispatch(setSearchTerm(searchText));
  };

  const handleChangePrice = (event: number[]) => {
    dispatch(setPrice({ minPrice: event[0], maxPrice: event[1] }));
  };
  const handleChangeBrand = (event: RadioChangeEvent) => {
    dispatch(setBrand(event.target.value));
  };

  const handleSortingValue = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSorting(event.target.value));
  };
  const handleClearFilter = () => {
    dispatch(clearFilters());
  };

  const handleChangeLimit = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLimit(event.target.value));
  };

  useEffect(() => {
    if (isError) {
      toast.error("Failed to load products", {
        position: "top-center",
        duration: 3000,
      });
    }
  }, [isError]);

  // Pagination
  useEffect(() => {
    dispatch(setPage(currentPage));
  }, [dispatch, currentPage]);

  if (isLoading) {
    return (
      <div className="w-full h-full bg-gray-300 text-red-500">Loading...</div>
    );
  }

  return (
    <Fragment>
      <div className="bg-[#FFFFFF]">
        <section>
          <div className="w-screen md:w-1/2 mx-auto px-3 flex justify-center justify-items-center">
            <input
              type="text"
              onChange={handleChangeSearch}
              onKeyDown={handleKeyDown}
              id="search"
              className="rounded-sm  text-start text-1xl w-full h-10 pl-3 my-4 outline-none ring-1  focus:ring-2"
              placeholder="Search here"
            />
            <span className="w-12 ring-1 rounded-sm h-10 my-4 border border-slate-100 flex justify-center justify-items-center p-2 cursor-pointer">
              <AiOutlineSearch
                onClick={handleChangeSearchProducts}
                size={28}
                color="gray"
                className="hover:scale-105 ease-in-out"
              />
            </span>
          </div>
          <section className="w-screen md:w-full">
            <div className="my-3 py-5 md:flex justify-between justify-items-center px-6 space-y-2">
              <div className="">
                <h1 className="text-center  text-3xl font-bold text-slate-600">
                  Feature Products
                </h1>
              </div>
              <div className="px-4 py-2 flex justify-center justify-items-center gap-2">
                <p className="font-semibold uppercase py-2"> Show Items :</p>
                <select
                  name="limit"
                  onChange={handleChangeLimit}
                  id="limit"
                  value={filterOptions.limit}
                  className="px-4 py-2 border-0 ring-1 focus:ring-2 outline-none rounded"
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              </div>
              <div className="px-4 py-2 flex justify-center justify-items-center gap-2">
                <p className="font-semibold uppercase py-2">sorting :</p>
                <select
                  name="sorting"
                  onChange={handleSortingValue}
                  id="sorting"
                  value={filterOptions.sort}
                  className="px-4 py-2 border-0 ring-1 focus:ring-2 outline-none rounded"
                >
                  <option value="asc">Price(ascending)</option>
                  <option value="desc">Price(descending)</option>
                </select>
              </div>
            </div>
            <div className="md:flex justify-center justify-items-center">
              <div className="sm:w-1/5 border border-slate-100 px-2">
                <div className="md:flex-col justify-center justify-items-center ">
                  {/* filter price section */}
                  <div className="shadow-sm h-auto py-4 border border-slate-100 mb-4 w-screen md:w-full">
                    <h3 className="pl-3 uppercase py-3 text-red-500 font-bold">
                      Filter by price :
                    </h3>
                    <div className="px-5">
                      <Slider
                        range={{ draggableTrack: true }}
                        min={minMaxPrice?.min}
                        max={minMaxPrice?.max}
                        defaultValue={[0, 250000]}
                        onChange={handleChangePrice}
                      />
                    </div>
                  </div>
                  {/* filter brand section */}
                  <div className="border border-slate-100 w-screen md:w-full px-5 py-2 ">
                    <ul className="md:mr-auto">
                      <h3 className="uppercase py-3 text-red-500 font-bold">
                        Filter by Brand Name :
                      </h3>
                      <Radio.Group
                        onChange={handleChangeBrand}
                        defaultValue={filterOptions.brand}
                      >
                        <Radio value="All">All</Radio>
                        {uniqueBrands &&
                          uniqueBrands.map((brand, index) => (
                            <li key={index}>
                              <Radio value={brand}>{brand}</Radio>
                            </li>
                          ))}
                      </Radio.Group>
                    </ul>
                  </div>
                  {/* rating filter */}
                  <div className="border border-slate-100 px-5 py-2 my-3 w-screen md:w-full">
                    <h3 className="uppercase py-3 text-red-500 font-bold">
                      Filter by rating :
                    </h3>
                    <Rate
                      allowHalf
                      count={5}
                      style={{ fontSize: 22 }}
                      value={5}
                      tooltips={["1", "2", "3", "4", "5"]}
                      onChange={(event) => dispatch(setRating(event))}
                    />
                  </div>
                  <div className="border border-slate-100 px-5 py-2 w-screen md:w-full">
                    <div className="w-full h-10 bg-red-400 hover:bg-red-500 ease-in-out  rounded-sm flex justify-center justify-items-center">
                      <button
                        className="w-full h-full hover:scale-105 text-white font-medium "
                        onClick={handleClearFilter}
                      >
                        Clear Filter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* product display section  */}
              <section className="md:w-4/5 ">
                <div
                  className={
                    filterProducts.length > 0
                      ? "grid md:grid-cols-4 sm:grid-cols-3 gap-5"
                      : "w-full"
                  }
                >
                  {filterProducts.length === 0 ? (
                    <div className="w-full h-full my-36">
                      <h1 className="text-3xl font-bold text-center">
                        No products were found matching your selection
                      </h1>
                    </div>
                  ) : (
                    filterProducts.map((product: TProductResponse) => (
                      <ProductCard key={product._id} product={product} />
                    ))
                  )}
                </div>
                {filterProducts &&
                  filterProducts.length >= filterOptions.limit && (
                    <div className="text-end px-4 mb-2 w-18 h-10 my-3">
                      <button
                        onClick={() => {
                          if (currentPage > 1) {
                            setCurrentPage(currentPage - 1);
                          }
                        }}
                        className={`mx-1 border border-slate-200 ${
                          currentPage === 1
                            ? " cursor-not-allowed"
                            : "cursor-pointer"
                        } px-4 py-2 rounded`}
                      >
                        Previous page
                      </button>
                      <button
                        onClick={() => {
                          if (filterProducts.length > currentPage) {
                            setCurrentPage(currentPage + 1);
                          }
                        }}
                        className={`mx-1 border border-slate-200 ${
                          filterProducts.length === currentPage
                            ? " cursor-not-allowed"
                            : "cursor-pointer"
                        } px-4 py-2 rounded`}
                      >
                        next page
                      </button>
                    </div>
                  )}
              </section>
            </div>
          </section>
        </section>
      </div>
    </Fragment>
  );
};

export default Products;
