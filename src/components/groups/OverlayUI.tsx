import { Dispatch, SetStateAction } from "react";

const OverlayUI = ({ orbitView, setOrbitView }: { orbitView: boolean; setOrbitView: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: "0",
        bottom: "0",
        zIndex: 265,
      }}
    >
      <button
        style={{
          marginLeft: "20px",
          marginBottom: "20px",
          width: "150px",
          height: "150px",
          borderRadius: "25%",
          alignContent: "center",
          justifyContent: "center",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
        onClick={() => {
          setOrbitView(!orbitView);
        }}
      >
        <img style={{ width: "100px", height: "100px", objectFit: "fill" }} src={orbitView ? "icons/open.png" : "icons/lock.png"} />
      </button>
    </div>
  );
};

export default OverlayUI;
