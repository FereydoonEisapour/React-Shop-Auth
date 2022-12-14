import React, { } from "react";
import { Link, useParams } from "react-router-dom";

import { AddButton } from "../Components";
import ImgSkeleton from "../Components/ImgSkeleton";
import { dbPhoneId } from "../Data/data";
const Details = () => {
    const { id } = useParams()
    const [details, setDetails] = React.useState()
    React.useEffect(() => {
        dbPhoneId(id).onSnapshot(snapshot => {
            setDetails(snapshot.data())
        })
    }, [id])

    return (
        <>
            {details ?
                <div className="container">
                    <div className="row m-3  bg-white rounded-3">
                        <div className=" col-12 col-sm-11 col-md-5 col-lg-5 p-4 ">
                            <ImgSkeleton img={details.img} />
                        </div>
                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 mt-4 p-3">
                            <div className="">
                                <h3>{details.title}</h3>
                            </div>
                            <div className=" d-none d-md-block">
                                Made By : <span className="h4">{details.company}</span>
                            </div>
                            <div className=" d-sm-none d-none d-md-block">
                                info :
                                <div className="mb-2 p-1 w-100 d-sm-none d-none d-md-block">
                                    <p className=" w-75 h6 ">{details.info}</p>
                                </div>
                            </div>
                            <div className="my-3">
                                <h4>Price :{details.price} $</h4>{" "}
                            </div>
                            <div className="">
                                <AddButton
                                    title={details.title}
                                    price={details.price}
                                    img={details.img}
                                />
                            </div>
                        </div>
                    </div>
                </div >
                :
                <div className="container d-flex text-center justify-content-around ">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
        </>
    );
};

export default Details;