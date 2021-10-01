import React from "react";

export const CompleteTodos = ({ todos, onClickRemoveComplete }) => {
  return (
    <div className="complete-area">
      <p className="title"> 完了のTODO </p>
      <div className="list-row">
        <ul>
          {todos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickRemoveComplete(index)}>
                  戻す
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
