import profile from './profile'

const cases: string = 'student'

function studentInfo() {
    return (
        <div>
            <h1>Mon Compte</h1>
            <div className='container'>
                <div id='recap' className='left'>

                </div>
                <div className='right'>
                    <div>Mon Profil

                    </div>
                </div>
            </div>

        </div>
    )
}

function accountInfos() {
    switch (cases) {
        case 'student':
            return profile()
        default:
            //placeholder before adding a proper error throw 
            return (<div></div>)
    }
}

export default accountInfos