import React, { } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { AddButton, Loading, ImgSkeleton } from "../Components";
import { dbPhoneId } from "../Data/data";
const Details = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const [details, setDetails] = React.useState()

    React.useEffect(() => {
        dbPhoneId(id).onSnapshot(snapshot => {
            setDetails(snapshot.data())
            if (snapshot.data() === undefined) navigate('*')
        })
    }, [id, navigate])

    return (
        <>
            {details ?
                <div className="container cart-background text-color rounded-5">
                    <div className="row m-3   rounded-3">
                        <div className=" col-12 col-sm-11 col-md-5 col-lg-5 p-4 ">
                            <ImgSkeleton img={details.img} />
                        </div>
                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 mt-4 p-3">
                            <div className="">
                                <h4>{details.title}</h4>
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
                                <h5>Price :{details.price} $</h5>{" "}
                            </div>
                            <div className="text-center">
                                <AddButton
                                    title={details.title}
                                    price={details.price}
                                    img={details.img}
                                    url={id}
                                />
                            </div>
                        </div>
                    </div>
                </div >
                :
                <div className="container d-flex text-center justify-content-around ">
                    <Loading />
                </div>
            }
        </>
    );
};

export default Details;