import useContextHook from "../../hooks/useContext";

export const HeroSliderSingleCompo = ({data}) => {
  
  const { clickShowForm } = useContextHook();

  return (
    <>
      <div className="singleSliderWrapper">
        <style jsx>{`
          .singleSliderWrapper {
            height: 700px;
            background-image: url(${data?.img});
            background-repeat: no-repeat;
            background-position: right center;
            background-size: contain;
          }
          .sliderContent {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;
            height: 100%;
          }
          .heading {
            color: #101c33;
            font-size: 4rem;
            line-height: 5rem;
            margin-bottom: 1rem;
          }
          @media screen and (max-width: 992px) {
            .singleSliderWrapper {
              height: 500px;
              margin-top: 50px;
            }
            .heading {
              font-size: 2.4rem;
              line-height: 3rem;
            }
          }
          @media screen and (max-width: 600px) {
            .singleSliderWrapper {
              height: 400px;
              margin-top: 50px;
            }
            .heading {
              font-size: 1.6rem;
              line-height: 2.6rem;
            }
          }
        `}</style>
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-6 col-md-12 col-lg-6">
              <div className="sliderContent">
                <h1 className="heading">{data?.title}</h1>
                <button onClick={clickShowForm} className="btnprimary">
                  Data Analysics Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
