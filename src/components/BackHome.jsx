
import { Link } from "react-router-dom/cjs/react-router-dom.min"


import Logo2 from "../util/logo2.png"

const BackHome = () =>{

    return(
        <div className="back-home">
            <Link to="/"><img src={Logo2} width="70px"></img></Link>
        </div>
    )
}

export default BackHome