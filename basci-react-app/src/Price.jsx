// Price.jsx
function Price({ oldPrice, newPrice }) {
    return (
        <div>
            <span style={{ textDecoration: "line-through" }}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span><b>{newPrice}</b></span>
        </div>
    );
}

export default Price;
