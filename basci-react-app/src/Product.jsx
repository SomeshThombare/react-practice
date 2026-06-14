import "./Product.css";
import Price from "./Price";
function Product(){
    return (
        <div className="Product">
           <p>Title</p>
           <p>Description</p>
           <Price/>
        </div>
    );
}

export default Product;