/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import {
  HiDotsCircleHorizontal,
  HiOutlineDotsCircleHorizontal,
} from "react-icons/hi";
import { FaRegCheckCircle } from "react-icons/fa";

const Feature = ({ className, data }) => {
  return (
    <>
      <div className="featureContainer">
        <style jsx>{`
          .featureContainer {
            background: #f4fbff;
          }
          .featureWrapper {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            justify-content: center;
            align-items: center;
            padding: 50px 0px;
          }
          .featureImage img {
            height: 300px;
            width: 100%;
            object-fit: contain;
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
            font-size: 4rem;
            font-weight: 600;
            color: #000000;
            letter-spacing: 1.2px;
            padding: 10px 0px;
            font-family: "Poppins", sans-serif;
            // text-shadow: #f08c67 -4px 0, #1c355e 4px 0;
          }
          .featureContentSubTitle {
            font-size: 2rem;
            color: #212529;
            font-weight: 500;
            font-family: "Open Sans", sans-serif;
          }
          .featureContentDesc {
            font-size: 1.4rem;
            color: #212529;
            font-weight: 400;
            margin: 30px 0px;
            line-height: 25px;
            font-family: "Biryani", sans-serif;
          }
          .featureContentList h6 {
            font-size: 1.6rem;
            font-weight: 500;
            font-family: "Poppins", sans-serif;
            text-transform: uppercase;
            color: #000000;
            padding-top: 5px;
          }
          .featureContentList > div {
            margin: 2px 0px;
            padding: 4px 10px;
            transition: all 0.3s ease-in-out;
            cursor: pointer;
          }
          .featureContentList .icon {
            color: #0096ff;
            font-size: 1.7rem;
          }

          @media only screen and (max-width: 991px) {
            .featureWrapper {
              grid-template-columns: repeat(1, 1fr);
              padding: 30px 0px;
            }
            .featureImage img {
              height: 250px;
            }
          }
        `}</style>
        <div className={`container-md featureWrapper ${className}`}>
          <div className={`featureImage`}>
            <img
              alt="feature Image"
              src={data.imgUrl}
            />
          </div>
          <div className={"featureContent"}>
            <h2 className={"featureContentTitle"}>{data.title}</h2>
            <h6 className={"featureContentSubTitle"}>{data.subTitle}</h6>
            {/* <p className={"featureContentDesc"}>{data.desc}</p> */}
            <div className={"featureContentList"}>
              {data.list.map((item, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-start align-items-center py-2"
                >
                  <div className="icon">
                    <FaRegCheckCircle />
                  </div>
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
