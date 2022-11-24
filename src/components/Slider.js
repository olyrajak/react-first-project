import ReactSlider from "react-slider";
import './Style.css'
    const Slider = () => {
      return (
        <>
        <div className="animation">
        <p style={{ "--i": 5 }}>S</p>
        <p style={{ "--i": 4 }}>T</p>
        <p style={{ "--i": 3 }}>A</p>
        <p style={{ "--i": 2 }}>R</p>
        <p style={{ "--i": 1 }}>T</p> 
        <p style={{ "--i": 1 }}>-</p> 
        <p style={{ "--i": 5 }}>R</p>
        <p style={{ "--i": 4 }}>E</p>
        <p style={{ "--i": 3 }}>A</p>
        <p style={{ "--i": 2 }}>C</p>
        <p style={{ "--i": 1 }}>T</p>
      </div>
        <ReactSlider
         className="customSlider"
         trackClassName="customSlider-track"
        />
        </>
      );
    };
    
    export default Slider;