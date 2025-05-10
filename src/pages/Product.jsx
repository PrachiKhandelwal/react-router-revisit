import React from "react";
import { useSearchParams } from "react-router";

const Product = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchParamsHandler = (e) => {
        const target = e.target;
        if (target.tagName === "BUTTON") {
            const paramName = target.parentNode.firstChild.innerText;
            const paramValue = target.innerText;
            setSearchParams((prev) => {
                const newParams = new URLSearchParams(prev);
                newParams.set(paramName, paramValue);
                return newParams;
            });
        }
    };
    return (
        <div onClick={searchParamsHandler}>
            <div>
                <h1>Colors</h1>
                <button>red</button>
                <button>blue</button>
                <button>green</button>
            </div>
            <div>
                <h1>Shoe Size</h1>
                <button>10</button>
                <button>11</button>
            </div>
        </div>
    );
};

export default Product;
