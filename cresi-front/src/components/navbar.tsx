import { Link } from "react-router-dom"

import '../styles/navbar.css'

import ico_head from '../assets/ico_head.png';
import ico_myaccount from '../assets/ico_myaccount.png';
import ico_candidature from '../assets/ico-candidature.png';
import ico_offers from '../assets/ico-offers.png';
import ico_asso from '../assets/ico-asso.png';
import ico_notif from '../assets/ico-notif.png';
import ico_contact from '../assets/ico-contact.png';


function navbar() {
    return (
        <nav className="navbar">

            <div className="head">
                <Link to="" className="">
                    {/*<div>head déco account</div>*/}
                    <img src={ico_head} alt="ico_head" className="ico_head"/>
                </Link>
            </div>

            <div className="middle">
                <Link to="" className="">
                    {/*<div>My account</div>*/}
                    <img src={ico_myaccount} alt="ico_account" className="ico_account"/>

                </Link>
                <Link to="" className="">
                    {/*<div>candidatures</div>*/}
                    <img src={ico_candidature} alt="ico_candidature" className="ico_candidature"/>

                </Link>
                <Link to="/profile/1" className="">
                    {/*<div>Offers</div>*/}
                    <img src={ico_offers} alt="ico_offers" className="ico_offers"/>

                </Link>
                <Link to="" className="">
                    {/*<div>Associations</div>*/}
                    <img src={ico_asso} alt="ico_asso" className="ico_asso"/>

                </Link>
                <Link to="" className="">
                    {/*<div>Notifications</div>*/}
                    <img src={ico_notif} alt="ico_notif" className="ico_notif"/>

                </Link>
            </div>

            <div className="bottom">
                <Link to="/contact" className="">
                    {/*<div>Contactez nous</div>*/}
                    <img src={ico_contact} alt="ico_contact" className="ico_contact"/>
                </Link>
            </div>

        </nav>
    );
}

export default navbar