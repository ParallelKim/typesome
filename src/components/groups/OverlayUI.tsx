import { Dispatch, SetStateAction, useRef, useState } from "react";
import { isMobile } from "../../utils";

const OverlayUI = ({ orbitView, setOrbitView }: { orbitView: boolean; setOrbitView: Dispatch<SetStateAction<boolean>> }) => {
  const [input, setInput] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <div
        key="lock_button"
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
            display: "flex",
          }}
          onClick={() => {
            setOrbitView(!orbitView);
          }}
        >
          <img style={{ width: "5vw", height: "5vw", objectFit: "fill" }} src={orbitView ? "icons/open.png" : "icons/lock.png"} />
        </button>
      </div>
      (
      {isMobile() && (
        <div
          key="mobile_keyboard"
          style={{
            position: "absolute",
            right: "0",
            top: "0",
            zIndex: 265,
          }}
        >
          <button
            style={{
              marginTop: "20px",
              marginRight: "20px",
              padding: 0,
              width: "10vw",
              height: "10vw",
              borderRadius: "25%",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              display: "flex",
            }}
            onClick={() => {
              if (!inputRef.current) {
                return;
              }
              input ? inputRef.current.focus() : inputRef.current.blur();
              setInput(!input);
            }}
          >
            <img style={{ width: "5vw", height: "5vw", objectFit: "fill" }} src={"icons/keyboard.png"} />
          </button>
        </div>
      )}
      )<input ref={inputRef}></input>
    </div>
  );
};

export default OverlayUI;
