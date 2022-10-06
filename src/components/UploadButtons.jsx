import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function UploadButtons({onChange}) {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label">
        Upload
        <input onChange={onChange} hidden   type="file" />
      </Button>
      
    </Stack>
  );
}
