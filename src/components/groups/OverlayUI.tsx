import { Dispatch, SetStateAction } from "react";

const OverlayUI = ({ orbitView, setOrbitView }: { orbitView: boolean; setOrbitView: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: "0",
        top: "0",
        zIndex: 265,
      }}
    >
      <button
        style={{
          marginTop: "20px",
          marginLeft: "20px",
          padding: 0,
          width: "10vw",
          height: "10vw",
          borderRadius: "25%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
        onClick={() => {
          setOrbitView(!orbitView);
        }}
      >
        <img style={{ width: "5vw", height: "5vw", objectFit: "fill" }} src={orbitView ? "icons/open.png" : "icons/lock.png"} />
      </button>
    </div>
  );
};

export default OverlayUI;
