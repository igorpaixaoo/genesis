
//utils
import Quadrado from "../../util/quadrado.png"

//disabilitar quando preencher tudo


const QuadradoLand = () =>{

    var areaTotal

    return(
        <div className="quadrado-land">
            <img src={Quadrado} width="400px"></img>

            {/* medição dos lados e área total*/}
            <input id="side1"/>
            <input id="side2"/>
            <input id="side3"/>
            <input id="side4"/>
            <label id="total-area">{areaTotal}</label>

        </div>
    )
}

export default QuadradoLand