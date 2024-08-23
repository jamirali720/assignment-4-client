import { Button } from "antd";
import React from "react";
import { TProductResponse } from "types/types";

type PropsType = {
  products: TProductResponse[];
  startIndex: number;
  lastIndex: number;
  itemPerPage: number;
  currentPage: number;
  setItemPerPage: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number | undefined;
};
const Pagination = ({
  products,
  startIndex,
  currentPage,
  itemPerPage,
  lastIndex,
  totalPages,
  setItemPerPage,
  setCurrentPage,
}: PropsType) => {
  return (
    <section className="w-full h-[150px] sm:h-[50px] md:flex justify-between justify-items-center">
      <div className=" text-center md:text-start px-4 w-full md:w-1/4 h-10 pt-1">
        <span>
          Viewing{" "}
          <strong>{startIndex === 0 ? startIndex + 1 : startIndex}</strong> -
          <strong className="mx-1">
            {products && products?.length > lastIndex
              ? lastIndex
              : products.length}
          </strong>
          of <strong>{products.length}</strong> products
        </span>
      </div>
      <div className=" w-full md:h-3/4 h-14  md:flex justify-end justify-items-center ">
        <div className="text-center md:text-end px-4  w-full md:w-18 h-10 ">
          <span> Show : </span>
          <select
            value={itemPerPage}
            onChange={(event) => setItemPerPage(Number(event.target.value))}
            className="border border-slate-200  px-4 py-2 rounded-sm"
          >
            {[8, 10, 20, 50, 75, 100, 200].map((value, i) => (
              <option className="" key={i} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="text-center  md:text-end px-4 mb-2 w-full md:w-18 h-10 my-3 sm:my-0">
          <Button
            onClick={() => {
              if (currentPage > 1) {
                setCurrentPage((current) => current - 1);
              }
            }}
            disabled={currentPage === 1}
            className="p-5 mx-2"
          >
            Prev
          </Button>
          <Button
            onClick={() => {
              if (totalPages && totalPages > currentPage) {
                setCurrentPage((current) => current + 1);
              }
            }}
            disabled={totalPages === currentPage}
            className="p-5 mx-2"
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pagination;
