import React from "react";
import { Typography, Box, IconButton } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import UserIcon from "@mui/icons-material/People";
import { useLocation } from "react-router-dom";
import { StyledAppBar, StyledToolbar } from "./TopNavStyles";

const TopNav: React.FC = () => {
  const location = useLocation();

  const headings: { [key: string]: string } = {
    "/dashboard": "Dashboard",
    "/projects": "Projects",
    "/timesheet": "Timesheet",
    "/purchase-order": "Purchase Order",
    "/delivery-docket": "Delivery Docket",
    "/forms": "Forms",
    "/equipment": "Equipment",
    "/resource-assigner": "Resource Assigner",
    "/file-manager": "File Manager",
    "/user-management": "User Management",
    "/settings": "Settings",
  };

  const currentHeading = headings[location.pathname] || "Projects";

  return (
    <StyledAppBar position="fixed">
      <StyledToolbar>
        <Typography variant="h6" noWrap component="div">
          {currentHeading}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit">
          <HelpIcon />
        </IconButton>
        <IconButton color="inherit">
          <UserIcon />
          <Typography variant="body1" sx={{ marginLeft: 1 }}>
            Pradip Singh
          </Typography>
        </IconButton>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default TopNav;
