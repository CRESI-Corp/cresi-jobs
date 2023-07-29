import "./TuilleHub.css";
import cresiasso from "../../assets/cresiasso.svg";
import IMG from "../../assets/phototest.png";
import {Link} from "react-router-dom"

function Tuillecresi() {
    return(
        <div className='hub-tuille-cresi'>
            <Link to="/hub" className='link-tuille'>
                <img src={cresiasso} alt="" className="img-title"/>
                <div className="img-corps">
                    <img src={IMG} alt="" className="image-corps"/>
                </div>
            </Link>
        </div>
    );
}
export default Tuillecresi
