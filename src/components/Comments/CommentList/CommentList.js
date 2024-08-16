import './CommentList.css'

import CommentView from '../CommentView/CommentView'
import AddComment from '../AddComment/AddComment'


export default function CommentList({
    carId,
    isOwner,
    comments,
    users
}) {

 const findUser = (commetUserID) => {
    return users.filter(x => x._id === commetUserID).shift();
}

    return (
        <>


            <div className="container mt-5">
                <div className="d-flex justify-content-center row">
                    <div className="col-md-8">
                        <div className="d-flex flex-column comment-section">
                            {
                                !isOwner &&
                                <div className="addcomment">
                                    <AddComment carId={carId} />
                                </div>
                            }

                            {comments.map(x => <CommentView key={x._id} {...x} user={findUser(x.userId)}/>)}
                           

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}