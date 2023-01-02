import React from 'react'
import db from '../Data/Firebase';
import firebase from "firebase/compat/app";
import { dbPhones } from '../Data/data';
const Add = () => {
    const user = { email: 'epferydoon@gmail.com' }
    const add = () => {
        dbPhones().add({
            company: "Samsung",
            count: 10,
            img: "https://firebasestorage.googleapis.com/v0/b/react-shop-ed8dd.appspot.com/o/phones%2Fproduct-14.webp?alt=media&token=0f7fc26f-29c1-42f3-9cf1-27ce52107756e",
            info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan .",
            price: 990,
            title: "Samsung Galaxy Z Flip4",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
    };

    return (
        <>

            <div className="container col-12 row p-5 ">
                img: <input className="col-4" type="text" name="" id="" />
                title: <input className="col-4" type="text" name="" id="" />
                info: <input className="col-4" type="text" name="" id="" />
                price: <input className="col-4" type="number" name="" id="" />
                count: <input className="col-4" type="number" name="" id="" />


            </div>
            <button className='btn btn-primary ' onClick={add}>Add</button>
        </>
    )
}

export default Add