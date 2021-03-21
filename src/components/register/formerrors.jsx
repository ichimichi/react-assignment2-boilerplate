import React from "react";
import { Alert } from "react-bootstrap";

const FormErrors = ({ errors }) => {
  return (
    <div>
      {Object.keys(errors).map((fieldname, i) => {
        if (errors[fieldname].length > 0) {
          return (
            <Alert variant="danger" key={i}>
              {fieldname.toUpperCase()} {errors[fieldname]}
            </Alert>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default FormErrors;
