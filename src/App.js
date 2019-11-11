import React, {useState} from 'react';
import Person from './components/Person';
import Actions from './components/Actions'; 
import Lonely from './components/Lonely'; 
import Header from './components/Header';
import './style.css';
import './pulse.css';
import data from './data.json'; 
 
function App() {
  const [peopleList, setPeopleList] = useState(data)
  var [likedList, setLikedList] = useState([]); 
  var [superlikedList, setSuperlikedList] = useState([]); 
  var [dislikedList, setDislikedList] = useState([]); 
  //for Rewind
  var [seenPeopleList, setSeenPeopleList] = useState([]); 

  // active person is always at index 0. To change people, 
  // we'll remove items from peopleList one by one. 
  const activePerson = 0;

  const addToList = (action, userId) => {
    switch(action){
      case 'ADD_TO_LIKED_LIST':
        setLikedList(likedList.concat(data[userId])); 
        break;
      case 'ADD_TO_DISLIKED_LIST':
        setDislikedList(dislikedList.concat(data[userId])); 
        break;
      case 'ADD_TO_SUPERLIKED_LIST':
        setSuperlikedList(superlikedList.concat(data[userId]));
        break;
      case 'REWIND':
        setPeopleList([seenPeopleList[0]].concat(peopleList));
        var lastId = seenPeopleList[0].id;
        // Remove user from liked and superliked list if they are there 
        setLikedList(likedList.filter(o=>o.id !== lastId))
        setDislikedList(dislikedList.filter(o=>o.id !== lastId)); 
        setSuperlikedList(superlikedList.filter(o=>o.id !== lastId));
        break;
      default: 
    }
    // each person seen is added to start of seenPeopleList (i.e. at index 0)
    // unless we're rewinding. If we are, we have to remove them. 
    (action === 'REWIND') ? setSeenPeopleList(seenPeopleList.slice(1)): setSeenPeopleList([peopleList[activePerson]].concat(seenPeopleList)) 
    if (action !== 'REWIND')  setPeopleList(peopleList.slice(1))
  }

  return ( 
    <div id='app'>
      <Header />
      {(peopleList.length !== 0) ? (
        <>
          <Person 
            person={peopleList[activePerson]}
          /> 
          <Actions 
            userId={peopleList[activePerson].id}
            addToList={addToList}
          /> 
        </>
      ) : (
        <Lonely 
          likedList={likedList}
          superlikedList={superlikedList}
        />
      )}
    </div>
  );
}
export default App;