const Party = (props) => {
  return (
    <div className="container-fluid">
      <div className="party-gif-container">
        <h1 className="alert alert-success text-center mt-3">PARTY TIME!</h1>
        <iframe
          title="party-gif"
          src="https://giphy.com/embed/kHmVOy84g8G6my09fu"
          width="100%"
          height="100%"
          style={{ position: "absolute" }}
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen></iframe>
      </div>
      <p className="text-center">
        <a href="https://giphy.com/gifs/thefreshprinceofbelair-season-3-fresh-prince-of-bel-air-the-kHmVOy84g8G6my09fu">
          via GIPHY
        </a>
      </p>
    </div>
  );
};

export default Party;
