import { userInfo } from '../models/models'

function profile() {
  const userInfo: userInfo =
  {
    firstName: 'Sarah',
    lastName: 'Connor',
    school: 'Engineering Student',
    image: ['https://images.ctfassets.net/hrltx12pl8hq/4A2TOo2c0ViKY7tneazMHl/fce06d74e3231dc5b9375a9c3d195134/shutterstock_editorial_12749606c.jpg'],
    href: 'https://www.audi.fr/fr/web/fr.html',
    aboutMe: "Hello i'm Sarah and i really like Information Technologies and i would love to travel around the world while working in cybersecurity",
    dob: "22/10/1999",
    email: 'Sarah.Connor@mail.fr',
    phoneNumber: "+330102030405",
    year: '3rd Year',
    resume: "RESUME/CV",
    diploma: "Baccalaureat Scientifique",
    desiredWork: "Cybersecurity engineer"
  }

  return (
    <div className="">
      <header>
        <div className="grid-header">
          <p className="text-3xl md:text-5xl font-bold text-Primary p-2 mx-6 mt-12 md:mt-28 mb-8">Profil de {userInfo.firstName} {userInfo.lastName}</p>
        </div>
      </header>
      <div className="flex flex-col md:grid grid-cols-3 gap-2 place-userInfos-center p-4 md:p-8 md:leading-10 md:tracking-wide lg:text-xl lg:mx-12">
        <div className="userInfo col-span-1">
          <a href={userInfo.href}><img src={userInfo.image[0]} className="rounded-full w-2/3 md:w-1/2 lg:w-1/2" id={"Image"} /></a>
          <div className="flex flex-row pt-6 text-Secondary font-bold text-xl lg:text-2xl">
            <h2 className="firstName pr-1" id={userInfo.firstName}>{userInfo.firstName}</h2>
            <h2 className="lastName" id={userInfo.lastName}>{userInfo.lastName}</h2>
          </div>
          <h2 className="dob">{userInfo.dob}</h2>
          <p className="phoneNumber">{userInfo.phoneNumber}</p>
          <p className="email">{userInfo.email}</p>
          <p className="title">{userInfo.school}</p>
        </div>
        <div className="aboutUser col-span-2">
          <h2 className="attentionCatcher text-Secondary font-bold text-xl lg:text-3xl">About me</h2>
          <div className="Diploma">{userInfo.diploma}</div>
          <div className="Future"> dream position : {userInfo.desiredWork}</div>
          <div className="aboutMe" contentEditable={true}>{userInfo.aboutMe}</div>
          <div className="resume">CV: à modifier avec une liseuse pdf du CV ou toute autre idée</div>
        </div>
      </div>

    </div >
  );
}

export default profile;
