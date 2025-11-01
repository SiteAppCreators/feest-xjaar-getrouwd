'use client';

import { Grid } from "@mui/material";
import Form from "./components/Form";

export default function Home() {
  return (
    <div>
      <Grid container justifyContent="center" alignItems="start" sx={{ minHeight: '100vh', backgroundColor: '#fdf0d5' }} >
        <Form />
      </Grid>
    </div>
  );
}
