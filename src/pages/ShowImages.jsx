import React, { useEffect, useState, Fragment} from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack, Container } from "@mui/material";
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import ListImages from '../components/ListImages'
import {api} from "../services/api";






export default function ShowImages() {
    const [images, setImages] = useState([]);

   useEffect(() => {
        api
            .get("users/2/images")
            .then((res) => setImages(res.data))
            .catch((err) => console.log(err))
        
        //eslint-disable-next-line react-hooks/exhaustive-deps
   }, [images.length])


   
    return (
        <Fragment>
            <ResponsiveAppBar/>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
                <Typography component="h1" variant="h4">
                    Detalhe
                </Typography>
                </Box>
            </Container>
            <Container maxWidth="sm">
            </Container>
            <Container maxWidth="xl">
                <Stack marginTop="100px" textAlign="center" className="stack">
                <h1>Minhas Imagens</h1>
                {images.map((image) => (
                    <ListImages nameImage={image.nameImage} image={image.image}/>
                ))}
                              
                </Stack>
            </Container>
        </Fragment>
        
    )
}
