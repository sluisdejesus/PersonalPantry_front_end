import React from 'react'
import RecipeForm from '../components/RecipeForm'
import "./CreateRecipeContainer.css";

const CreateRecipeContainer = ({returnHome}) => {

    const handleClick = () => {
        returnHome()
    }

    return (
        <>
        <button onClick={handleClick}>Home</button>
        <RecipeForm/>
        </>
    )

}

export default CreateRecipeContainer;