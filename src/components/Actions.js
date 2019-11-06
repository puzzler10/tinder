import React from 'react'; 
import Dislike from './actions/Dislike';
import Like from './actions/Like';
import Superlike from './actions/Superlike';
import Rewind from './actions/Rewind';
const Actions = ({addToList,userId}) => {
    var disabled = (userId === 0)
    return (
     <div className='action-buttons'> 
        <Rewind addToList={addToList} userId={userId} disabled={disabled}/>
        <Dislike addToList={addToList} userId={userId} />
        <Like addToList={addToList} userId={userId} />
        <Superlike addToList={addToList} userId={userId} />
     </div>
    )
}
export default Actions; 
