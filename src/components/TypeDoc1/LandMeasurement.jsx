
import { useState } from "react";

//utils
import Quadrado from "../../util/quadrado.png"

//components
import TriangleLand from "../TypeDoc1/TriangleLand"
import QuadradoLand from "./QuadradoLand";

//componente para saber as medidas do terreno
const LandMeasurement = () =>{

    const [typeLand, setTypeLand] = useState(0)

    const btnClick = () =>{
        if(typeLand == 1) alert("3 lados")
        if(typeLand == 2) alert("4 lados")
    }

    return(
        <div className="land-measurement">
            <label>Formato do terreno:</label>
            <select id="select-type-land" value={typeLand} onChange={e => setTypeLand(e.target.value)}>
                <option>Selecione:</option>
                <option value={1}>3 lados (triângulo)</option>
                <option value={2}>4 lados (retangulo/quadrado)</option>
            </select>

            {typeLand == 1 &&(
                <div>
                    <TriangleLand></TriangleLand>
                </div>
            )}
            {typeLand == 2 &&(
                <div>
                    <QuadradoLand></QuadradoLand>
                </div>
            )}
        </div>
    )
}

export default LandMeasurement;