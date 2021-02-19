import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEdition] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: true,
    message: 'hellow world',
    type: 'success'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      //display alert
    } else if (name && isEditing) {
      //deal with edit
    } else {
      //show alert
      //create new item
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  };

  return (
    <section className="section-center">
      <form className="grocery-form" action="submit" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} />}
        <h3>Grocery list</h3>
        <div className="form-control">
          <input
            type="text"
            className="grecery"
            placeholder="e.g: Cake"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} />

          <button className="clear-btn">Clear items</button>
        </div>
      )}
    </section>
  );
}

export default App;
