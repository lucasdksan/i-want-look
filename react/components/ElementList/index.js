import { class_generator } from "../../libs/class_generator";

export default function ElementList({ product, productSearched, setProductListSelected, setProductSearched }) {
    const handleCheckboxChange = (event) => {
        const isChecked = event.target.checked;
        const selectedProduct = { productId: product.productId };

        if (isChecked) setProductListSelected((prevList) => [...prevList, selectedProduct]);
        else setProductListSelected((prevList) => prevList.filter((item) => item.productId !== selectedProduct.productId));
    };

    const handleRemove = (id) => {
        const newProdutos = productSearched.filter((produto) => produto.productId !== id);
        setProductSearched(newProdutos);
    }

    return (
        <li className={class_generator("vtex-search-section", "product-element")}>
            <label className={class_generator("vtex-search-section", "product-element--label")} htmlFor={`product-${product.productId}`}>
                <input
                    onChange={handleCheckboxChange}
                    className={class_generator("vtex-search-section", "product-element--input")}
                    id={`product-${product.productId}`}
                    type="checkbox"
                />
                <span className={class_generator("vtex-search-section", "product-element--name")}>
                    <a className={class_generator("vtex-search-section", "product-element--link")} href={product.link} target="_blank">{product.productName}</a>
                </span>
            </label>
            <button onClick={() => handleRemove(product.productId)} className={class_generator("vtex-search-section", "product-element--remove")}></button>
        </li>
    );
}