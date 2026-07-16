import { useRef } from "react";

function UseRef() {

    const inputRef = useRef(null);

    function handleFocus() {
        inputRef.current.focus();
    }

    return (
        <>
            <input ref={inputRef} />
            <button onClick={handleFocus}>
                Focus Input
            </button>
        </>
    );
}

export default UseRef;