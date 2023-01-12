import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex',justifyContent:'center',alignItems:'center',pt:'8%',pb:'6%' }}>
      <CircularProgress color='inherit'/>
    </Box>
  );
}