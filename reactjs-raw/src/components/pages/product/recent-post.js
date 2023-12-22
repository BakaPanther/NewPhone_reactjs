import { SinglePost } from "./single-post";

export function RecentPost() {
    return (
        <>
            <div className="single-widget recent-post">
                <h3 className="title">Recent post</h3>
                <SinglePost />

                <SinglePost />

                <SinglePost />

            </div>
        </>
    )
}