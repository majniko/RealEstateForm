import axios from "axios";

export const usePostRealEstate = () => {
  const postRealEstate = ({ lead }) => {
    console.log("send got to hook", lead);
    axios
      .post("http://localhost:3001/lead", lead)
      .then((response) => console.log(response))
      .catch((response) => console.log("error", response));
  };

  return postRealEstate;
};
