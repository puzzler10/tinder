import React from 'react'; 

const Rewind = ({addToList, userId, disabled}) => {
    var class_name = disabled ?  'action-rewind disabled' : 'action-rewind';
    return(
        <img className={class_name} src='/images/misc/rewind.png' alt='Rewind'
        onClick={() => disabled? '': addToList('REWIND', userId)}></img>
    )
}

export default Rewind; 