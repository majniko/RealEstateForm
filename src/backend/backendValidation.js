const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validatePhone = (phone) => {
  return String(phone).match(/^(\+420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/);
};

exports.validate = (lead) => {
  if (lead.estateType === "") return false;
  if (lead.region === "") return false;
  if (lead.district === "") return false;
  if (lead.name === "") return false;
  if (!validatePhone(lead.phone)) return false;
  if (!validateEmail(lead.email)) return false;

  return true;
};
