import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from "@mui/icons-material/Delete";

export default function ListImages({nameImage, image}) {
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
                        <DeleteIcon />
                </IconButton>
              </>
              
            }
          />
        </ImageListItem>
    </ImageList>
  );
}


