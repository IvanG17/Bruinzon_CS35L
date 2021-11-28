import { API } from "../config"

export const createProduct = (userID, token, productName) => {
    return fetch(`${API}/product/create/${userID}`, {
        method: "POST",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(productName)

    })
    .then(response => {
        return response.json();
    })
    .catch(err => {console.log(err);
    })
}
