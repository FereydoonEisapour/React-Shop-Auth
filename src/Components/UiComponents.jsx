import React from "react";
import "./../Assets/Styles/Button.css";
import { useParams } from "react-router-dom";
import { PhoneSVG, CartSVG } from "./../Assets/Images/svg";
import { useAuthState } from "../Contexts/AuthContext";
import { dbUserCart, dbUserTotal, dbUserTotalId } from "../Data/data";



const ImgSkeleton = ({ img, title, style }) => {
    const [imgSrc, setImgSrc] = React.useState();
    React.useEffect(() => {
        const imgaeLoad = new Image();
        imgaeLoad.src = img;
        imgaeLoad.onload = () => {
            setImgSrc(img);
        };
    }, [img]);
    return (
        <>
            {imgSrc ? (
                <img className={`card-img-top p-2 `} src={imgSrc} alt={title} />
            ) : (
                <div className={`${style} skeleton`}></div>
            )}
        </>
    );
};
const AddButton = ({ title, price, img, url }) => {
    const [clicked, setClicked] = React.useState("");
    const [added, setAdded] = React.useState("");
    const [disabled, setDisabled] = React.useState(Boolean);
    const { id } = useParams();
    const { userEmail } = useAuthState();
    const [totalPrice, setTotalPrice] = React.useState("")
    const [totalPriceId, setTotalPriceId] = React.useState("")
    const buttonClick = () => {
        if (userEmail) {
            dbUserCart(userEmail).add({ id: id, title, price, img, count: 1, url: url });
            dbUserTotalId(userEmail, totalPriceId).update({ total: totalPrice + price }, { merge: true })
        }
        setDisabled(true);
        setClicked("clicked");
    };
    React.useEffect(() => {
        if (userEmail) {
            dbUserCart(userEmail)
                .where("id", "==", id)
                .onSnapshot((snapshot) => {
                    if (typeof snapshot.docs[0] === "undefined") {
                        setAdded("");
                    }
                    if (typeof snapshot.docs[0] !== "undefined") {
                        if (id === snapshot.docs[0].data().id) {
                            setAdded("inCart");
                            setDisabled(true);
                        }
                    }
                });
        }
    }, [id, userEmail]);

    React.useEffect(() => {
        if (userEmail) {
            dbUserTotal(userEmail).onSnapshot(snapshot => {
                 setTotalPrice(snapshot.docs[0].data().total)
                 setTotalPriceId(snapshot.docs[0].id)
            })
        }
    })
    return (
        <>
            {userEmail ? (
                <button
                    className={`cart-button  ${clicked} ${added}`}
                    onClick={buttonClick}
                    disabled={disabled}
                >
                    <span className="add-to-cart ">Add to cart</span>
                    <span className="added">in Cart</span>
                    <img src={CartSVG} className="shopping-cart" alt="cart" />
                    <img src={PhoneSVG} className="box" alt="phone" />
                </button>
            ) : (
                <></>
            )}
        </>
    );
};
const EmptyCart = () => {
    return (
        <div className='text-color'>EmptyCart</div>
    )
}
const Loading = () => {
    return (
        <div className="d-flex justify-content-center align-items-center align-content-center">
            <div className="loader loader--style2" title="1">
                <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    className="red" width="40px" height="40px" viewBox="0 0 50 50" xmlSpace="preserve">
                    <path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
                        <animateTransform attributeType="xml"
                            attributeName="transform"
                            type="rotate"
                            from="0 25 25"
                            to="360 25 25"
                            dur="0.6s"

                            repeatCount="indefinite" />
                    </path>
                </svg>
            </div>
        </div>
    )
}


export { EmptyCart, Loading, AddButton, ImgSkeleton }