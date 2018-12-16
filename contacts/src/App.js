import React, { Component } from 'react';
import ContactList from './util/ContactList'
const contacts = [
 {
   "id": "karen",
   "name": "Karen Isgrigg",
   "handle": "karen_isgrigg",
   "avatarURL": "http://localhost:8080/examples/icn.png"
 },
 {
  "id": "richard",
  "name": "Richard Kalehoff",
  "handle": "richardkalehoff",
  "avatarURL": "http://localhost:8080/examples/download.jpg"
},
{
  "id": "tyler",
  "name": "Tyler McGinnis",
  "handle": "tylermcginnis",
  "avatarURL": "http://localhost:8080/examples/peng.png"
}
 
];

class App extends Component {
  render() {
    return (<div>
        <ContactList contList={contacts}/>
      </div>
    );
  }
}

export default App;
