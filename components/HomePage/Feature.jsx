import Image from "next/image";
import { FaSwatchbook } from "react-icons/fa";

const Feature = ({ className, data }) => {
  return (
    <>
      <div className="container-md">
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
            font-family: "Poppins", sans-serif;
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

          @media only screen and (max-width: 991px) {
            .featureWrapper {
              grid-template-columns: repeat(1, 1fr);
              padding: 30px 0px;
            }
          }
        `}</style>
        <div className={`featureWrapper ${className}`}>
          <div className={`featureImage`}>
            <Image
              alt="feature Image"
              src={data.imgUrl}
              layout="responsive"
              height="100%"
              width="100%"
              objectFit="cover"
            />
          </div>
          <div className={"featureContent"}>
            <h2 className={"featureContentTitle"}>{data.title}</h2>
            <h6 className={"featureContentSubTitle"}>{data.subTitle}</h6>
            <p className={"featureContentDesc"}>{data.desc}</p>
            <div className={"featureContentList"}>
              {data.list.map((item, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-start align-items-center py-2"
                >
                  <FaSwatchbook />
                  <h6 className="m-0 ps-3">{item}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
