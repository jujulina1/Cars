import { chooseAvatar } from "../../../utils/chooseAvatar";

export default function CommentView({
    comment,
    user
}) {


   const avatar = chooseAvatar(user.gender);
   
    return (
       
                     <div className="d-flex flex-column comment-section" style={{border: "2px solid #e8e4e3" ,borderRadius: "10px", marginBottom: "15px"}}>
                        <div className="bg-white p-2">
                            <div className="d-flex flex-row user-info"><img className="rounded-circle" src={`/${avatar}`} width="40" alt="avatar" />
                                <div className="d-flex flex-column justify-content-start ml-2"><span className="d-block font-weight-bold name">{user.username}</span><span className="date text-black-50">Shared publicly</span></div>
                            </div>
                            <div className="mt-2">
                                <p className="comment-text">{comment}</p>
                            </div>
                        </div>
                 
                    </div> 
       
    )
}
