// import React, { useContext, useState } from "react";
// import "./Products.scss";
// import { IoCloseOutline } from "react-icons/io5";
// import { IoIosArrowDown } from "react-icons/io";
// import Sidebar from "../Sidebar/Sidebar";
// import Card from "../../../components/Card/Card";
// import { allProducts } from "../../../constants";
// import { Link } from "react-router-dom";
// import { GlobalContext } from "../../../context/GlobalContext";

// function Products() {
//   const { products } = useContext(GlobalContext);
//   const [currentPage, setCurrentPage] = useState(0);
//   const itemsPerPage = 9;

//   const handleNextPage = () => {
//     if ((currentPage + 1) * itemsPerPage < earningHistoryState.length) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <div className="product-wrapper">
//       <Sidebar />
//       <div className="card-container">
//         <div className="filtered-product">
//           <div className="filter-header">
//             <h3>Applied Filters:</h3>
//             <ul>
//               <li>
//                 Tees <IoCloseOutline />
//               </li>
//               <li>
//                 Sneakers <IoCloseOutline />
//               </li>
//             </ul>
//           </div>
//           <div className="sort-wrapper">
//             <p>Showing 1-9 Of 36 Results</p>
//             <div className="sort">
//               SORT BY <IoIosArrowDown />
//             </div>
//           </div>
//         </div>
//         {/* <MyCard /> */}
//         <div className="products-listing">
//           {products
//             .sort(() => Math.random() - 0.5)
//             .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
//             .map((product, index) => (
//               <Link to="" key={index}>
//                 <Card
//                   img={product.img}
//                   availability={product.availability}
//                   name={product.name}
//                   price={product.price}
//                 />
//               </Link>
//             ))}
//         </div>
//         <div>
//           <button>&lt;</button>
//           <button>&gt;</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Products;

import React, { useContext, useState } from "react";
import "./Products.scss";
import { IoCloseOutline } from "react-icons/io5";
import {
  IoIosArrowDown,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import Sidebar from "../Sidebar/Sidebar";
import Card from "../../../components/Card/Card";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";
import Format from "../../../components/Format/Format";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";

function Products() {
  const {
    products,
    filter,
    selectedSize,
    handleCloseSizeFilter,
    handleCloseCategoryFilter,
  } = useContext(GlobalContext);
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  const itemsPerPage = 9;

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleFirstPage = () => {
    setCurrentPage(0);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages - 1);
  };

  const handleGoProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <Format>
        <BreadCrumb />
      </Format>
      <div id="product-wrapper">
        <Sidebar />
        <div className="card-container">
          <div className="filtered-product">
            <div className="filter-header">
              <h3>Applied Filters:</h3>
              <ul>
                {/* <li>
                Tees <IoCloseOutline />
              </li>
              <li>
                Perfume <IoCloseOutline />
              </li> */}
                {filter != "all" && (
                  <li>
                    {filter}{" "}
                    <span onClick={handleCloseCategoryFilter}>
                      <IoCloseOutline />
                    </span>
                  </li>
                )}
                {selectedSize && (
                  <li>
                    {selectedSize == "S"
                      ? "Small"
                      : selectedSize == "L"
                      ? "Large"
                      : selectedSize}{" "}
                    <span onClick={handleCloseSizeFilter}>
                      <IoCloseOutline />
                    </span>
                  </li>
                )}
              </ul>
            </div>
            <div className="sort-wrapper">
              <p>
                Showing {currentPage * itemsPerPage + 1}-
                {Math.min((currentPage + 1) * itemsPerPage, products.length)} of{" "}
                {products.length} Results
              </p>
              <div className="sort">
                SORT BY <IoIosArrowDown />
              </div>
            </div>
          </div>
          <div className="products-listing">
            {!products || products == [] ? (
              <p>No product in this category.</p>
            ) : (
              products
                // .sort(() => Math.random() - 0.5)
                .sort((a, b) => a.name.localeCompare(b.name))
                .slice(
                  currentPage * itemsPerPage,
                  (currentPage + 1) * itemsPerPage
                )
                .map((product, index) => (
                  <Link to={`/product/${product.id}`} key={index}>
                    {" "}
                    <Card
                      img={product.img}
                      availability={product.availability}
                      name={product.name}
                      price={product.price}
                    />
                  </Link>
                  // <div
                  //   key={index}
                  //   className="dynamic-link"
                  //   >
                  //   <Card
                  //     img={product.img}
                  //     availability={product.availability}
                  //     name={product.name}
                  //     price={product.price}
                  //   />
                  // </div>
                ))
            )}
          </div>
          <div className="pagination">
            <button onClick={handleFirstPage} disabled={currentPage === 0}>
              &laquo;
            </button>
            <button onClick={handlePreviousPage} disabled={currentPage === 0}>
              <IoIosArrowBack />
            </button>
            <span>
              Page {currentPage + 1} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
            >
              <IoIosArrowForward />
            </button>
            <button
              onClick={handleLastPage}
              disabled={currentPage === totalPages - 1}
            >
              &raquo;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
