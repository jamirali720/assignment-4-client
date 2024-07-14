
import React, { Fragment, useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';



import ProductCard from './ProductCard';

// import Pagination from "react-js-pagination";
import { toast } from 'react-toastify';
import { TProduct } from 'types/types';


const Products = () => {
    const [currentPage, setCurrentPage] = useState(1)
    
    
    const {products, isLoading, error, productCount, resultPerPage} = useSelector(state => state.allProducts)
    const dispatch = useDispatch()
   

    useEffect(()=> {
       if(error) {
        toast.error(error, {position: toast.POSITION.TOP_CENTER});
       
       }
      

    },[dispatch, error])


    const setCurrentPageNumber =(e)=> {
        setCurrentPage(e)
        
    }

    return (
        <Fragment>
           {
            isLoading ? <div> <h3>Loading....</h3> </div> : 
            <Fragment>
                <h1 className='product-heading'> Products</h1>
                <div className="products">
                    {products && products.map((product:TProduct) => <ProductCard key={product._id} product={product} />) }
                </div>
                <div>
             
                </div>
                 {/* {
                    resultPerPage < productCount && (
                        <div className="paginationBox">
                            <Pagination
                            activePage={currentPage}
                            itemsCountPerPage={resultPerPage}
                            totalItemsCount={productCount}
                            onChange={setCurrentPageNumber}
                            nextPageText="Next"
                            prevPageText="Prev"
                            firstPageText="1st"
                            lastPageText ="Last"
                            itemClass='page-item'
                            linkClass='page-link'
                            activeLinkClass='pageLinkActive'
                            activeClass='pageItemActive'

                        />
                        </div>
                    )
                }  */}
            </Fragment>
           }
        </Fragment>
    );
};



export default Products;