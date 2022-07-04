import { useContext, useState } from "react";
import { ContextStore } from "../store/Context";
import { validateEmail, validatePhone } from "../utils/validation";
import { usePostRealEstate } from "./usePostRealEstate";

const initialErrorState = {
  estateType: false,
  district: false,
  name: false,
  phone: false,
  email: false,
};

export const usePriceCalculationForm = () => {
  const { setState } = useContext(ContextStore);
  const [lead, setLead] = useState({
    estateType: "",
    region: "",
    district: "",
    name: "",
    phone: "",
    email: "",
  });
  const [error, setError] = useState(initialErrorState);

  const postRealEstate = usePostRealEstate();

  const handleInputChange = (inputName) => (event) => {
    setLead({ ...lead, [inputName]: event.target.value });
    console.log({ lead });
  };

  const handleMapChange = (name) => () => {
    setLead({ ...lead, region: name, district: "" });
    console.log({ lead });
  };

  const submitEstateForm = () => {
    let validationError = initialErrorState;

    if (lead.estateType === "")
      validationError = { ...validationError, estateType: true };

    if (lead.region === "" || lead.district === "")
      validationError = { ...validationError, district: true };

    setError(validationError);

    if (validationError !== initialErrorState) return;

    setState((old) => ({
      ...old,
      priceCalculationForm: { ...old.priceCalculationForm, page: 2 },
    }));
  };

  const submitContactForm = () => {
    let validationError = initialErrorState;

    if (lead.name === "") validationError = { ...validationError, name: true };

    if (!validatePhone(lead.phone))
      validationError = { ...validationError, phone: true };

    if (!validateEmail(lead.email))
      validationError = { ...validationError, email: true };

    setError(validationError);

    if (validationError !== initialErrorState) return;

    setState((old) => ({
      ...old,
      priceCalculationForm: {
        ...old.priceCalculationForm,
        estateProps: lead,
      },
    }));
    console.log("trying to send");
    postRealEstate({ lead });
  };

  return {
    lead,
    error,
    handleInputChange,
    handleMapChange,
    submitEstateForm,
    submitContactForm,
  };
};
