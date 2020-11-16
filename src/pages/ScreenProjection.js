import React, { useState, useEffect } from "react";
import { db } from "../services/firebase";

const defaultScreen = {
  status: "black-screen",
  slide: "",
};

export default function ScreenProjection() {
  const [slide, setSlide] = useState(defaultScreen);

  useEffect(() => {
    let liveSlideRef = db.ref("live");
    liveSlideRef.on("value", (snap) => {
      setSlide(snap.val());
    });

    return () => liveSlideRef.off();
  });

  return (
    <div className={`fit-screen status-${slide?.status}`}>
      {slide?.status === "lyrics" ? (
        <div className="container caps-700 text-shadow">
          <h1>Projetor Tela</h1>
          <p>{slide?.slide}</p>
        </div>
      ) : null}
    </div>
  );
}
