export const API_URL = "http://localhost:3001"

export async function api(path, options = {}) {
    const token = localStorage.getItem("token")

    const headers = {
        "Content-Type": "application/json",
        ...options.headers
    }

    if(token){
        headers["Authorization"] = "Bearer " + token
    }

    const res = await fetch(API_URL + path, {
        ...options,
        headers
    })

    return res.json()
}