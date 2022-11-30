import {  Fragment } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import UploadButtons from '../components/UploadButtons';
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import React, { useState } from "react";
import {api} from "../services/api"


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit">
        ImagesUp
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function FormImage() {
  const [image, setImage] = useState('');
  const [name, setName]= useState('')
  const user_id = localStorage.getItem("user_id")
  const tokenUser = localStorage.getItem("token")
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");





  



  const handleSubmit = async (event) => {
    event.preventDefault();
    //console.log("Upload Imagem")
    //console.log(user_id)
    //console.log(tokenUser)
    
    

    if(!name || !image){
      setError('Preencha todos os campos!')
    }else {
      setError('')
      const formData = new FormData();
      formData.append('image', image)
      formData.append('nameImage', name )
      
      
  
      const headers = {
        "headers": {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokenUser}`
          
        }
      }
  
      await api.post(`users/${user_id}/images/uploadfiles/`, formData, headers )
      .then((response) => {
        if(response.status === 201){
          setSuccess("Imagem salva com sucesso!");
          setError("");
        }
      })
      .catch((e) => {
        setError(e.response.data["error"]);
        setSuccess("");
      });
      
    }
  };

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
                    Formulário com Foto 
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                    onChange={(e) => {
                      setName(e.target.value);
                      console.log(e.target.value)
                    }}
                    margin="normal"
                    required
                    fullWidth
                    id="nameImage"
                    label="Nome da Imagem"
                    name="nameImage"
                    autoFocus
                    />
                    <UploadButtons
                    onChange={(e) => {
                      setImage(e.target.files[0]);
                      console.log(e.target.files[0]);
                    }}
                    
                    />
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    
                    >
                    Salvar
                    </Button>
                    {error && <span style={{ color: "red" }}>{error}</span>}
                    {success && <span style={{ color: "green" }}>{success}</span>}
                </Box>
                </Box>
                
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        
      </Fragment>
   
  );
}