import { useContext } from "react";
import { ContactForm } from "./ContactForm";
import { RealEstateForm } from "./RealEstateForm";
import { usePriceCalculationForm } from "../hooks/usePriceCalculationForm";
import { ContextStore } from "../store/Context";

export const PriceCalculationForm = () => {
  const { priceCalculationForm } = useContext(ContextStore);

  const {
    lead,
    error,
    handleInputChange,
    handleMapChange,
    submitEstateForm,
    submitContactForm,
  } = usePriceCalculationForm();

  return (
    <div className="priceCalculationContactForm">
      {priceCalculationForm.page === 1 && (
        <RealEstateForm
          lead={lead}
          error={error}
          handleInputChange={handleInputChange}
          handleMapChange={handleMapChange}
          handleSubmit={submitEstateForm}
        />
      )}
      {priceCalculationForm.page === 2 && (
        <ContactForm
          lead={lead}
          error={error}
          handleChange={handleInputChange}
          handleSubmit={submitContactForm}
        />
      )}
    </div>
  );
};
