// Used to explore events of various sorts.

import React from "react";

const EventComponent: React.FC = () =>{
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    };

    const onDragStart = (event: React.DragEvent<HTMLDivElement>) =>{
        console.log("Drag started ("+event.screenX + ","+event.screenY +")");
    }

    return (<div>
        <input onChange={onChange} />
        <div draggable onDragStart={onDragStart} >Drag Me!</div>
    </div>);
};

export default EventComponent;
