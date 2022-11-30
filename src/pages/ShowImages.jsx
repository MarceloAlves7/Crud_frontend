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
    const user_id = localStorage.getItem("user_id")
    const tokenUser = localStorage.getItem("token")

    const headers = {
        "headers": {
          'Content-Type': 'file.type',
          Authorization: `Bearer ${tokenUser}`
          
        }
      }

   useEffect(() => {
        api
            .get(`users/${user_id}/images`, headers)
            .then((res) => setImages(res.data))
            .catch((err) => console.log(err))
        
        //eslint-disable-next-line react-hooks/exhaustive-deps
   }, [images.length])
   
    return (
        <Fragment>
            <ResponsiveAppBar/>
            <Container maxWidth="xl">
                <Stack marginTop="100px" textAlign="center" className="stack">
                <h1>Minhas Imagens</h1>
                {images.map((image) => (
                    <ListImages key={image.image}
                    nameImage={image.nameImage} 
                    image={image.image}
                    id_Image={image.id}
                    />
                ))}
                              
                </Stack>
            </Container>
        </Fragment>
        
    )
}
