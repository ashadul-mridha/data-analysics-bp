import useContextHook from "../../hooks/useContext";

export const SuceesFullyMessage = () => {
    
  const { clickShowForm } = useContextHook();

  return (
    <>
      <div className="container my-5">
        <style jsx>{`
          .submit-button {
            padding: 12px 0px;
            font-size: 2rem;
            font-weight: 400;
            text-align: center;
            color: #fff;
            background-color: #007bff;
            border: 1px solid #007bff;
            width: 100%;
            margin: 20px 0px 5px 0px;
          }
          .submit-button:hover {
            background-color: #09a2ad;
            border: 1px solid #09a2ad;
          }
        `}</style>
        <div className="row">
          <div className="col-lg-12">
            <h3 className="text-success text-center">
              Thanks for submitting your request.
            </h3>
            <h3 className="text-success text-center">
              Please check your email for next step and further update.
            </h3>
          </div>

          <div className="col-lg-12">
            <button onClick={() => clickShowForm()} className="submit-button">
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
