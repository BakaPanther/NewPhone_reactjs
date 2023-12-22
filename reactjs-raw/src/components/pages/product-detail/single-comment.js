import LikeDislike from "./like-dislike";
import RatingStar from "./rating-star";
export default function SingleComment() {
    return (
        <>
            <div className="single-comment">
                <div className="#"><img src="#" alt="Tên tài khoản" /></div>
                <RatingStar />
                <div className="comment-text">
                    kjandjnakjskjnaskdj aoidfj oaijdfo aijdfpoiahgou rpasidj opaijsdsfpoij
                    sopfji apofijgpoajfpo ijapoifjdpoawijdfpo ijaopsdifj opaijfojiuoijnoand
                    poiajdfop iajwdpof iao
                </div>
                <LikeDislike />
            </div>
        </>
    )
}