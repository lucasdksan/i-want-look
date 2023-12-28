import { useEffect, useState } from "react";

export default function ProductLook({ product }) {
    const [skus, setSkus] = useState([]);
    const [skuSelected, setSkuSelected] = useState();

    useEffect(() => {
        product.skus.forEach((sku_current, index) => {
            if(index === 0) setSkuSelected(sku_current);

            setSkus((prevSku) => {
                const isProductAlreadyAdded = prevSku.some((sku) => sku.sku === sku_current.sku);
                return isProductAlreadyAdded ? prevSku : [...prevSku, sku_current];
            })
        });
    }, []);

    if(!skuSelected) return null;

    return (
        <div>
            <div>
                <img src={skuSelected.image} />
            </div>
            <div>
                <div>
                    <span>{product.name}</span>
                    { skuSelected.bestPrice !== 0 ? (
                        <div>
                            <span>{skuSelected.listPriceFormated}</span>
                            <strong>{skuSelected.bestPriceFormated}</strong>
                        </div>
                    ) : (
                        <strong>{skuSelected.listPriceFormated}</strong>
                    )}
                </div>
                <div>
                    <span>Selecionar</span>
                    <ul>
                        { skus.map((sku, index)=> {
                            return (
                                <li key={index}>
                                    <button disabled={!sku.available}>{sku.skuname}</button>
                                </li>
                            );
                        }) }
                    </ul>
                    <button>Adicionar a sacola</button>
                </div>
            </div>
        </div>
    );
}