import { db } from "../services/firebase";

export default function Control() {
  function setLiveBlackScreen() {
    db.ref("live").update({
      status: "black-screen",
    });
  }

  function setLiveSlide(slide) {
    db.ref("live").update({
      status: "lyrics",
      slide: slide,
    });
  }

  return (
    <div className="fit-screen">
      <div className="container">
        <h1>Controle</h1>
        <button
          className="btn btn-lg btn-primary mb-2 mr-2"
          onClick={() => setLiveBlackScreen()}
        >
          Tela Preta
        </button>
        <button
          className="btn btn-lg btn-primary mb-2 mr-2"
          onClick={() => setLiveSlide("")}
        >
          Slide Vazio
        </button>
        <button
          className="btn btn-lg btn-primary mb-2 mr-2"
          onClick={() => setLiveSlide("Slide 1")}
        >
          Slide 1
        </button>
        <button
          className="btn btn-lg btn-primary mb-2"
          onClick={() => setLiveSlide("Slide 2")}
        >
          Slide 2
        </button>
        {/* <nav>
            <ul>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
                <li>Link 4</li>
                <li>Link 5</li>
                <li>Link 6</li> 
                <li>Link 7</li> 
                <li>Link 8</li>
                <li>Link 9</li>
                <li>Link 10</li>
                <li>Link 11</li>
                <li>Link 13</li>
                <li>Link 13</li>

            </ul>
        </nav> */}
      </div>
    </div>
  );
}
