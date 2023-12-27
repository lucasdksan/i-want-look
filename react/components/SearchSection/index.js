import React, { useState } from "react";

import ElementList from "../ElementList";

import { class_generator } from "../../libs/class_generator";
import { search_product } from "../../libs/search_product";
import { handle_submit } from "../../libs/handle_submit";

export default function SearchSection({ VtexFlexRowBody, VtexFlexRowListResult, VtexFlexRowInputContainer, VtexFlexRowBottomContent }) {
    const [inputSearch, setInputSearch] = useState("");
    const [productSearched, setProductSearched] = useState([]);
    const [productListSelected, setProductListSelected] = useState([]);
    const [text, setText] = useState("");
    const [successString, setSuccessString] = useState("");
    const [dataError, setDataError] = useState();

    const function_submit = async ()=>{
        const { dataError_validation, success } = await handle_submit({ productListSelected, text });

        setSuccessString(success ? "Enviado" : "Preencha o formulário");
        setDataError(dataError_validation);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        function_submit();
    }

    return (
        <VtexFlexRowBody>
            <VtexFlexRowInputContainer>
                <div className={class_generator("vtex-search-section", "search-area")}>
                    <input
                        value={inputSearch}
                        className={class_generator("vtex-search-section", "search-input")}
                        onChange={(props) => setInputSearch(props.target.value)}
                    />
                    <button
                        onClick={() => search_product(inputSearch, setProductSearched)}
                        className={class_generator("vtex-search-section", "search-btn")}
                    >Search</button>
                </div>
            </VtexFlexRowInputContainer>
            <form onSubmit={(e) => handleSubmit(e)} className={class_generator("vtex-search-section", "search-form")}>
                <VtexFlexRowListResult>
                    <ul style={{ border: dataError?.productListSelected ? "1px solid red": "" }} className={class_generator("vtex-search-section", "search-list")}>
                        {productSearched.map((product, index) => <ElementList productSearched={productSearched} setProductSearched={setProductSearched} product={product} key={index} setProductListSelected={setProductListSelected} />)}
                    </ul>
                </VtexFlexRowListResult>
                <VtexFlexRowBottomContent>
                    <textarea style={{ border: dataError?.errorText ? "1px solid red": "" }} value={text} onChange={(e) => setText(e.target.value)} className={class_generator("vtex-search-section", "search-textarea")}></textarea>
                    <button type="submit" className={class_generator("vtex-search-section", "search-save-look")}>Salvar Look</button>
                </VtexFlexRowBottomContent>
                {successString === "" ? <></> : <p className={class_generator("vtex-search-section", "search-stats")}>{successString}</p>}
            </form>
        </VtexFlexRowBody>
    );
}