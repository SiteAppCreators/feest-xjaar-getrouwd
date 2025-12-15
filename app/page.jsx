'use client';

import { Grid } from "@mui/material";
import Form from "./components/Form";

export default function Home() {
  return (
    <div style={{backgroundImage: 'url(/collage.png)'}}>
      <Grid container justifyContent="center" alignItems="start" sx={{
        backgroundImage: 'url(/collage.png)',
        backgroundPosition: 'center',
        backgroundAttachment: {
          xs: 'scroll', // mobile
          md: 'fixed', // desktop
        },
        backgroundSize: {
          xs: '100%', // mobile – zoom in slightly
          md: 'cover', // desktop
        },
        overflow: 'hidden',
      }}>
        <Form />
      </Grid>
    </div>
  );
}
