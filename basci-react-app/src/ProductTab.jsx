import Product from "./Product.jsx";
function ProductTab(){
    let styles = {
        display : 'flex',
        flexWrap : "wrap",
        justifyContent : 'center',
        alignItems: "center",
    };
    return(
        <div style = {styles}> 
        
            <Product title="Logitech Mx Master" idx={0}/>
            <Product title="Apple Pencile " idx={1}/>
            <Product title="Zebronice Zeb-transformer" idx={2}/>
            <Product title="Petronics Tond 23" idx={3}/>
        </div>
    );
 }

export default ProductTab;