import React, { useEffect, useState, memo } from "react";
import { useRuntime } from "vtex.render-runtime";

import { schema } from "./schema";

import LookBanner from "../LookBanner";

import { class_generator } from "../../libs/class_generator";

const LookSection = memo(({ VtexFlexRowBody, VtexListContext, VtexLoadingContent, VtexErrorContent, list_look }) => {
    const [look, setLook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [successGetLook, setSuccessGetLook] = useState(false);
    const { deviceInfo: { isMobile } } = useRuntime();

    useEffect(() => {
        const url = window.location;
        const pathname = url ? url.pathname : "";
        const pathname_split = pathname.split("/");
        const params = pathname_split[pathname_split.length - 1];
        let count = 0;

        if (list_look) {
            list_look.forEach(look => {
                if(look.active && look.query === params) {
                    setLook(look);
                    setSuccessGetLook(true);
                } else {
                    count++;
                }
            });

            if(count === list_look.length) setSuccessGetLook(false);
        } else {
            setSuccessGetLook(false);
        }

        setLoading(false);
    }, []);

    if (loading) return (VtexLoadingContent ? <VtexLoadingContent/> : <div className={class_generator("vtex-search-section", "look-section--loading")}>Loading...</div>);
    if (!successGetLook) return ( VtexErrorContent ? <VtexErrorContent /> : <div className={class_generator("vtex-search-section", "look-section--error")}>Link Inválido !!!</div>);

    return (
        <VtexFlexRowBody>
            <LookBanner 
                description={look.description} 
                url={isMobile ? look.mobile_image_url : look.desktop_image_url} 
            />
            <VtexListContext collection={look.collection} />
        </VtexFlexRowBody>
    );
})

LookSection.schema = schema;

export default LookSection;