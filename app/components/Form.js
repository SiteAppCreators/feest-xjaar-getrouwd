'use client';

import { alpha, Button, Divider, FormControl, Grid, Input, Paper, TextField, Typography } from "@mui/material"
import Questions from "./Questions";

export default function Form() {
    return (
        <Paper sx={{ width: { xs: '85vw', md: '50vw' }, padding: 4, mt: 10, borderRadius: 5, overflowY: 'auto', backgroundColor: alpha('#FFFFFF', 0.8) }}>
            <Grid container direction="column" spacing={2}>
                <Grid container direction="column" spacing={2}>
                    <Typography variant="h4">
                        Party Time!
                    </Typography>
                    <Typography variant="body1">
                        Hoera je bent uitgenodigd voor ons feest! Maar natuurlijk is nu de vraag:<br />
                        <b>Waar gaat deze door?</b><br /><br />
                        Los volgende vragen op. Behaal jij 80% op onze vragen, dan krijg je van ons de locatie te zien.<br />
                        Maar niet getreurd! Vind je ze niet, kijk dan <b>2 maanden voor het feest</b> terug naar deze pagina. De locatie wordt dan gewoon op deze pagina mooi getoond.<br /><br />
                        Tot Dan!<br />Gwenny en Steven
                    </Typography>
                </Grid>
                <Divider sx={{ mt: 5, mb: 4 }} />
                <FormControl variant="standard">
                    <Typography variant="body2" sx={{ mb: 1 }}>
                        Volledige Naam
                    </Typography>
                    <Input id="component-simple" />
                </FormControl>
                {/* Here would be the Questions component */}
                <Questions />
                <Grid container justifyContent="center">
                    <Button variant="contained" color="primary" sx={{ mt: 3, textTransform: 'capitalize', borderRadius: 5, backgroundColor: '#FFB7CE' }}>
                        Bekijk mijn resultaat
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
}