import BPWaves from "../waves/BPWaves";

const FreeTrail = () => {
  
  return (
    <>
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
                <button className="btnprimary">Data Analysics Demo</button>
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
