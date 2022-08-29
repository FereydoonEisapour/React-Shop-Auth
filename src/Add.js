import React from 'react'
import db from './Data/Firebase';
import firebase from "firebase/compat/app";
const Add = () => {
    const user = { email: 'epferydoon@gmail.com' }
    const add = () => {
        db.collection('shop').doc('shop').collection('phones')

            .add({
                company: "APPLE",
                count: 10,
                img: "https://firebasestorage.googleapis.com/v0/b/react-shop-ed8dd.appspot.com/o/phones%2Fproduct-10.jpg?alt=media&token=0931e82a-c999-47b8-b744-aaf7ccdf7966",
                info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan .",
                price: 69,
                title: "iphone-12 mini red",
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
    };

    return (
        <>

            <div className="container col-12 row p-5">
                img: <input className="col-4" type="text" name="" id="" />
                title: <input className="col-4" type="text" name="" id="" />
                info: <input className="col-4" type="text" name="" id="" />
                price: <input className="col-4" type="number" name="" id="" />
                count: <input className="col-4" type="number" name="" id="" />


            </div>
            {/* <button className='btn btn-primary ' onClick={add}>Add</button> */}
        </>
    )
}

export default Add