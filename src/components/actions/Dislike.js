import React from 'react'; 

const Dislike = ({addToList,userId}) => {
    return(
        <img className='action-dislike' src='/images/misc/dislike.png' alt='Dislike'
        onClick={() => addToList('ADD_TO_DISLIKED_LIST', userId)}></img>
    )
}

export default Dislike; 