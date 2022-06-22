import './popup.css'

const Popup = (props) =>{
    function onSubmit(e){
        e.preventDefault();
        // console.log(e.target[0].value);
        // console.log(e.target[1].value);
        // console.log(e.target[3].checked);
        // console.log(e.target[3].value === 'on' ? true : false);
        let book = {
            name: e.target[0].value,
            author: e.target[1].value,
            pages: e.target[2].value,
            bookRead: e.target[3].checked
        }
        props.addBook(book);
        props.setTrigger(false);
    }
    return(props.trigger) ? (
        <div className="popup"  onClick={(e)=>{
            //console.log(e.target.className)
            if(e.target.className === 'popup'){
                props.setTrigger(false);
            }
          }} >
            <div className="popup-inner">
                <form onSubmit={(e)=>onSubmit(e)}>
                    <h3>Add a Book</h3>
                    <input className='formElements' type='text' id='bookTitle' placeholder='Title' required/>
                    <input className='formElements' type='text' id='bookAuthor' placeholder='Author' required/>
                    <input className='formElements' type='number' id='bookPages' placeholder='Pages' required/>
                    <div className='readBookDiv'>
                        <label htmlFor='bookRead'>Have you read it?</label>
                        <input type='checkbox' id='bookRead'/>
                    </div>
                    <button className='submitBook'  type='Submit'>Submit</button>
                </form>
            </div>
        </div>
    ): "";
}

export default Popup;