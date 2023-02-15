import Cookies from "js-cookie";

const setCookies = (cookieName, user) => {
    Cookies.set(cookieName, user, {
        expires: 10,
        sameSite: 'strict',
        secure: true,
        path: '/'
    })
}
const getCookie = (cookieName) => { return Cookies.get(cookieName) }
const removeCookie = (cookieName) => { Cookies.remove(cookieName) }
export { setCookies, getCookie, removeCookie }