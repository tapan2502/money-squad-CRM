"use client";

import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import DashboardLayout from "./DashboardLayout";
import { useAuth } from "../../hooks/useAuth";

const PartnerLayout = () => {
  const { userName } = useAuth();

  const menuItems = [
    { text: "Overview", icon: "Dashboard", path: "/partner/overview" },
    { text: "Leads", icon: "People", path: "/partner/leads" },
    { text: "Offers", icon: "LocalOffer", path: "/partner/offers" },
    { text: "Commissions", icon: "AttachMoney", path: "/partner/commissions" },
    { text: "Team Management", icon: "Groups", path: "/partner/team-management" },
    { text: "Training & Resources", icon: "TrainingResources", path: "/partner/training-resorces" }, // ✅ Add this

    { text: "Settings", icon: "Settings", path: "/partner/settings" },
    { text: "Help & Support", icon: "Help", path: "/partner/help-support" }, // ✅ Add this

  ];

  return (
    <DashboardLayout
      menuItems={menuItems}
      userRole="Partner"
      userName={userName}
    >
      <Box sx={{ p: 3 }}>
        <Outlet />
      </Box>
    </DashboardLayout>
  );
};

export default PartnerLayout;
