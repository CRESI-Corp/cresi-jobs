interface userData {
    profilePicture: string;
    isOpen: boolean;
    callback: Function;
}

const UserActions: React.FC<userData> = ({ profilePicture, isOpen, callback }) => {
    return (
        <header className="user-actions">
            <div className="info">
                <span className="image">
                    <a href="/account">
                        <img src={profilePicture} alt="profile-icon" className="ico_head" />
                    </a>
                </span>

                <div className="actions">
                    <a href="#">
                        <span className="profession" >Déconnexion</span>
                    </a>
                    <a href="#">
                        <i className="bx bx-log-out icon" ></i>
                    </a>
                </div>
            </div>

            <i className="bx bx-chevron-right toggle" onClick={() => callback(!isOpen)}/>
        </header>
    );
};


export {
    UserActions
}