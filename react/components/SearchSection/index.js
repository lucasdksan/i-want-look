import React, { useState } from "react";

import { class_generator } from "../../libs/class_generator";

export default function SearchSection({ VtexFlexRowBody, VtexFlexRowListResult, VtexFlexRowInputContainer, VtexFlexRowBottomContent }){
    const [sku, setSKU] = useState("");

    return(
        <VtexFlexRowBody>
            <VtexFlexRowInputContainer>
                <div className={class_generator("vtex-search-section", "search-area")}>
                    <input 
                        className={class_generator("vtex-search-section", "search-input")} 
                        onChange={(props)=> setSKU(props.target.value)} 
                    />
                    <button className={class_generator("vtex-search-section", "search-btn")}></button>
                </div>
            </VtexFlexRowInputContainer>
            <form className={class_generator("vtex-search-section", "search-form")}>
                <VtexFlexRowListResult>{}</VtexFlexRowListResult>
                <VtexFlexRowBottomContent>
                    <textarea className={class_generator("vtex-search-section", "search-textarea")}></textarea>
                    <button type="submit" className={class_generator("vtex-search-section", "search-save-look")}>Salvar Look</button>
                </VtexFlexRowBottomContent>
            </form>
        </VtexFlexRowBody>
    );
}