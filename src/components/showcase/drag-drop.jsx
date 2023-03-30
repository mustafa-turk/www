import { useState } from "react";

const DragDrop = () => {
  const [state, setState] = useState(INITIAL_STATE);

  const onDragStart = (event, id) => event.dataTransfer.setData("id", id);

  const onDragOver = (event) => event.preventDefault();

  const onDrop = (event, status) => {
    const id = event.dataTransfer.getData("id");

    const newState = state.filter((element) => {
      if (element.id == id) {
        element.status = status;
      }
      return element;
    });

    setState(newState);
  };

  const activeElements = state.filter((element) => element.status === "active");
  const inactiveElements = state.filter(
    (element) => element.status === "inactive"
  );

  return (
    <div className='p-4 flex gap-4 h-96 justify-center'>
      <div
        onDragOver={onDragOver}
        onDrop={(event) => onDrop(event, "active")}
        className='bg-neutral-900 border border-neutral-800 flex-1 rounded-xl max-w-lg'
      >
        {activeElements.map((element) => (
          <DraggableElement
            key={element.id}
            onStart={(event) => onDragStart(event, element.id)}
          >
            {element.id}
          </DraggableElement>
        ))}
      </div>
      <div
        onDragOver={onDragOver}
        onDrop={(event) => onDrop(event, "inactive")}
        className='bg-neutral-900 border border-neutral-800 flex-1 rounded-xl max-w-lg'
      >
        {inactiveElements.map((element) => (
          <DraggableElement
            key={element.id}
            onStart={(event) => onDragStart(event, element.id)}
          />
        ))}
      </div>
    </div>
  );
};

const DraggableElement = ({ onStart }) => (
  <div
    onDragStart={onStart}
    draggable
    className='bg-neutral-700 border border-neutral-600 h-16 m-4 rounded-lg active:bg-blue-600 active:border-blue-500 translate-x-0'
  />
);

export default DragDrop;

const INITIAL_STATE = [
  { id: 1, status: "active" },
  { id: 2, status: "active" },
  { id: 3, status: "active" },
];
