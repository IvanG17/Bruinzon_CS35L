import { API } from "../config"


export const getProducts = (sortBy) => {
    return fetch(`${API}/items?sortBy=${sortBy}&order=desc&limit=6`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {console.log(err)});
};

export const getProductTypes = () => {
    return fetch(`${API}/products`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {console.log(err)});
}