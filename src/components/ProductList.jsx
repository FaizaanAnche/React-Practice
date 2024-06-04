const ProductList = () => {

    const products = [
        { title: 'Cabbage', id: 1 },
        { title: 'Garlic', id: 2 },
        { title: 'Apple', id: 3 },
      ];

    return (
        <div className="box">
            <h2>ProductList</h2>
            <ul>
            {products.map(product => 
                <li key={product.id}>{product.title}</li>
            )}
            </ul>
        </div>
    );
};

export default ProductList;