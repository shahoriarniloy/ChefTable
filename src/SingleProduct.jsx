
const singleProduct = ({product,handleCart}) => {
    // console.log(handleCart);
    return (
    
            <div className="w-full border border-gray-200 rounded-lg p-8 ">
                <img className="w-full h-64 rounded-lg" src={product.recipe_image} alt="" />
                <h1 className=" text-zinc-800 text-xl font-semibold mb-4">{product.recipe_name}</h1>
                <p className=" text-zinc-500 text-base font-normal mb-4 ">{product.description}</p>
                <hr />
                <h2 className="text-zinc-800 text-lg font-medium">Ingredients</h2>
                <ul className="list-disc ml-6 mb-4 ">
                {product.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
                </ul>

                <hr />

                <div className="lg:flex lg:justify-between text-zinc-800 text-opacity-80 text-base font-normal mb-4">
                    <div className="footer-left mt-4"> 
                        <img src="/image/time.svg" alt="" />
                        <p>{product.preparing_time}</p>

                    </div>
                    
                    <div className="footer-right mt-4">
                    <img src="/image/calories.svg" alt="" />
                    <p>{product.calories}</p>
                    </div>
                </div>
                <button onClick={()=>handleCart(product)} className="add-btn ">Want to Cook</button>

            </div>
    
    );
};

// singleProduct.propTypes ={
//     product:PropTypes.func,
//     handleCart:PropTypes.func,
//     handleCooking:PropTypes.func


// }

export default singleProduct;