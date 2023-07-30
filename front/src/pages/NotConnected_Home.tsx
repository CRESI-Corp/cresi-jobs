import Description from "../components/DescriptionHomeJob/ShortDescription";
import ButtonsComponent from "../components/ButtonsComponent/ButtonsComponent";
import JobTilesComponent from "../components/JobTilesComponent/JobTilesComponent";
import PostOfferComponent from "../components/PostOfferComponent/PostOfferComponent";
import ManageApplicationsComponent from "../components/ManageApplicationsComponent/ManageApplicationsComponent";
import '../styles/NotConnecter_home/NotConnecter_home.css';

function NotConnecter_home(){
    return(
        <body>
            <div className="TitreJob">
            <h1> Bienvenue sur Cresi Job</h1>
            </div>
            <div className="description-buttons-container">
                <Description />
                <ButtonsComponent />   
            </div>
            <JobTilesComponent />
            <PostOfferComponent />
            <ManageApplicationsComponent />
        </body>
    );
}

export default NotConnecter_home;
