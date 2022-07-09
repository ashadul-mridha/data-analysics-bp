import { useForm } from "react-hook-form";
import useContextHook from "../../hooks/useContext";

export default function StepOne({ nextFormStep }) {
  const { setFormValues } = useContextHook();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setFormValues(data);
    nextFormStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <style jsx>{`
        .form-input-group {
          font-size: 15px;
          font-weight: 400;
        }
        .form-input-group label {
          color: #0096ff;
          padding: 10px 0px 0px 0px;
        }
        .form-input-group input {
          border: none;
          border-bottom: 2px solid #222;
          padding: 10px 0px;
          font-size: 1.6rem;
        }
        .form-input-group input:focus {
          border: none;
          box-shadow: none;
          border-bottom: 2px solid #0096ff;
        }
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
      <div className="container my-3">
        <div className="row gx-5 gy-2">
          <div className="col-lg-6">
            <div className="form-group form-input-group">
              <label htmlFor="first-name">First Name</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group form-input-group">
              <label htmlFor="lname">Last Name</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group form-input-group">
              <label htmlFor="phone">Phone</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group form-input-group">
              <label htmlFor="email">Working Email</label>
              <input type="email" className="form-control" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group form-input-group">
              <label htmlFor="BName">Company Bussiness Name</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group form-input-group">
              <label htmlFor="CIndustry">Company Industry</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-lg-12">
            <button type="submit" className="submit-button">
              Create Account And Continue
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
