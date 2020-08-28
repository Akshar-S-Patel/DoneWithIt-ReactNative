import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

function SubmitButton({ title, path }) {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton
      title={title}
      onPress={() => {
        path();
        handleSubmit();
      }}
    />
  );
}

export default SubmitButton;
