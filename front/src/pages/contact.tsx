import { Grid, Container } from '@material-ui/core'

function contactPage() {
    return (
        <body>


            <h1>Nous contacter</h1>
            <form action="" method="post">
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <input type="text" placeholder='Votre prenom' />
                        </Grid>
                        <Grid item xs={3}>
                            <input type="text" placeholder='Votre Nom' />
                        </Grid>
                        <Grid item xs={3}>
                            <input type="text" placeholder='Votre Email' />
                        </Grid>
                        <Grid item xs={3}>
                            <select name="reason">
                                <option value="" disabled selected>Pourquoi nous contactez-vous ?</option>
                                <option value="j'ai une idée a vous partager">J'ai une idée a vous partager</option>
                                <option value="je souhaite rejoindre l'équipe">Je souhaite rejoindre l'équipe</option>
                                <option value="j'ai un bug à remonter">J'ai un bug à remonter</option>
                            </select>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <textarea name="message"></textarea>
                        </Grid>
                    </Grid>
                </Container>
                <input type="button" value="Envoyer" />
            </form>
        </body>
    );

}

export default contactPage