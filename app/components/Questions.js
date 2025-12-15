'use client';

import { alpha, Button, Divider, FormControl, Grid, Input, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material"
import React, { useEffect, useState } from "react";

const vragen = [
    {
        label: "Waar hebben we elkaar leren kennen?",
        type: "text",
        name: "knowPlace",
        answer: ["bierco"]
    },
    {
        label: "Wat waren Steven zijn eerste woorden aan Gwenny?",
        type: "text",
        name: "firstWords",
        answer: ["kriek"]
    },
    {
        label: "Welk drankje dronk Gwenny op dit moment?",
        type: "text",
        name: "drinkGwenny",
        answer: ["kriek"]
    },
    {
        label: "Wat zijn de namen van onze kinderen?",
        type: "text",
        name: "childrenNames",
        answer: ["elise en ellen", "ellen en elise", "ellen & elise", "elise & ellen"]
    },
    {
        label: "Wat was onze eerste reis samen?",
        type: "text",
        name: "firstTrip",
        answer: ["kreta"]
    },
    {
        label: "Welke kleur hadden de bloemen van het bruidsboeket?",
        type: "text",
        name: "flowerColor",
        answer: ["oranje"]
    },
    {
        label: "Waar ging het trouwfeest door?",
        type: "text",
        name: "weddingLocation",
        answer: ["ten stuyver", "stuyver", "ten stuiver", "stuiver"]
    },
    {
        label: "Waar gingen wij op huwelijksreis?",
        type: "text",
        name: "honeymoonLocation",
        answer: ["mallorca"]
    },
    {
        label: "Wat is Gwenny haar geboortedatum? (schrijf dit zoals: DD-MM-JJJJ)",
        type: "text",
        name: "birthdateGwenny",
        answer: ["19-04-1977"]
    },
    {
        label: "In welk jaar waren we 10 jaar getrouwd?",
        type: "text",
        name: "whichYear",
        answer: ["2011"]
    },
    {
        label: "Wat was het thema van ons 10 jaar getrouwd feest?",
        type: "text",
        name: "themeParty",
        answer: ["trouwkleren", "hawai", "hawaï", "hawaii"]
    },
    {
        label: "Wanneer verjaart Steven?",
        type: "text",
        name: "birhthdaySteven",
        answer: ["26 januari", "26-01", "26/01"]
    },
    {
        label: "Waar gaan we liefst op reis?",
        type: "text",
        name: "favoriteTrip",
        answer: ["*"]
    },
    {
        label: "Van wat heeft Steven nooit genoeg? (Waar Gwenny op zegt: 'Je hebt er al genoeg van!') (3 mogelijkheden)",
        type: "text",
        name: "stevenEnough",
        answer: ["verlof", "congé", "vakantie", "conge", "parfum", "jassen", "vestjes", "vesten"]
    },
    {
        label: "Hoe oud worden de kinderen in 2026?",
        type: "text",
        name: "ageChildren",
        answer: ["23 en 18", "18 en 23", "23 & 18", "18 & 23", "18 23", "23 18", "18 en 23 jaar", "18 jaar en 23 jaar", "18 & 23 jaar", "18 jaar & 23 jaar", "23 en 18 jaar", "23 jaar en 18 jaar", "23 & 18 jaar", "23 jaar & 18 jaar"]
    },
    {
        label: "Wat was onze openingsdans (titel en artiest)?",
        type: "text",
        name: "firstDance",
        options: ["I Do It for You - Bryan Adams", "I Don’t Want to Miss a Thing - Aerosmith", "I Honestly Love You - René Froger"],
        answer: ["I Honestly Love You - René Froger"]
    },
    {
        label: "In welk jaar hebben wij elkaar voor de eerste keer ontmoet?",
        type: "text",
        name: "firstMeetYear",
        answer: ["1997"]
    },
    {
        label: "Wie heeft er de eerste kus gegeven?",
        type: "text",
        name: "firstKiss",
        options: ["Steven", "Gwenny", "Ze weten het zelf niet meer"],
        answer: ["Gwenny"]
    },
    {
        label: "Wat is ons huisnummer?",
        type: "text",
        name: "houseNumber",
        answer: ["18"]
    },
    {
        label: "Als je hun relatie in 1 woord zou moeten omschrijven, welk woord zou dat zijn?",
        type: "text",
        name: "oneWord",
        answer: ["*"]
    }
];

export default function Questions() {
    //need to know who filled in the form.
    const [fullName, setFullName] = useState("");

    const emptyQuestions = vragen.reduce((acc, vraag) => {
        acc[vraag.name] = '';
        return acc;
    }, {});

    const [data, setData] = useState(emptyQuestions);

    //set the total score
    const [totalScore, setTotalScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    //disable the submit button
    const [subDisabled, setSubDisabled] = useState(true)
    const [loading, setLoading] = useState(false)

    function handleChange(e) {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));

        const hasEmpty = Object.values(data).some(value => value === '');
        if ((!hasEmpty && fullName) && subDisabled === true) {
            setSubDisabled(false)
        } else if ((hasEmpty || !fullName) && subDisabled === false) {
            setSubDisabled(true)
        }
    }

    useEffect(() => {
        const hasEmpty = Object.values(data).some(value => value === '');
        if ((!hasEmpty && fullName !== '') && subDisabled === true) {
            setSubDisabled(false)
        } else if ((hasEmpty || fullName === '') && subDisabled === false) {
            setSubDisabled(true)
        }
    }, [data, fullName])

    async function handleSubmit() {
        setLoading(true)
        const score = checkAnswers();
        const response = await fetch('/api/supabase', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                fullName: fullName,
                data: data,
                totalScore: score
            })
        })
        if (response.status === 200) {
            setTotalScore(score);
            setShowScore(true);
        } else if (response) {
            const resp = await response.json()
            alert(resp.message);
        }
        setLoading(false)
    }

    function checkAnswers() {
        let score = 0;
        vragen.map((vraag) => {
            if (vraag.answer.includes("*") && data[vraag.name] && data[vraag.name].trim() !== "") {
                score += 1;
            } else if (data[vraag.name] && vraag.answer.includes(data[vraag.name].replace('.', '').trim().toLowerCase())) {
                score += 1;
            } else if (data[vraag.name] && vraag.options && vraag.answer.includes(data[vraag.name])) {
                score += 1;
            }
        })
        return score
    }

    function chunkArray(array, chunkSize) {
        const chunks = []
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize))
        }
        return chunks
    }

    const questionGroups = chunkArray(vragen, 5);

    return (
        <Grid container direction="column" spacing={10} alignItems={"center"}>
            <Paper sx={{ width: { xs: '85vw', md: '50vw' }, padding: 4, mt: 10, borderRadius: 5, overflowY: 'auto', backgroundColor:  alpha('#FFFFFF', 0.95) }}>
                <FormControl variant="standard" fullWidth>
                    <Typography variant="body2" sx={{ mb: 1 }} color="#606060">
                        Volledige Naam
                    </Typography>
                    <Input id="component-simple"
                        name="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </FormControl>
            </Paper>
            {questionGroups.map((group, groupIndex) => {
                return (
                    <Paper
                        key={groupIndex}
                        sx={{
                            width: { xs: '85vw', md: '50vw' },
                            p: 4,
                            mb: 20,
                            borderRadius: 5,
                            backgroundColor: alpha('#FFFFFF', 0.95),
                        }}
                    >
                        <Grid container direction={'column'} spacing={5}>
                            {group.map((vraag, index) => {
                                return (
                                    (vraag.options) ? (
                                        <FormControl fullWidth key={index} sx={{ my: 2 }}>
                                            <Typography variant="body2" sx={{ mb: 1 }} color="#606060">
                                                {vraag.label}
                                            </Typography>
                                            <Select label={vraag.label} variant="standard" name={vraag.name} defaultValue={""} onChange={(e) => handleChange(e)} fullWidth key={index}>
                                                {vraag.options.map((option, idx) => (
                                                    <MenuItem key={idx} value={option}>{option}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    )
                                        :
                                        <FormControl fullWidth variant="standard" key={index}>
                                            <Typography variant="body2" sx={{ mb: 1 }} color="#606060">
                                                {vraag.label}
                                            </Typography>
                                            <Input id="component-simple" name={vraag.name} value={data[vraag.name] || ""} onChange={(e) => handleChange(e)} />
                                        </FormControl>
                                )
                            })}
                        </Grid>
                        {groupIndex === questionGroups.length - 1 && (
                            <Grid container direction={'column'}>
                                <Grid display={showScore === true ? 'block' : 'none'}>
                                    <Typography variant="h6" sx={{ textAlign: 'center', mt: 3 }}>
                                        Jouw score is: <br />{totalScore} / {vragen.length}
                                    </Typography>
                                    <Typography variant="body1" sx={{ textAlign: 'center', mt: 3 }}>
                                        {totalScore >= 15 ? (
                                            <>
                                                Gefeliciteerd! Je hebt meer dan 75% behaald.<br />
                                                De coördinaten van het feest zijn:<br />
                                                <b>51°11'10.0"N 3°00'23.5"E</b>
                                            </>
                                        ) : <>
                                            Helaas, je hebt niet genoeg punten behaald om de locatie te onthullen.<br />
                                            Kijk <b>2 maanden voor het feest</b> terug op deze pagina voor de locatie.
                                        </>
                                        }
                                    </Typography>
                                </Grid>
                                <Grid container justifyContent="center" mt={5}>
                                    <Button variant="contained" onClick={() => handleSubmit()} loading={loading} color="primary" sx={{ textTransform: 'capitalize', borderRadius: 5, backgroundColor: '#e6ebe7', color: '#000000' }} disabled={subDisabled}>
                                        Bekijk mijn resultaat
                                    </Button>
                                </Grid>
                            </Grid>
                        )}
                    </Paper>
                )
            })}
        </Grid>
    );
}
