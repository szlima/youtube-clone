
export default function Comment({comment}){
console.log(comment);
    return <>
        <div className="comment">
            <img className="comment-img" src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}/>
            <div className="comment-text">
                {comment.snippet.topLevelComment.snippet.textDisplay}
            </div>
        </div>
    </>;
};