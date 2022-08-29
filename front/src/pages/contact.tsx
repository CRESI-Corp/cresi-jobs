import { Grid, Container } from '@mui/material'

function contactPage() {
    return (
        <body>


            <h1 class="text-3xl md:text-5xl font-bold p-2 mx-6 mt-12 md:mt-28 mb-8">Nous contacter</h1>
            <form action="" method="post">
                <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
                    <div class="grid grid-cols-1 gap-3">
                        <input type="text" placeholder='Votre prenom' class="border-solid border-2 border-Subtext p-2 rounded-xl"/>
                        <input type="text" placeholder='Votre Nom' class="border-solid border-2 border-Subtext p-2 rounded-xl"/>
                        <input type="text" placeholder='Votre Email' class="border-solid border-2 border-Subtext p-2 rounded-xl"/>
                        <select name="reason" class="p-2 rounded-xl font-semibold text-Primary">
                            <option value="" disabled selected>Pourquoi nous contactez-vous ?</option>
                            <option value="j'ai une idée a vous partager">J'ai une idée a vous partager</option>
                            <option value="je souhaite rejoindre l'équipe">Je souhaite rejoindre l'équipe</option>
                            <option value="j'ai un bug à remonter">J'ai un bug à remonter</option>
                        </select>
                    </div>
                    <div class="grid grid-cols-1 gap-3">
                        <textarea name="message" placeholder='Écrire ici...' class="border-solid border-2 h-32 border-Subtext p-2 rounded-xl">
                        </textarea>
                        <input type="button" value="Envoyer" class="bg-Secondary text-Dominant px-4 py-2 text-xl font-semibold rounded-xl"/>
                    </div>
                </div>
            </form>
            {/*
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
    */}
        </body>
    );

}

export default contactPage