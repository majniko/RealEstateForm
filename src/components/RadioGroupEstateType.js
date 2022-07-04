import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useContext } from "react";
import { ContextStore } from "../store/Context";

export const RadioGroupEstateType = ({ lead, error, handleChange }) => {
  const { priceCalculationForm } = useContext(ContextStore);

  return (
    <div className="radioGroupEstateType">
      <FormControl error={error.estateType} variant="standard">
        <FormLabel id="estateTypeSelect">Typ nemovitosti</FormLabel>
        <RadioGroup
          row
          aria-labelledby="estateTypeSelect"
          name="estateTypeSelect"
          value={lead.estateType}
          onChange={handleChange("estateType")}
        >
          {priceCalculationForm.estateTypes.map((option) => (
            <FormControlLabel
              key={option.id}
              value={option.type}
              control={<Radio />}
              label={option.type}
            />
          ))}
        </RadioGroup>
        {error.estateType ? (
          <FormHelperText>Prosím vyplňte typ nemovitosti.</FormHelperText>
        ) : (
          <FormHelperText> </FormHelperText>
        )}
      </FormControl>
    </div>
  );
};
