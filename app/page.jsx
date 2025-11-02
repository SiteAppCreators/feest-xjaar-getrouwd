'use client';

import { Grid } from "@mui/material";
import Form from "./components/Form";

export default function Home() {
  return (
    <div>
      <Grid container justifyContent="center" alignItems="start" sx={{
        backgroundImage: 'url(/love.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        overflow: 'hidden'
      }}>
        <Form />
      </Grid>
    </div>
  );
}
