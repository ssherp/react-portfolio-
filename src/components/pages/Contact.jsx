import{useState} from "react";
function Contacts(){
    const [input,setInput]=useState({
        name:"",
        email:"",
        message:"",
    })
    function handleFormSubmit(e){
        //send an email to me
        //clear form
        e.preventDefault();
    }
    function handleInputChange(){
        
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="name-input">name</label>
            <input type="text" id="name-input" placeholder="Your Name...." onChange={handleInputChange}></input>
        </form>
    )
}
export default Contacts