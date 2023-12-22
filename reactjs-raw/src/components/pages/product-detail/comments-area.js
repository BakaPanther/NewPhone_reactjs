import SingleComment from "./single-comment";

export default function CommentsArea() {
    return (
        <>
            <div>
                <h3>Đánh giá</h3>
                <div className="comments-container col-8">
                    <SingleComment/>
                    <SingleComment/>
                </div>
                
            </div>
        </>
    )
}