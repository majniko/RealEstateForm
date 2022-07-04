import { Container } from "@mui/system";
import { Button } from "@mui/material";
import "./css/App.css";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const App = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/chci-nabidku");
  };

  return (
    <Container sx={{ width: "fit-content", height: 800 }}>
      <div className="app">
        <Button onClick={handleClick}>Chci nabídku</Button>
        <Outlet />
      </div>
    </Container>
  );
};
