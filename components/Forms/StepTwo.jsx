import React from "react";
import { useForm } from "react-hook-form";
import useContextHook from "../../hooks/useContext";

export default function StepTwo({ prevFormStep }) {
  
  const { setFormValues } = useContextHook();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setFormValues(data);
  }

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("fbPass")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("installPass")} />
      {/* errors will return when field validation fails  */}
      {errors.installPass && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
