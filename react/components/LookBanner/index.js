import { class_generator } from "../../libs/class_generator";

export default function LookBanner({ description, url }){
    return(
        <div className={class_generator("vtex-search-section", "look-banner--container")}>
            <div className={class_generator("vtex-search-section", "look-banner--content")}>
                <img src={url}  alt="Banner Look" className={class_generator("vtex-search-section", "look-banner")} />
            </div>
            <div className={class_generator("vtex-search-section", "look-banner--container-description")}>
                <p className={class_generator("vtex-search-section", "look-banner--description")}>{description}</p>
            </div>
        </div>
    );
}