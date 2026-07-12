import { useRef } from "react";

function Login(){

const inputRef=useRef();

function handleSubmit(){

console.log(inputRef.current.value);

}

return(

<>

<input ref={inputRef}/>

<button

onClick={handleSubmit}

>

Submit

</button>

</>

);

}
export default Login;