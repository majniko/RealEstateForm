import Stack from "@mui/material/Stack";
import { CountySelect } from "./CountySelect/CountySelect";
import { RadioGroupEstateType } from "./RadioGroupEstateType";
import { RadioGroupDistrict } from "./RadioGroupDistrict";
import { Button } from "@mui/material";

export const RealEstateForm = ({
  lead,
  error,
  handleInputChange,
  handleMapChange,
  handleSubmit,
}) => {
  return (
    <div className="realEstateForm">
      <Stack spacing={1} sx={{ width: 1000 }}>
        <RadioGroupEstateType
          error={error}
          lead={lead}
          handleChange={handleInputChange}
        />
        <CountySelect
          selectedCounty={lead.region}
          handleChange={handleMapChange}
        />
        <RadioGroupDistrict
          error={error}
          lead={lead}
          handleChange={handleInputChange}
        />
      </Stack>
      <div className="formButton">
        <Button onClick={handleSubmit}>Další stránka</Button>
      </div>
    </div>
  );
};
