import React, { } from 'react'
import { ProductItem, Sidebar } from '../Components'
import { dbPhones } from '../Data/data'

const Products = () => {
    const [phones, setPhones] = React.useState([])

    React.useEffect(() => {
        dbPhones().onSnapshot((snapshot) => {
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
            <div className="d-flex row  justify-content-center col-12  ">

                {phones ? phones.map(item =>
                    <ProductItem
                        key={item.id}
                        id={item.id}
                        img={item.img}
                        title={item.title}
                        price={item.price}
                        
                    />
                ) :
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                }

            </div>
        </div>
    )
}

export default Products