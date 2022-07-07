import { useState } from "react";
import useContextHook from "../../hooks/useContext";
import { DataAnalysicsForm } from "../Forms/DataAnalysicsForm";
import BPWaves from "../waves/BPWaves";

const FreeTrail = () => {
  
  const { clickShowForm } = useContextHook();

  const { showForm } = useContextHook();
  return (
    <>
      {showForm && <DataAnalysicsForm />}
      <BPWaves />
      <div className="freetrailwrapper">
        <style jsx>{`
          .freetrailwrapper {
            padding: 40px 0px 30px 0px;
            background-color: #333e63;
          }
        `}</style>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex flex-column align-items-center flex-lg-row justify-content-around">
                <button onClick={clickShowForm} className="btnprimary">
                  Data Analysics Demo
                </button>
                <button className="btnsecondary">
                  Schedule Your Consultancy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeTrail;
