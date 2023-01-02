import React from 'react'
import ProductItem from '../Components/ProductItem'
import Sidebar from '../Components/Sidebar'
import db from '../Data/Firebase'

const Products = () => {
    const [phones, setPhones] = React.useState([])

    React.useEffect(() => {
        db.collection("shop").doc("shop").collection('phones').onSnapshot((snapshot) => {
            setPhones(snapshot.docs.map((doc) => ({
                id: doc.id,
                img: doc.data().img,
                price: doc.data().price,
                count: doc.data().count,
                title: doc.data().title,
            })))
        })
    }, [])
    return (
        <div className='col-12'>
            {/* <Sidebar
                className="col-4 d-block d-md-none"
                placement="bottom"
                name="search" /> */}
            <div className="d-flex row  justify-content-center ">
                {phones ? phones.map(item =>
                    <ProductItem
                        key={item.id}
                        id={item.id}
                        img={item.img}
                        title={item.title}
                        price={item.price}
                    />
                ) : "LOGDING"}

            </div>
        </div>
    )
}

export default Products