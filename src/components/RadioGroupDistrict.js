import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useContext } from "react";
import { ContextStore } from "../store/Context.js";

export const RadioGroupDistrict = ({ lead, error, handleChange }) => {
  const { priceCalculationForm } = useContext(ContextStore);

  return (
    <div className="radioGroupDistrict">
      {priceCalculationForm.region !== "" && (
        <FormControl error={error.district} variant="standard">
          <FormLabel id="districtSelect">Okres</FormLabel>
          <RadioGroup
            row
            aria-labelledby="districtSelect"
            name="districtSelect"
            value={lead.district}
            onChange={handleChange("district")}
          >
            {priceCalculationForm.districts
              .filter((district) => {
                return district.region === lead.region;
              })
              .map((option) => (
                <FormControlLabel
                  key={option.district}
                  value={option.district}
                  control={<Radio />}
                  label={option.districtDisplayName}
                />
              ))}
          </RadioGroup>
          {error.district ? (
            <FormHelperText>Prosím vyplňte kraj a okres.</FormHelperText>
          ) : (
            <FormHelperText> </FormHelperText>
          )}
        </FormControl>
      )}
    </div>
  );
};
