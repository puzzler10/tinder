import React from 'react'; 

const Header = () => {
    return(
        <header>
            <div className='fl'>
                <button>
                    <img src='images/misc/logo.png' alt='Logo'></img>
                </button>
            </div>
            <div className='fl'>
                <button>
                    <img src='images/misc/messages.png' alt='Messages'></img>
                </button>
            </div>
            <div className='fl'>
                <button>
                    <img src='images/misc/ryan.jpg' alt='User'></img>
                </button>
            </div>
        </header>
    )
}


export default Header; 