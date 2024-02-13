import React, { useState } from 'react';
export default function TextForm(props) {
    const UpperClick = () => {
        // console.log("Upper Case was clicked!"+ text);
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UPPERCASE","success");
    }
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    const LowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success");
    }
    const ClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared","success");
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <div className='container'>
                    <h1>  {props.heading} </h1>
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"  style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
                    </div>
                    <button className="btn btn-primary mx-1" onClick={UpperClick}>CONVERT TO UPPERCASE</button>
                    <button className="btn btn-primary mx-1" onClick={LowerClick}>convert to lowercase</button>
                    <button className="btn btn-primary mx-1" onClick={ClearClick}>Clear All</button>
                </div>
                <div className="container my-3">
                    <h2>Your Text Summary</h2>
                    <p>Number of Words:{text.trim().split(/\s+/).filter(Boolean).length}</p>
                    <p>Number of Characters: {text.length}</p>
                    <h2>Preview</h2>
                    <p>{text.length>0?text:"Enter text to preview here."}</p>
                </div>

            </div>
        </>
    )
}
