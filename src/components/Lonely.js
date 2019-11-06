import React from 'react'; 
import LikedPerson from './LikedPerson';

const Lonely = ({likedList, superlikedList}) => {
    console.log(likedList)
    const likedImages = likedList.map(o => o.image); 

    return (
        <div id='lonely'>
            <p> Nobody new around you.</p>
            <span className='pulse'>
                <img src='/images/misc/user.png' alt='Pulsing Avatar'/>
            </span>

            
            <p>People you liked. Let's hope they like you back!</p> 
            <div id='lonely-liked-people'> 
                {
                    likedList.map(o => (
                            <LikedPerson 
                            key={o.id}
                            person={o} />
                    ))
                }
            </div>
            <div id='lonely-superliked-people'>
                <p>People you superliked!</p> 
                <div id='lonely-superliked-people'> 
                {
                    superlikedList.map(o => (
                            <LikedPerson 
                            key={o.id}
                            person={o} />
                    ))
                }
                </div>
           </div>
        </div>
    )
}

export default Lonely;