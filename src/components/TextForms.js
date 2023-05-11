import React, { useState } from "react";

export default function TextForms(props) {
    const handleUpClick = () => {
        console.log("Uppercase was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Changed to uppercase','success');
    };

    const handleLoClick = () => {
        console.log("LowerCase was Clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Changed to lowercase','success');
    };

    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    };


    const handleClear = () => {
        let newText=' ';
        setText(newText);
        props.showAlert("cleared","success");
    };


    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('copied','success');
    };


    const handleSpaces = () => {
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Extra spaces cleared','success');
    };


    const [text, setText] = useState("");
    // text={newText};
    // setText=("new text");
    return (
        <div>
            <div >
                <h1 className='mb-3 mx-4 my-4' style={{ color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
                <div className="mb-3 mx-4 my-4">
                    <textarea
                        className="form-control"
                        style={{backgroundColor: props.mode==='light'? 'white':'#100322',
                                color: props.mode==='dark'?'white':'black' }}
                        id="myBox"
                        rows="8"
                        value={text}
                        onChange={handleOnChange}
                    ></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick} >
                    Convert To UpperCase
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
                    Convert To LowerCase
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container">
                <h2  style={{ color: props.mode === 'dark'?'white':'black'}}>Your Text Summary</h2>
                <p  style={{ color: props.mode === 'dark'?'white':'black'}}>
                    {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
                </p>
                <h2  style={{ color: props.mode==='dark'?'white':'black'}}>Time to read</h2>
                <p  style={{ color: props.mode==='dark'?'white':'black'}}>
                    {0.08 * (text.split(" ").filter((element)=>{return element.length!==0}).length)} minutes for slow readers{" "}
                    {0.016 * (text.split(" ").filter((element)=>{return element.length!==0}).length)} minutes for fast readers
                </p>
                <h2  style={{ color: props.mode==='dark'?'white':'black'}}>Preview</h2>
                <p  style={{ color: props.mode==='dark'?'white':'black'}}>{text.length>0?text :'Nothing to preview!'}</p>
            </div>
        </div>
    );
}
