import React from "react";
import Image from "next/image";
import { useAddress, useDisconnect } from "@thirdweb-dev/react";
import { Box, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";
import NavButton from "./NavButton";

const Header = () => {
  const address = useAddress();
  const disconnect = useDisconnect();

  return (
    <header className="grid grid-cols-2 md:grid-cols-5 p-2 justify-between items-center">
      {/* Leftside Header  */}
      <Box
        sx={{
          width: "100%",
          height: 100,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          src="https://cdn.pixabay.com/photo/2017/03/30/18/17/girl-2189247_960_720.jpg"
          height={80}
          width={80}
          className="rounded-full object-cover"
        />
        <Box sx={{ ml: "8px" }}>
          <Typography variant="h1" className="text-lg text-white font-bold">
            PAPAFAM DRAW
          </Typography>
          <Typography
            variant="body1"
            className="text-xs text-emerald-500 truncate"
          >
            User: {address?.slice(0, 6)}...{address?.slice(-5)}
          </Typography>
        </Box>
      </Box>

      {/* NavButton  */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "6px",
          gridColumn: { md: "span 3 / span 3" },
        }}
      >
        <Box
          sx={{ backgroundColor: "#0A1F1C", p: "4px" }}
          className="space-x-2"
        >
          <NavButton isActive title="Buy Tickets" />
          <NavButton title="Logout" onClick={() => disconnect()} />
        </Box>
      </Box>

      {/* Menu Button  */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "auto",
          alignItems: "center",
        }}
      >
        <Menu
          sx={{
            color: "white",
            height: "32px",
            width: "32px",
            cursor: "pointer",
          }}
        />
        <Typography variant="body2" sx={{ display: { md: "none" } }}>
          <NavButton title="Logout" onClick={() => disconnect()} />
        </Typography>
      </Box>
    </header>
  );
};

export default Header;
