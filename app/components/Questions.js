'use client';

import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material"

export default function Questions() {
    const vragen = [
        {
            label: "Waar hebben we elkaar leren kennen?",
            type: "text",
            name: "knowPlace"
        },
        {
            label: "Wat waren Steven zijn eerste woorden aan Gwenny?",
            type: "text",
            name: "firstWords"
        },
        {
            label: "Welk drankje dronk Gwenny op dit moment?",
            type: "text",
            name: "drinkGwenny"
        },
        {
            label: "Wat zijn de namen van onze kinderen?",
            type: "text",
            name: "childrenNames"
        },
        {
            label: "Wat was onze eerste reis samen?",
            type: "text",
            name: "firstTrip"
        },
        {
            label: "Welke kleur hadden de bloemen van het bruidsboeket?",
            type: "text",
            name: "flowerColor"
        },
        {
            label: "Waar ging het trouwfeest door?",
            type: "text",
            name: "weddingLocation"
        },
        {
            label: "Waar gingen wij op huwelijksreis?",
            type: "text",
            name: "honeymoonLocation"
        },
        {
            label: "Wat is Gwenny haar geboortedatum? (schrijf dit zoals: DD-MM-JJJJ)",
            type: "text",
            name: "birthdateGwenny"
        },
        {
            label: "In welk jaar waren we 10 jaar getrouwd",
            type: "text",
            name: "whichYear"
        },
        {
            label: "Wat was het thema van ons 10 jaar getrouwd feest",
            type: "text",
            name: "themeParty"
        },
        {
            label: "Wanneer verjaart Steven?",
            type: "text",
            name: "birhthdaySteven"
        },
        {
            label: "Waar gaan we liefst op reis?",
            type: "text",
            name: "favoriteTrip"
        },
        {
            label: "Van wat heeft Steven nooit genoeg? (Waar Gewnny op zegt: 'Je hebt er al genoeg van!') (3 mogelijkheden)",
            type: "text",
            name: "stevenEnough"
        },
        {
            label: "Hoe oud worden de kinderen in 2026?",
            type: "text",
            name: "ageChildren"
        },
        {
            label: "Wat was onze openingsdans (titel en artiest)?",
            type: "text",
            name: "firstDance",
            options: ["I Do It for You - Bryan Adams", "I Don’t Want to Miss a Thing - Aerosmith", "I Honestly Love You - René Froger"]
        },
        {
            label: "In welk jaar hebben wij elkaar voor de eerste keer ontmoet?",
            type: "text",
            name: "firstMeetYear"
        },
        {
            label: "Wie heeft er de eerste kus gegeven?",
            type: "text",
            name: "firstKiss",
            options: ["Steven", "Gwenny", "Ze weten het zelf niet meer"]
        },
        {
            label: "Wat is ons huisnummer?",
            type: "text",
            name: "houseNumber"
        },
        {
            label: "Als je hun relatie in 1 woord zou moeten omschrijven, welk woord zou dat zijn?",
            type: "text",
            name: "oneWord"
        }
    ];

    return (
        <Grid container direction="column" spacing={4}>
            {vragen.map((vraag, index) => {
                return (
                    (vraag.options) ? (
                        <FormControl fullWidth key={index} sx={{my: 2}}>
                            <InputLabel>{vraag.label}</InputLabel>
                            <Select label={vraag.label} variant="standard" name={vraag.name} fullWidth key={index}>
                                {vraag.options.map((option, idx) => (
                                    <MenuItem key={idx} value={option} onChange={() => {console.log('hello world')}}>{option}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )
                        :
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
    );
}
