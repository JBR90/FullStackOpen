import React from "react";

const Notification = ({ errorMessage, message }) => {
  if (errorMessage !== null) {
    return <p className="error">{errorMessage}</p>;
  } else if (message !== null) {
    return <p className="message">{message}</p>;
  } else {
    return null;
  }

  //   if (message === null) {
  //     return null;
  //   }

  //   f
  //   return (
  //     <div>
  //       <p className="error">{message}</p>
  //       <p className="message">{errorMessage}</p>
  //     </div>
  //   );
};

export default Notification;
