const DragComponentList = ({updateComponents}) => {
    const dragStartHandler = (e) => {
        console.log(e);
    }

    const dragStopHandler = (e) => {
        updateComponents(['input']);
    }

    const dragHandler = (e) => {
        console.log(e);
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="button-component w-50 p-3 m-1 border text-center user-select-none" draggable="true" onDragStart={dragStartHandler} onDrag={dragHandler} onDragEnd={dragStopHandler}>
                <div>Button</div>
            </div>
            <div className="input-component w-50 p-3 m-1 border text-center user-select-none" draggable="true" onDragStart={dragStartHandler} onDrag={dragHandler} onDragEnd={dragStopHandler}>
                <div>TextBox</div>
            </div>
            <div className="input-component drag-component w-50 p-3 m-1 border text-center user-select-none" draggable="true" onDragStart={dragStartHandler} onDrag={dragHandler} onDragEnd={dragStopHandler}>
                <div>Input</div>
            </div>
        </div>
    );
};

export default DragComponentList;