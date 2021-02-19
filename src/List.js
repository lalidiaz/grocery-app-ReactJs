import React from 'react';
import { GrEdit } from 'react-icons/gr';
import { RiDeleteBin6Line } from 'react-icons/ri';

const List = ({ items }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className="grocery-item">
            <p className="title">{title}</p>
            <div className="btn-container">
              <button type="button" className="edit-btn">
                <GrEdit />
              </button>
              <button type="button" className="delete-btn">
                <RiDeleteBin6Line />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
