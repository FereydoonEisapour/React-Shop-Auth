import db from "./Firebase"


export const dbPhones = () => {
    const dbPhones = db.collection('shop').doc('shop').collection('phones')
    return dbPhones
}
export const dbPhoneId = (id) => {
    const dbPhoneId = db.collection('shop').doc('shop').collection('phones').doc(id)
    return dbPhoneId
}

export const dbUserCart = (user) => {
    const dbUserCart = db.collection(user.email).doc(user.email).collection('cart')
    return dbUserCart
}

export const dbUserCartId = (user, id) => {
    const dbUserCartId = db.collection(user.email).doc(user.email).collection('cart').doc(id)
    return dbUserCartId
}
