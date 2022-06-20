import react from 'react';
import { Grid, Container } from '@mui/material'
import {Link} from "react-router-dom"

function connectionPage() {
    return (
        <body>


            <h1>Connexion</h1>
            <form action="" method="post">
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <input type="text" placeholder='Adresse email' />
                        </Grid>
                        <Grid item xs={3}>
                            <input type="text" placeholder='Mot de passe' />
                        </Grid>
                    </Grid>
                </Container>
                <input type="button" value="Je me connecte" />
                <Link to="/registration"><div>Nouveau sur la plateforme ? C'est par ici</div></Link>
            </form>
        </body>
    );

}

export default connectionPage