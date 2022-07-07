import { useState } from "react";
import useContextHook from "../../hooks/useContext";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { Container, Typography } from "@mui/material";

export const DataAnalysicsForm = () => {

  const [formStep, setFormStep] = useState(1);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  const { formData } = useContextHook();

  // console.log(formData);
  return (
    <>
      <div className="multistepFormWrapper">
        <style jsx>{`
          .multistepFormWrapper {
            min-height: 100vh;
            width: 100vw;
            z-index: 999;
            background: #0404044d;
            position: fixed;
            top: 0;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .multiStepForm {
            background: #fff;
            margin: 50px 90px;
            width: 80%;
          }
          .formHeader {
            padding: 10px 20px;
            border-bottom: 1px solid #e9e9e9;
            box-shadow: 12px 0 15px -4px rgb(31 73 125 / 50%),
              -12px 0 8px -4px rgb(31 73 125 / 50%);
          }
        `}</style>
        <div className="multiStepForm">
          <div className="formHeader">
            <Container>
              <Typography variant="h3">Data Analysics Request</Typography>
            </Container>
          </div>
          {formStep === 1 && <StepOne nextFormStep={nextFormStep} />}
          {formStep === 2 && <StepTwo prevFormStep={prevFormStep} />}
        </div>
      </div>
    </>
  );
};
