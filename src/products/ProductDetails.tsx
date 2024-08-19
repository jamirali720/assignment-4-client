import { Fragment, ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetSportsQuery,
  useGetSingleSportsQuery,
} from "../redux/api/productsApi";
import {
  addToCart,
  decrementItem,
  incrementItem,
} from "../redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "./../hooks/hooks";
import { cartItems } from "./../redux/features/cartSlice";
import { toast } from "sonner";
import Description from "./Description";
import ReviewsCard from "../Reviews/ReviewsCard";
import ProductCard from "./ProductCard";
import ReviewModal from "../Reviews/ReviewModal";

const ProductDetails = () => {
  const { productId } = useParams();
  const [show, setShow] = useState(true);

  const { data, isLoading, isError, isSuccess, error } =
    useGetSingleSportsQuery(productId!);
  const { data: relatedData } = useGetSportsQuery();

  const relProducts = relatedData?.data.filter(
    (item) => item.category === data?.data.category
  );

  const dispatch = useAppDispatch();
  const cartItemsProducts = useAppSelector(cartItems);

  const cartItem = cartItemsProducts.find((p) => p._id === productId);

  const handleAddToCart = () => {
    dispatch(addToCart(data?.data));
  };
  const handleIncrement = () => {
    dispatch(incrementItem(productId!));
  };
  const handleDecrement = () => {
    dispatch(decrementItem(productId!));
  };

  useEffect(() => {
    if (isError) {
      toast.error(error as ReactNode, { position: "top-center" });
    }
    if (isSuccess) {
      toast.success("Sports details retrieved successfully", {
        position: "top-center",
        duration: 1000,
      });
    }
  }, [isError, isSuccess, error]);

  return (
    <Fragment>
      {isLoading ? (
        <div className=" w-full h-screen ">
          <h1 className="text-center text-3xl font-bold"> Loading Data....</h1>
        </div>
      ) : (
        <main className="bg-[#FFFFFF]">
          <div className="w-full h-full grid md:grid-cols-2 bg-[#FFFFFF] sm: grid-cols-1">
            <section className=" w-full max-w-full md:h-screen shadow-md">
              <div className="h-full">
                <img
                  src={data?.data.image.url}
                  className="w-full h-full object-contain"
                  alt=""
                />
              </div>
            </section>
            <section className="p-10 md:h-screen shadow-md">
              <div className="py-2 text-slate-700 text-3xl">
                <h1 className="text-red-500">
                  <strong> Product Name :</strong> {data?.data.name}
                </h1>
              </div>
              <div className="py-2 text-slate-700 text-lg">
                <p>
                  {" "}
                  <strong> Category :</strong> {data?.data.category}{" "}
                </p>
              </div>
              <div className="py-2 text-slate-700 text-lg">
                <p>
                  {" "}
                  <strong>Product Brand :</strong> {data?.data.brand}{" "}
                </p>
              </div>
              <div className="py-2 text-slate-700 text-lg">
                <p>
                  <strong> Product Rating :</strong>
                  {data?.data.ratings ? (
                    <span>{data?.data.ratings.toFixed(2)}</span>
                  ) : (
                    <span> No reviews</span>
                  )}
                </p>
              </div>
              <div className="py-2 text-slate-700 text-lg">
                <p>
                  <strong>Price :</strong> {data?.data.price}
                </p>
              </div>
              <div className="py-2 text-slate-700 text-lg">
                <p>
                  <strong>Status :</strong>
                  {data && data?.data.stock > 0 ? (
                    <span className="text-green-600"> InStock</span>
                  ) : (
                    <span className="text-red-600"> Out Of Stock</span>
                  )}
                   :  {data?.data.stock}
                </p>
              </div>
              <div className="flex justify-center justify-items-center w-32 my-2">
                <button
                  onClick={handleDecrement}
                  disabled={cartItem && cartItem?.quantity === 1}
                  className="w-10 h-10 rounded-sm font-semibold text-2xl hover:bg-slate-100 ease-in-out duration-300 border border-slate-200"
                >
                  -
                </button>
                <p className="w-10 h-10 rounded-sm font-semibold text-md  hover:bg-slate-100 ease-in-out duration-300 border border-slate-200 text-center m-auto pt-2">
                  {cartItem?.quantity ? cartItem.quantity : 0}
                </p>
                <button
                  onClick={handleIncrement}
                  disabled={
                    (cartItem && cartItem.stock === 0) ||
                    cartItem?.quantity === cartItem?.stock
                  }
                  className="w-10 h-10 rounded-sm font-semibold text-2xl hover:bg-slate-100 ease-in-out duration-300 border border-slate-200"
                >
                  +
                </button>
              </div>
              <div className="md:w-2/5 py-2">
                <button
                  disabled={cartItem && cartItem.stock === 0}
                  onClick={handleAddToCart}
                  className="w-full text-[#F45634] font-bold py-2 my-1 rounded-full bg-slate-50  hover:bg-slate-100 ease-in-out duration-300 uppercase "
                >
                  Add to Cart
                </button>
              </div>
              <div className="w-2/5 h-10 my-10">
                {productId && <ReviewModal id={productId} />}
              </div>
            </section>
          </div>

          {/* description section */}
          <section className="w-full h-screen shadow-md my-5 ">
            <div className="max-w-full md:w-11/12 mx-auto max-h-screen p-6">
              <div className=" flex justify-start mb-8 space-x-4 ">
                <button
                  className="text-red-500 text-xl uppercase font-semibold"
                  onClick={() => setShow(true)}
                >
                  Description
                </button>
                <button
                  className="text-red-500 text-xl uppercase font-semibold"
                  onClick={() => setShow(false)}
                >
                  Review ({data?.data.reviews && data?.data.reviews.length})
                </button>
              </div>
              <div className=" w-full h-full">
                {show ? (
                  <Description description={data?.data.description} />
                ) : (
                  <div className="">
                    {data?.data.reviews && data.data.reviews?.length > 0 ? (
                      <div className="overflow-x-scroll overflow-hidden md:flex justify-center justify-items-center ">
                        {data?.data.reviews?.map((review) => {
                          return <ReviewsCard review={review} />;
                        })}
                      </div>
                    ) : (
                      <div> No Review yet</div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>
          {/* Related product section */}
          <section>
            <div>
              <h1 className="text-center text-3xl font-bold uppercase text-red-500 my-4">
                Related products
              </h1>
            </div>
            <div className="grid md:grid-cols-4 gap-5 sm:grid-cols-3">
              {relProducts &&
                relProducts.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </div>
          </section>
        </main>
      )}
    </Fragment>
  );
};

export default ProductDetails;
