import React from "react";

export default function ScreenProjection() {
  return (
    <div className="fullscreen">
      <div className="container">
        <h1>Projetor Tela</h1>
        <p className="only-fullscreen">Fullscreen</p>
        <p className="only-standalone">Standalone</p>
        <p className="only-minimal-ui">Minimal UI</p>
        <p className="only-browser">Browser</p>
      </div>
    </div>
  );
}
