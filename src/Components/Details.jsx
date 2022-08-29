import React, { } from "react";
import { Link, useParams } from "react-router-dom";

import db from "../Data/Firebase";
const Details = () => {
    const { id } = useParams()
    const [details, setDetails] = React.useState()
    React.useEffect(() => {
        db.collection('shop').doc('shop').collection('phones')
            //.where('id', "==", id)
            .doc(id)
            .onSnapshot(snapshot => {
                setDetails(snapshot.data())
            })
    }, [id])

    return (
        <>
            {details ? <div className="container" >
                <div className="deatails row  m-3 bg-light border border-4">
                    <div className="left col-12 col-sm-12 col-md-5 col-lg-5">
                        <img className="img-fluid w-auto" src={details.img} alt="" />
                    </div>
                    <div className="right  col-12 col-sm-12 col-md-7 col-lg-7 mt-4 p-3">
                        <div className="h2">
                            <h1>{details.title}</h1>
                        </div>
                        <div className="h5">
                            Made By : <span className="h4">{details.company}</span>
                        </div>
                        <div className=" h4 d-sm-none d-none d-md-block">
                            info :
                            <div className="mb-2 p-1 w-100 d-sm-none d-none d-md-block">
                                <p className=" w-75 h6 ">{details.info}</p>
                            </div>
                        </div>
                        <div className="my-3">
                            <h4>Price :{details.price} $</h4>{" "}
                        </div>
                        <div>
                            <Link to="/cartroute">
                                <button

                                    // disabled={inCart ? "disabled" : ""}
                                    className="btn btn-primary mr-2"
                                >
                                    {/* {!inCart ? "Add To Cart" : "in Cart"} */}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
                :
                <div className="">Loading</div>}
        </>
    );
};

export default Details;