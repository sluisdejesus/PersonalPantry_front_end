const baseURL = 'http://localhost:8080/recipes';

const RecipeServices = {
    getRecipeData() {
        return fetch(baseURL)
        .then(res => res.json());
    },

    // addCarbonData(data) {
    //     return fetch(baseURL, {
    //         method:'POST',
    //         body: JSON.stringify(data),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then(res => res.json());

    // },

    // updateCarbonData(data){
    //     return fetch(baseURL + data._id, {
    //         method: 'PUT',
    //         body: JSON.stringify(data),
    //         headers:{
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then(res => res.json());

    // },

    // deleteCarbonData(id){
    //     return fetch(baseURL + id, {
    //         method: 'DELETE'
    //     })

    // }
    
}

export default RecipeServices;