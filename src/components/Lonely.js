import React from 'react'; 
import LikedPerson from './LikedPerson';

const Lonely = ({likedList, superlikedList}) => {
    console.log(likedList)
    return (
        <div id='lonely'>
            <p> There's nobody new around you. Check back later!</p>
            <span className='pulse'>
                <img src='/images/misc/ryan.jpg' alt='Pulsing Avatar'/>
            </span>
            {(likedList.length !== 0) ? (
                <>
                    <h4>Your likes</h4>
                    <p className="subtitle">Let's hope they like you back!</p> 
                    <section id='lonely-liked-people'> 
                        {
                            likedList.map(o => (
                                    <LikedPerson 
                                    key={o.id}
                                    person={o} />
                            ))
                        }
                    </section>
                </>
            ) : (
                <>
                   <h4>Your likes</h4>
                   <p class='subtitle'> You didn't like anyone. </p>
                </>
            )}
            {(superlikedList.length !== 0) ? (
                <>
                    <h4>Your superlikes</h4>
                    <p className="subtitle">Those closest to your heart</p>
                    <section id='lonely-superliked-people'> 
                    {
                        superlikedList.map(o => (
                                <LikedPerson 
                                key={o.id}
                                person={o} />
                        ))
                    }
                    </section>
                </>
            ): (
            <>
                <h4>Your superlikes</h4>
                <p class='subtitle'> You didn't superlike anyone. </p>
            </>
            )}
        </div>
    )
}

export default Lonely;