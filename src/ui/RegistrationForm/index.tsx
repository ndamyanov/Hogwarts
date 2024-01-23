import { useState } from "react";
import {
  Button,
  Modal,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { StyledForm } from "./styles";

interface RegistrationFormProps {
  open: boolean;
  onClose: () => void;
}

const initialState = {
  name: "",
  animal: "",
  ghost: "",
  commonRoom: "",
};

const RegistrationForm = (props: RegistrationFormProps) => {
  const { open, onClose } = props;
  const [formData, setFormData] = useState(initialState);

  const [errors, setErrors] = useState({
    name: "",
    animal: "",
    ghost: "",
  });

  const allowedAnimals = ["giraffe", "dolphin", "armadillo", "unicorn"];

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    validateField(field, value);
  };

  const validateField = (field: string, value: string) => {
    let error = "";

    switch (field) {
      case "name":
        error =
          value.length < 5 || value.length > 20
            ? "Name must be 5-20 characters"
            : "";
        break;
      case "ghost":
        error = value.includes("Arnold")
          ? "Ghost name cannot contain Arnold"
          : "";
        break;
      default:
        break;
    }

    setErrors({ ...errors, [field]: error });
  };

  const isFormValid = () => {
    return (
      Object.values(errors).every((error) => error === "") &&
      formData.name !== "" &&
      formData.animal !== ""
    );
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      console.log("Form submitted:", formData);
      onClose();
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <StyledForm>
        <h2>Register House</h2>
        <TextField
          label="Name"
          fullWidth
          required
          error={errors.name !== ""}
          helperText={errors.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          sx={{ mt: 2, mb: 2 }} // Add margin-bottom and margin-top
        />
        <FormControl fullWidth required error={errors.animal !== ""}>
          <InputLabel>Aniimal</InputLabel>
          <Select
            value={formData.animal}
            onChange={(e) => handleInputChange("animal", e.target.value)}
          >
            {allowedAnimals.map((animal) => (
              <MenuItem key={animal} value={animal}>
                {animal}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{errors.animal}</FormHelperText>
        </FormControl>
        <TextField
          label="Ghost"
          fullWidth
          required
          error={errors.ghost !== ""}
          helperText={errors.ghost}
          onChange={(e) => handleInputChange("ghost", e.target.value)}
          sx={{ mt: 2 }} // Add margin-bottom
        />
        <TextField
          label="Common Room"
          fullWidth
          onChange={(e) => handleInputChange("commonRoom", e.target.value)}
          sx={{ mt: 2 }} // Add margin-bottom
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
          disabled={!isFormValid()}
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </StyledForm>
    </Modal>
  );
};

export default RegistrationForm;
