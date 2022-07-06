import { FaSwatchbook } from "react-icons/fa";

const SpeedSheetFeature = ({ className, data }) => {
  return (
    <>
      <div className="container">
        <style jsx>{`
          .featureWrapper {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            justify-content: center;
            align-items: center;
            padding: 50px 0px;
          }
          .featureWrapper.reverse > .featureImage {
            order: 1;
          }
          .featureWrapper.reverse > .featureContent {
            order: 0;
          }
          .featureContent {
            align-self: flex-start;
            padding: 20px 50px;
          }
          .featureContentTitle {
            font-size: 41px;
            font-weight: 800;
            color: #1c355e;
            letter-spacing: 1.2px;
            padding: 10px 0px;
            font-family: "Poppins", sans-serif;
            // text-shadow: #f08c67 -4px 0, #1c355e 4px 0;
          }
          .featureContentSubTitle {
            font-size: 19px;
            color: #f08c67;
            font-weight: 500;
            font-family: "Open Sans", sans-serif;
          }
          .featureContentDesc {
            font-size: 16px;
            color: #838383;
            font-weight: 400;
            margin: 30px 0px;
            line-height: 25px;
            font-family: "Biryani", sans-serif;
          }
          .featureContentList {
            font-size: 25px;
            font-weight: 500;
            font-family: "Open Sans", sans-serif;
            text-transform: uppercase;
            color: #f08c67;
          }
          .featureContentList > div {
            margin: 15px 0px;
            padding: 4px 10px;
            transition: all 0.3s ease-in-out;
          }
          .featureContentList > div:hover {
            color: #1c355e;
            background-color: #d3d0d0;
            cursor: pointer;
          }
          .featuresVideo {
            width: 100%;
            height: 400px;
          }
          @media only screen and (max-width: 991px) {
            .featureWrapper {
              grid-template-columns: repeat(1, 1fr);
              padding: 30px 0px;
            }
            .featuresVideo {
              width: 100%;
              height: 300px;
            }
          }
        `}</style>
        <div className={`featureWrapper reverse`}>
          <div className={`featureImage`}>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className={`embed-responsive-item featuresVideo`}
                src="https://reachreporting.com/wp-content/uploads/2020/08/Spreadsheets.mp4"
                allowFullScreen
                controls={true}
                autoPlay={true}
              ></iframe>
            </div>
            {/* <video
              src="https://reachreporting.com/wp-content/uploads/2020/08/Spreadsheets.mp4"
              controls={true}
              autoPlay={true}
            /> */}
          </div>
          <div className={"featureContent"}>
            <h2 className={"featureContentTitle"}>
              Internal Smart Spreadsheet
            </h2>
            <h6 className={"featureContentSubTitle"}>
              Add any data, to any cell, from anywhere.
            </h6>
            <p className={"featureContentDesc"}>
              Regain the hours you spend manually inputting data. Quickly add
              data in just a click. Add QB, Xero, datasheet, or Google
              Spreadsheet data to create powerful, dynamic statements, metrics,
              dashboards, and reports. Produce insight that literally develops
              before your eyes.
            </p>
            <div className={"featureContentList"}>
              <div className="d-flex justify-content-start align-items-center py-2">
                <FaSwatchbook />
                <h6 className="m-0 ps-3">INTRO TO STATEMENTS</h6>
              </div>
              <div className="d-flex justify-content-start align-items-center py-2">
                <FaSwatchbook />
                <h6 className="m-0 ps-3">HOW TO BUILD A METRIC</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeedSheetFeature;
