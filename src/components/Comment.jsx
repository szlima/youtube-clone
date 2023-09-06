import {useState, useEffect} from 'react';

import {
    getInfoDate, getChannelData
} from '../utils/functions';

export default function Comment({comment}){
    const [channelData, setChannelData]= useState(null);

    useEffect(() => {
        getChannelData(comment.snippet.topLevelComment.snippet.authorChannelId.value)
            .then(res => setChannelData(res))
            .catch(err => console.error(err));
    }, []);

    return <>
        <div className="comment">
            <a href={comment.snippet.topLevelComment.snippet.authorChannelUrl}>
                <img className="comment-img" src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}/>
            </a>
            <div className="comment-data">
                <div className="comment-data-info">
                    <span className="comment-data-info-author">{channelData?.snippet.customUrl}</span>
                    <span className="comment-data-info-date">{getInfoDate(comment.snippet.topLevelComment.snippet.publishedAt)}</span>
                </div>
                <span className="comment-data-text">
                    {comment.snippet.topLevelComment.snippet.textDisplay}
                </span>
                <div className="comment-data-actions">
                    <span className="comment-data-actions-likes">
                        <ion-icon name="thumbs-up-outline"></ion-icon>
                        <span className="comment-data-actions-likes-total">{comment.snippet.topLevelComment.snippet.likeCount}</span>
                    </span>
                    <ion-icon name="thumbs-down-outline"></ion-icon>
                    <button className="comment-data-actions-reply">Responder</button>
                </div>
                {(() => {
                    const comments= comment?.snippet.totalReplyCount;

                    return comments > 0 ?
                        <div className="comment-data-replies">
                            <ion-icon name="caret-down-outline"></ion-icon>
                            <span>{comments} resposta{comments>1 ? 's' : ''}</span>
                        </div>
                        : '';
                })()}
            </div>
        </div>
    </>;
};