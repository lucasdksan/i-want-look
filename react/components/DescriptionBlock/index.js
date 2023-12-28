export default function DescriptionBlock({ productList, description }) {
    return (
        <>
            <div>
                <img src={productList[0]?.skus[0].image} alt="Banner Principal para Descrição" />
                <button>Compre o kit</button>
            </div>
            <div>
                <h2>Descrição</h2>
                <p>{description}</p>
            </div>
        </>
    );
}