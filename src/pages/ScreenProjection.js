import React, { useState, useEffect } from "react";
import { db } from "../services/firebase";

export default function ScreenProjection() {
  const [slide, setSlide] = useState(null);

  useEffect(() => {
    let liveSlideRef = db.ref("live");
    liveSlideRef.on("value", (snap) => {
      setSlide(snap.val())
    });

    return () => liveSlideRef.off();
  });

  return (
    <div className="fit-screen bg-black">
      <div className="container caps-700 text-shadow">
        <h1>Projetor Tela</h1>
        <p>{slide?.slide}</p>
      </div>
    </div>
  );
}
