import React from 'react';

import FaEdit from './FaEdit';
import FaTrash from './FaTrsh';

function List({ items, removeItem, editItem }) {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className="grocery-item">
            <p className="title">{title}</p>
            <button type="button" className="edit-btn" onClick={() => editItem(id)}>
              <FaEdit />
            </button>

            <button type="button" className="delete-btn" onClick={()=> removeItem(id)}>
              <FaTrash />
            </button>
          </article>
        );
      })}
    </div>
  );
}

export default List;
