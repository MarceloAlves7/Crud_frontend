import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

//Rodapé do símbolo de copyright 
export default function Copyright(props) {
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
  