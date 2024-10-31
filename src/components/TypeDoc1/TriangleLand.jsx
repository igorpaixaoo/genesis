
//utils
import Triangle from "../../util/triangle.png"


const TriangleLand = () =>{

    var areaTotal

    return(
        <div className="triangle-land">
            <img src={Triangle} alt="triangle" width="400px"/>

            {/* medição dos lados e área total*/}
            <input id="side1"/>
            <input id="side2"/>
            <input id="side3"/>
            <label id="total-area">{areaTotal}</label>

        </div>
    )
}

export default TriangleLand