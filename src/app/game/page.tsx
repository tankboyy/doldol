import React from 'react';
import {Box} from "@mui/material";

type propsType = {};

export default function Page(props: propsType) {
  return (
    <div className="flex justify-center">
      <Box sx={{
        background: 'gray',
        width: 500,
        height: 500
      }}>
        gigi
      </Box>
    </div>
  );
}