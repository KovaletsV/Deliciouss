import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Recipe = () => {
    const params = useParams();
    const [detailes, setDetailes] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");

    const fetchDetails = async () => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
        );
        const detailData = await data.json();
        setDetailes(detailData);
    };

    useEffect(() => {
        fetchDetails();
    }, [params.name]);

    return (
        <DetailWrapeer>
            <div>
                <h2>{detailes.title}</h2>
                <img src={detailes.image} alt="" />
            </div>
            <Info>
                <Button
                    className={activeTab === "instructions" ? "active" : ""}
                    onClick={() => setActiveTab("instructions")}
                >
                    Instrucions
                </Button>
                <Button
                    className={activeTab === "ingredients" ? "active" : ""}
                    onClick={() => setActiveTab("ingredients")}
                >
                    Ingredients
                </Button>
                {activeTab === "instructions" && (
                    <div>
                        <h3
                            dangerouslySetInnerHTML={{
                                __html: detailes.summary
                            }}
                        ></h3>
                        <h3
                            dangerouslySetInnerHTML={{
                                __html: detailes.instructions
                            }}
                        ></h3>
                    </div>
                )}
                {activeTab === "ingredients" && (
                    <ul>
                        {detailes.extendedIngredients.map(ingredient => (
                            <li key={ingredient.id}>{ingredient.original}</li>
                        ))}
                    </ul>
                )}
            </Info>
        </DetailWrapeer>
    );
};

const DetailWrapeer = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    h2 {
        margin-bottom: 2rem;
        line-height: 2.5rem;
    }
    ul {
        margin-top: 2rem;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: #fff;
    border: 2px solid #000;
    margin-right: 2rem;
    font-weight: 600;
`;

const Info = styled.div`
    margin-left: 10rem;
`;
export default Recipe;
