import React  from "react";

export default function AboutUs(props) {
  // const [myStyle,setMyStyle]=useState(
  // {
  //     color:'black',
  //     backgroundColor:'white'
  // })
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#100326" : "white",
    border: "1px",
    borderRadius: "5px",
    borderColor: props.mode === "dark" ? "white" : "black",
    boxShadow: '0'
  };

  return (
    <div
      className="container"
      style={{
        color: props.mode === "dark" ? "white" : "black",
        backgroundColor: props.mode === "dark" ? "#100336" : "white",
      }}
    >
      <h2 className="my-3 mb-3">About Us</h2>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
                 <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
             This utility allows you to edit , copy , and format your text.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
                 <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              We don't charge any money . All features are free to use and alsolutely easy to get used to.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
               <strong>  Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              All web browsers support this web utility and you can use it anywhere on any device.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
