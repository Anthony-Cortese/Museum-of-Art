import React from "react";
import { useParams } from "react-router-dom";
import { artistData } from "../artistData";
import { FaPaintBrush } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/artistSlice";
import { useUserData } from "../features/userSlice";
import "./styles.css"

interface PaintingDetailInterface {
    homeRef: React.RefObject<HTMLDivElement>
}

export default function PaintingDetail() {
    const { id } = useParams();
    const [painting] = artistData.filter((art) => art.id === parseInt(id ?? "" ))
    const dispatch = useDispatch();

    const { user } = useUserData();


return (
       <div className="main-div">
          {/* Product */}
         
             {/* Product image */}
                <div className="painting-img">
                  <div className="frame">

                  
                   <img
                      src={`/images/${painting.image}`}
                      alt={painting.painting}
                      className="painting"
                   />
                   </div>
                  
                </div>
         

             {/* Product details */}
             <div className="product-div">
                <div className="product-info">
                  
                      <h1 className="title">
                         {painting.painting}
                      </h1>

                      <h2 id="information-heading" className="heading">
                         Product information
                      </h2>
                   
                


                <p className="bio">{painting.biography}</p>

                <p className="bio">
                   Price- $
                   {new Intl.NumberFormat("en-GB").format(painting.price)}
                </p>
                <div className="bio">
                   {painting.inStock ? (
                      <FaPaintBrush
                         className="brush"
                         aria-hidden="true"
                      />
                   ) : (
                      <FaPaintBrush
                         className="brush"
                         aria-hidden="true"
                      />
                   )}
                   {painting.inStock ? "In Stock!" : "Out Of Stock!"}
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                   <button
                      disabled={!painting.inStock}
                      onClick={() => {
                         dispatch(addToCart(painting.id));
                      }}
                      type="button"
                      className={
                         painting.inStock
                            ? "w-full  bg-indigo-600   border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                            : "w-full  bg-indigo-600 opacity-30 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white"
                      }
                   >
                      Add to cart
                   </button>
                </div>
                <div className="border-t border-gray-200 mt-10 pt-10">
                   <h3 className="heading">
                      Highlights
                   </h3>
                   <div className="highlights">
                      <p className="list">
                         {painting.highlights.map((highlight) => (
                            <p key={highlight}>{highlight}</p>
                         ))}
                      </p>
                   </div>
                </div>

               
             </div>
             </div>
       </div>
 );
}