const search_function = async (value, setProductSearched)=>{
    const response = await fetch(`/api/catalog_system/pub/products/search/${value}`,
    {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });
    const result = await response.json();

    setProductSearched((products) => products.length === 0 ? result : products.concat(result));
}

export const search_product = (search, setProductSearched)=>{
    search_function(search, setProductSearched);
}