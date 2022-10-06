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
import { createContext, useState} from 'react';
import api from "../services/api"


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
  



  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Upload Imagem")
    
    const formData = new FormData();
    formData.append('image', image)
    formData.append('nameImage', name )
    
    

    const headers = {
      "headers": {
        'Content-Type': 'file.type'
      }
    }

    await api.post("http://127.0.0.1:8000/api/users/2/images/uploadfiles/", formData, headers )
    
    
      




    
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
                </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        
      </Fragment>
   
  );
}