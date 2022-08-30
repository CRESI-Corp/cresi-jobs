import { Grid, Container } from '@mui/material'

function contactPage() {
    return (
    <div class="bg-Dominant text-Text w-screen h-screen">


            <h1 class="text-3xl md:text-5xl font-bold text-Primary p-2 mx-6 mt-12 md:mt-28 mb-8 ">Nous contacter</h1>
            <form action="" method="post">
                <div class="flex flex-col w-full">
                    <div class="flex flex-col md:flex-row">
                        <input type="text" placeholder='Votre Prénom' class="p-2 m-2 w-full rounded-xl"/>
                        <input type="text" placeholder='Votre Nom' class="p-2 m-2 w-full rounded-xl"/>
                        <input type="text" placeholder='Votre Adresse Email' class="p-2 m-2 w-full rounded-xl"/>
                        <select name="reason" class="p-2 m-2 w-full rounded-xl font-semibold ">
                            <option value="" disabled selected class="text-gray-400">Pourquoi nous contactez-vous ?</option>
                            <option value="j'ai une idée a vous partager">J'ai une idée a vous partager</option>
                            <option value="je souhaite rejoindre l'équipe">Je souhaite rejoindre l'équipe</option>
                            <option value="j'ai un bug à remonter">J'ai un bug à remonter</option>
                        </select>
                    </div>
                    <div class="flex flex-row flex-wrap justify-end">
                        <textarea name="message" placeholder='Écrire ici...' class="h-32  p-2 m-2 rounded-xl w-full">
                        </textarea>
                        <input type="button" value="Envoyer" class="bg-Secondary text-Dominant px-4 py-2 m-2 w-1/6 text-xl font-semibold rounded-xl"/>
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
        </div>
    );

}

export default contactPage