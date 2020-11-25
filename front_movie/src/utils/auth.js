import decode from "jwt-decode"

export const isAuthenticated = () => Boolean(localStorage.getItem('token')) 

export const getCurrentUser = () => {
    const userToken = localStorage.getItem('token')
    if(userToken) {
        return decode(userToken)
    }
}

export const isAdmin = () => getCurrentUser().role === 'admin'