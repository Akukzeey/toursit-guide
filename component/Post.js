'use client'
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

function Post({name, address, photo, caption, rating, reviews, latitude, longitude}) {

    const renderRating = () => {
        return [1, 2, 3, 4, 5].map(
            loop => {
                if (parseInt(rating) <= loop) {
                    return <FontAwesomeIcon icon={faStar} className="star-yellow" key={loop}/>
                } else return <FontAwesomeIcon icon={faStar} className="star-grey" key={loop}/>
            }
        ).reverse()
    }

    const directionsUrl = `https://maps.google.com/maps?q=${latitude},${longitude}`

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p>{address}</p>
                <div className="image-container">
                    <Image src={photo} alt={caption} placeholder="blur" blurDataURL={photo} fill />
                </div>
                <p className="card-text">
                    {caption}
                    <br/>
                    {renderRating()} ({reviews} reviews)
                    <br/>
                    <a href={directionsUrl} target="_blank" rel="noreferrer"> Get directions </a>
                </p>
            </div>
        </div>
    )
}

export default Post