//Imports MaterialUI
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
//Imports react
import React, { useState, useContext} from "react";
//Imports Context
import { AuthContext } from "../contexts/auth"
//Import components
import Copyright from '../components/Copyright';


export default function LoginPage() {
  const { login } =  useContext(AuthContext) // Estado que seta o context para login, para logar 
  const [email, setEmail] = useState(""); //Estado que seta email
  const [password, setPassword] = useState("");// Esado que seta a senha
  const [showPassword, setShowPassword] = useState(false);
  const [openAlert, setOpenAlert] = useState(false); //Estado para controlar o Snackbar de erro quando dados não forem encontrados.
  const [error, setError] = useState("");//Estado para mensagem de erro




  const handlePassword = () => setShowPassword(!showPassword);


  //Função que passa os parametros(email e senha) para a função login
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(email, password)
      
    } catch (err) {
      setError('Usuário ou senha incorretos')
      setOpenAlert(true)
    }
    
  };

  //Funções para controlar a abertura e fechamento do Alert Snackbar.
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const handleClose = (event, reason) => {
    if (reason === "clickaway") {
        return;
    }
    setOpenAlert(false);
};


  //Renderização da pagina de login
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
            Fazer Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Endereço de email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu a Senha?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" variant="body2">
                  {"Não possui conta? Cadastre-se"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
        <Snackbar open={openAlert} autoHideDuration={3000} disableWindowBlurListener={true} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
                  {error}
                </Alert>
        </Snackbar>
      </Container>
    
  );
}