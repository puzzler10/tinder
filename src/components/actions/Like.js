import React from 'react'; 

const Like = ({addToList,userId}) => {
    return(
        <img className='action-like' src='/images/misc/like.png' alt='Like'
        onClick={() => addToList('ADD_TO_LIKED_LIST', userId)}></img>
    )
}

export default Like; 