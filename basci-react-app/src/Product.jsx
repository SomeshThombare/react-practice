import "./Product.css";
import Price from "./Price";

function Product({title,idx}){
    let oldPrices = ["1390","5670","1590","500"];
    let newPrices = ["3490","6000","2000","600"];

    let description = [
        ["9,000 DPI","5 Programmign buttons"],
        ["Intutive surface","designed for i pad"],
        ["designed for ipad Pro","intiutin surface "],
        ["wireless","38hr batery backup"],
    ];
    return (
        <div className="Product">
           <h4>{title}</h4>
           <p>{description[idx][0]}</p>
           <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default Product;