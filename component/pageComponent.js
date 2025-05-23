'use client'
import Loading from "@/app/loading";
import Post from "@/component/Post";

export default function PageComponent({ posts }) {
    const isLoading = false;

    const renderContent = () => {
        if (!isLoading) {
            return renderPosts()
        } else {
            return (
                <Loading/>
            )
        }
    }

    const renderPosts = () => {
        if (posts.length>0) {
            return posts.map(
                post => {
                    const {
                        location_id,
                        name,
                        address,
                        photo,
                        rating,
                        num_reviews,
                        latitude,
                        longitude
                    } = post.result_object

                    const caption = post.review_snippet ? post.review_snippet.snippet : ""
                    return (
                        <Post key={location_id} name={name} address={address} photo={photo.images.original.url}
                              caption={caption} rating={rating} reviews={num_reviews}
                              latitude={latitude} longitude={longitude}/>
                    )
                }
            )
        } else{
            return (
                <div className="alternate">
                    Nothing found, please try a different search term e.g. Europe, Australia, Tokyo
                </div>
            )
        }
    }
    console.log(isLoading)
    console.log(posts.length)
    return(
        <div className="col-9" id="feed">
            {renderContent()}
        </div>
    )
}
