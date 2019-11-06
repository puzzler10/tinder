import React from 'react'; 

const LikedPerson = ({person}) => {
    return (
        <>
            <img className='liked-person-image' src={`/images/users/${person.image}`} 
            alt={`You liked ${person.name}.`}></img>
        </>
    )
}

export default LikedPerson; 