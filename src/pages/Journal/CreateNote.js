import {React} from 'react';
function CreateNote({textHandler, saveHandler, inputText}){
    return(
        <div className='note' style={{background: "rgba(255,255,255,0)"}}>
            <textarea cols='10' rows='5' value={inputText}  placeholder='Write....' OnChange={textHandler} maxLength='100'></textarea>
            <div className='note_footer'>
                <span className='label'>Left</span>
                <button className='note_save' onClick ={saveHandler}>Save</button>
            </div>
        </div>
    )
}

export default CreateNote;