import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import useContextHook from "../../hooks/useContext";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { SuceesFullyMessage } from "./SuceesFullyMessage";

export const DataAnalysicsForm = () => {
  const { clickShowForm } = useContextHook();

  const [formStep, setFormStep] = useState(0);

  const nextFormStep = () => setFormStep( (prevState) => prevState + 1);

  const prevFormStep = () => setFormStep((prevState) => prevState - 1);

  const { formData } = useContextHook();

  // console.log(formData);
  return (
    <>
      <div className="multistepFormWrapper">
        <style jsx>{`
          .multistepFormWrapper {
            overflow-y: scroll;
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
            display: flex;
            justify-content: space-between;
            padding: 15px 20px;
            border-radius: 5px;
            border-bottom: 1px solid #e9e9e9;
            box-shadow: 12px 0 15px -4px rgb(31 73 125 / 50%),
              -12px 0 8px -4px rgb(31 73 125 / 50%);
          }
          .form-heading h3 {
            font-size: 3.2rem;
            color: #2978db;
          }
          .closeBtn {
            font-size: 3.2rem;
            color: #222;
            cursor: pointer;
          }
        `}</style>
        <div className="multiStepForm">
          <div className="formHeader container">
            <div className="form-heading">
              <h3 className="heading">Data Analysics Request</h3>
            </div>
            <div onClick={clickShowForm} className="closeBtn">
              <AiFillCloseCircle />
            </div>
          </div>
          {formStep == 0 && <StepOne nextFormStep={nextFormStep} />}
          {formStep == 1 && (
            <StepTwo prevFormStep={prevFormStep} nextFormStep={nextFormStep} />
          )}
          {formStep == 2 && <SuceesFullyMessage />}
        </div>
      </div>
    </>
  );
};
