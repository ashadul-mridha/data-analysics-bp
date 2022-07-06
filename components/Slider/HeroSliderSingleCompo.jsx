export const HeroSliderSingleCompo = ({data}) => {
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
        `}</style>
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-6">
              <div className="sliderContent">
                <h1 className="heading">{data?.title}</h1>
                <button className="btnprimary">Data Analysics Request</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
