const baseURL = 'http://localhost:8080/';

const PersonalPantryServices = {
    
    getRecipes() {
        return fetch(baseURL + "recipes")
        .then(res => res.json());
    },

    getIngredients() {
        return fetch(baseURL + "ingredients")
        .then(res => res.json());
    },

    getShoppingLists() {
        return fetch(baseURL + "shoppingLists/1")
        .then(res => res.json());
    }

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

export default PersonalPantryServices;