import React from "react";
import Image from "next/image";
import { Container, Stack, Typography } from "@mui/material";
import { PropagateLoader } from "react-spinners";

const Loader = () => {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          minHeight: "100vh",
          backgroundColor: "primary.main",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ mb: "40px" }}
        >
          <Image
            src="https://cdn.pixabay.com/photo/2017/03/30/18/17/girl-2189247_960_720.jpg"
            height={80}
            width={80}
            className="rounded-full object-cover"
          />
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              color: "secondary.contrastText",
              fontWeight: "semi-bold",
            }}
          >
            Loading the Crypto Lottery...
          </Typography>
        </Stack>
        <PropagateLoader color="white" size={25} />
      </Container>
    </>
  );
};

export default Loader;
