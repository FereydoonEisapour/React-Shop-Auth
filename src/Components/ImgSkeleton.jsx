import React from 'react'

const ImgSkeleton = ({ img ,title }) => {
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
            {imgSrc ?
                <img className=" card-img-top p-2 " src={imgSrc} alt={title} />
                :
                <div className="card-img card-img-top  skeleton"></div>
            }
        </>
    )
}

export default ImgSkeleton