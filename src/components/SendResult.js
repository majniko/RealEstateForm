export const SendResult = ({ sendStatus }) => {
  return (
    <div className="sendResult">
      {sendStatus === "success" && (
        <h2>
          Vaše data byla úspěšně odeslána, budeme Vás obratem kontaktovat.
        </h2>
      )}
      {sendStatus === "error" && (
        <h2>Něco se při odesílání pokazilo. Prosím, zkuste to znovu.</h2>
      )}
    </div>
  );
};
