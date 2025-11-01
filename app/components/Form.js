'use client';

import { Grid, Paper, TextField, Typography } from "@mui/material"

export default function Form() {
    const vragen = [
        {
            label: "Waar hebben we elkaar leren kennen?",
            type: "text",
            name: "knowPlace"
        },
        {
            label: "Waar ging onze eerste date door?",
            type: "text",
            name: "firstDate"
        },
    ];

    return (
        <Paper sx={{ width: '50vw', padding: 4, mt: 10, borderRadius: 5 }}>
            <Grid container direction="column">
                <Grid container direction="column" spacing={2}>
                    <Typography variant="h4">
                        Party Time!
                    </Typography>
                    <Typography variant="body1">
                        Hoera je bent uitgenodigd voor ons feest! Maar natuurlijk is nu de vraag:<br />
                        <b>Waar gaat deze door?</b><br /><br />
                        Los volgende vragen op. Behaal jij 80% op onze vragen, dan krijg je van ons de locatie, te zien.<br />
                        Maar niet getreurd! Vind je ze niet, kijk dan <b>2 maanden voor het feest</b> terug naar deze pagina. De locatie wordt dan gewoon op deze pagina mooi getoond.<br /><br />
                        Tot Dan!<br />Gwenny en Steven
                    </Typography>
                </Grid>
                <TextField label="Volledige naam" variant="standard" name="fullName" fullWidth margin="normal" />
                {vragen.map((vraag, index) => {
                    return (
                        <TextField
                            key={index}
                            label={vraag.label}
                            type={vraag.type}
                            name={vraag.name}
                            variant="standard"
                            fullWidth
                            margin="normal"
                        />
                    );
                })}
            </Grid>
        </Paper>
    );
}