import React from 'react'; 

const Person = ({person}) => {
    const {age, desc, image, name} = person; 
    return(
        <>  
            <img className='person-image' src={`/images/users/${image}`} 
                alt='Person you are looking to date'></img>
            <p className='person-name-age'>{name}, <span>{age}</span></p>
            <p className='person-desc'>{desc}</p>
        </>
    )
}

export default Person; 
