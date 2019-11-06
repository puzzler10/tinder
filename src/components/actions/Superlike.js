import React from 'react'; 

const Superlike = ({addToList,userId}) => {
    return(
        <img className='action-superlike' src='/images/misc/superlike.png' alt='Superlike'
        onClick={() => addToList('ADD_TO_SUPERLIKED_LIST', userId)}></img>
    )
}
export default Superlike; 