import db from "./Firebase"

export const dbPhones = () => {
    const dbPhones = db.collection('shop').doc('shop').collection('phones')
    return dbPhones
}
export const dbPhoneId = (id) => {
    const dbPhoneId = db.collection('shop').doc('shop').collection('phones').doc(id)
    return dbPhoneId
}

export const dbUserCart = (userEmail) => {
    const dbUserCart = db.collection(userEmail).doc(userEmail).collection('cart')
    return dbUserCart
}
export const dbUserCartId = (userEmail, id) => {
    const dbUserCartId = db.collection(userEmail).doc(userEmail).collection('cart').doc(id)
    return dbUserCartId
}

export const dbUserTotal = (userEmail) => {
    const dbUserTotal = db.collection(userEmail).doc(userEmail).collection('total')
    return dbUserTotal
}
export const dbUserTotalId = (userEmail, id) => {
    const dbUserTotalId = db.collection(userEmail).doc(userEmail).collection('total').doc(id)
    return dbUserTotalId
}

export const dbUserOrders = (userEmail) => {
    const dbUserOrders = db.collection(userEmail).doc(userEmail).collection('orders')
    return dbUserOrders
}