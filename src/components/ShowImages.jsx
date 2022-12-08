//Import React
import React, { useEffect, useState} from "react";
//Import MaterialUI
import { Stack, Container } from "@mui/material";
//Import services
import {api} from "../services/api";
//Import components
import ListImages from '../components/ListImages'
import ImageList from '@mui/material/ImageList';


export default function ShowImages() {
    const [images, setImages] = useState([]);
    const user_id = localStorage.getItem("user_id")//Constante que pega e salva o usuário com base no Storage
    const tokenUser = localStorage.getItem("token")//Constante que pega e salva o token do usuário com base no Storage
    const headers = {
        "headers": {
          'Content-Type': 'file.type',
          Authorization: `Bearer ${tokenUser}`
          
        }
      }


   //Hook que chama as imagens assim que a página carrega           
   useEffect(() => {
        api
            .get(`users/${user_id}/images`, headers)
            .then((res) => setImages(res.data))
            .catch((err) => console.log(err))
        
        //eslint-disable-next-line react-hooks/exhaustive-deps
   }, [images.length])
   
   //Renderização da página
    return (
        <>
            <Container maxWidth="xl">
                <Stack textAlign="center" className="stack" >
                <h1 >Minhas Imagens </h1>
                </Stack>

            <ImageList sx={{width: 1000, height: 450, margin:"auto" }}>
                {images.map((image) => (
                    <ListImages key={image.image}
                    nameImage={image.nameImage} 
                    image={image.image}
                    id_Image={image.id}
                    />
                ))}
            </ImageList>               
            </Container>
        </>
        
    )
}
