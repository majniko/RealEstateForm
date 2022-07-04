import axios from "axios";
import { useContext } from "react";
import { ContextStore } from "../store/Context";

export const usePostRealEstate = () => {
  const { setState } = useContext(ContextStore);

  const postRealEstate = ({ lead }) => {
    axios
      .post("http://localhost:3001/lead", lead)
      .then(() =>
        setState((old) => ({
          ...old,
          priceCalculationForm: {
            ...old.priceCalculationForm,
            page: 3,
            sendStatus: "success",
          },
        }))
      )
      .catch((response) => {
        console.log("error", response);
        setState((old) => ({
          ...old,
          priceCalculationForm: {
            ...old.priceCalculationForm,
            page: 3,
            sendStatus: "error",
          },
        }));
      });
  };

  return postRealEstate;
};
