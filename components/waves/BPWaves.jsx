const BPWaves = () => {
  return (
    <div className="waveswrapper">
      <style jsx>{`
        .waveswrapper {
          position: relative;
          width: 100%;
          height: 150px;
          margin-bottom: -1px;
        }
        .waveswrapper:before {
          position: absolute;
          content: "";
          width: 100%;
          height: 100%;
          background-color: #fff !important;
          clip-path: polygon(100% 0, 0 0, 0 100%);
        }
        .waveswrapper:after {
          position: absolute;
          content: "";
          width: 100%;
          height: 100%;
          background-color: #fff !important;
          clip-path: polygon(100% 0, 0 0, 0 100%);
          background-color: #333e63 !important;
          clip-path: polygon(100% 0, 0 100%, 100% 100%);
        }
      `}</style>
    </div>
  );
};

export default BPWaves;
