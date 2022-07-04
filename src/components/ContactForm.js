import { Button, Stack, TextField } from "@mui/material";

export const ContactForm = ({ lead, error, handleChange, handleSubmit }) => {
  return (
    <div className="contactForm">
      <Stack spacing={2} sx={{ width: 1000 }}>
        <TextField
          required
          id="fullName"
          label="Jméno a Příjmení"
          value={lead.name}
          onChange={handleChange("name")}
          error={error.name}
          helperText={error.name ? "Prosím vyplňte jméno a příjmení." : " "}
        />
        <TextField
          required
          id="phoneNumber"
          label="Telefonní číslo"
          value={lead.phone}
          onChange={handleChange("phone")}
          error={error.phone}
          helperText={
            error.phone ? "Prosím vyplňte české telefonní číslo." : " "
          }
        />
        <TextField
          required
          id="email"
          label="E-mail"
          value={lead.email}
          onChange={handleChange("email")}
          error={error.email}
          helperText={
            error.email ? "Prosím vyplňte e-mail ve správném tvaru." : " "
          }
        />
      </Stack>
      <div className="formButton">
        <Button onClick={handleSubmit}>Odeslat</Button>
      </div>
    </div>
  );
};
