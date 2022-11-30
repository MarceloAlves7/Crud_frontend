import React, { useEffect, useState, Fragment} from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from "@mui/icons-material/Delete";
import {api} from "../services/api";


export default function ListImages({nameImage, image, id_image}) {
  const [success, setSuccess] = useState();
  const [error, setError] = useState("");
  const user_id = localStorage.getItem("user_id")
  const tokenUser = localStorage.getItem("token")

  const headers = {
    "headers": {
      'Content-Type': 'file.type',
      Authorization: `Bearer ${tokenUser}`
      
    }
  }


  const deleteImage = async () => {
    //http://127.0.0.1:8000/api/users/1/oneimageuser/9
    await api.delete( `api/users/${user_id}/oneimageuser/${id_image}`, headers)
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
  return (
    <ImageList sx={{ width: "100%",  margin: 'auto', ml:"27%", mt:10 }} cols={2} >
      
        <ImageListItem> 
          <img
            src={`${image}?w=248&fit=crop&auto=format`}
            srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={nameImage}
            loading="lazy"
          />
          <ImageListItemBar
            title={nameImage}
            actionIcon={
              
              <>
                <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        aria-label={`info about ${nameImage}`}>
                        <InfoIcon />
                </IconButton>

                <IconButton
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        >
                        <DeleteIcon 
                        onClick={deleteImage}/>
                </IconButton>
              </>
              
            }
          />
        </ImageListItem>
    </ImageList>
  );
}


