import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {useState} from 'react';
import {api} from '../services/api';
import { useNavigate } from "react-router-dom";


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



export default function SignUp() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [full_name, setFull_ame]= useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword]= useState('')
    const [password_confirm, setPasswordConfirm] = useState("");
    const [success, setSuccess] = useState();
    const [error, setError] = useState("");
  

    const handleSubmit = async (event) => {
      event.preventDefault();

      if (
        username === "" ||
        full_name === "" ||
        email === "" ||
        password === "" ||
        password_confirm === ""
      ){
        setError("Preencha todos os campos!");

      } else if (password !== password_confirm) {

        setError("As senhas devem ser iguais!");

      } else{
        const formData = new FormData();
        formData.append('username', username)
        formData.append('full_name', full_name)
        formData.append('email', email)
        formData.append('password', password)
  
        const headers = {
          "headers": {
            'Content-Type': "application/json",
              
          }
        }
  
      await api
              .post("users/", formData, headers)

              .then((response) => {
                if(response.status === 201){
                setSuccess("Usuário cadastrado com sucesso!");
                setError("");}})
                
              .catch((e) => {
                setError(e.response.data["error"]);
                setSuccess("");});
          
          navigate('/entrar')
          }
        };
  
    return (
      
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
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Cadastre-se
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => {
                      setUsername(e.target.value);                    }}
                    autoComplete="given-name"
                    name="usuario"
                    required
                    fullWidth
                    id="usuario"
                    label="Usuário"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => {
                      setFull_ame(e.target.value);
                    }}
                    required
                    fullWidth
                    id="full_name"
                    label="Nome Completo"
                    name="full_name"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                    fullWidth
                    id="email"
                    label="Endereço de Email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    required
                    fullWidth
                    name="password"
                    label="Senha"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => {
                      setPasswordConfirm(e.target.value);
                    }}
                    required
                    fullWidth
                    name="password_confirm"
                    label="Confirme sua Senha"
                    type="password"
                    id="password_confirm"
                    autoComplete="new-password"
                  />
                </Grid>
                
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Cadastrar
              </Button>
              {error && <span style={{ color: "red" }}>{error}</span>}
              {success && <span style={{ color: "green" }}>{success}</span>}
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/entrar" variant="body2">
                    Já possui conta? Faça o Login
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      
    );
  }