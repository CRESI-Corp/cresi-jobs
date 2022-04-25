import logo from './logo.svg';
import './App.css';
import { Grid, Container } from '@material-ui/core'
import { userInfo } from './models/models'
function App() {
  const item: userInfo =
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
    <body>
      <header>
        <h1 className="h1">Bonjour et bienvenue chez Cresi Jobs</h1>
        <div className="grid-header">
          <p>Voici votre profil</p>
        </div>
      </header>

      <Container>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Grid container spacing={0}>
              <div className='userInfo'>
                <Grid item xs={6}>
                  <a href={item.href}><img src={item.image[0]} className='Images' id={"Image"} /></a>
                </Grid>
                <Grid item xs={6}>
                  <h2 className='firstName' id={item.firstName}>{item.firstName}</h2>
                  <h2 className='lastName' id={item.lastName}>{item.lastName}</h2>
                  <h2 className='dob'>{item.dob}</h2>
                  <p className='phoneNumber'>{item.phoneNumber}</p>
                  <p className='email'>{item.email}</p>
                  <p className='title'>{item.school}</p>
                </Grid>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={8}>
            <div className='aboutUser'>
              <h2 className='attentionCatcher'>About me</h2>
              <div className='Diploma'>{item.diploma}</div>
              <div className='Future'> dream position : {item.desiredWork}</div>
              <br />
              <div className='aboutMe'>{item.aboutMe}</div>
              <br/>
              <div className='resume'>CV: à modifier avec une liseuse pdf du CV ou toute autre idée</div>
            </div>
          </Grid>
        </Grid>
      </Container>

    </body >
  );
}

export default App;
