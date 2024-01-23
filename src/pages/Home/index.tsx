import { useState } from "react";
import { StyledHeader } from "./styles";
import { Button } from "@mui/material";
import RegistrationForm from "../../ui/RegistrationForm";
import { StyledCenterDiv } from "./styles";

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <StyledCenterDiv>
      <StyledHeader>Welcome to Hogwarts!</StyledHeader>
      <Button variant="contained" color="primary" onClick={handleOpenModal}>
        Register House
      </Button>
      <RegistrationForm open={isModalOpen} onClose={handleCloseModal} />
    </StyledCenterDiv>
  );
};

export default Home;
