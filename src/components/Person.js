import React from 'react'; 

const Person = ({person}) => {
    const {age, desc, image, name, quote} = person; 
    return(
        <div className='person'>  
            <img className='person-image' src={`/images/users/${image}`} 
                alt='Person you are looking to date'></img>
            <div className='person-text'>    
                <p className='person-name-age'>{name}, <span>{age}</span></p>
                <p className='person-desc'>{desc}</p>
                <p className="person-quote">{quote}</p>
            </div>
        </div >
    )
}

export default Person; 
