import React from "react";

function Note() {
  var currYear = new Date().getFullYear();

  return (
    <div className="note">
      <h1>Javascript and React.js</h1>
      <p>
        This was an amazing bootcamp taken up by Shaurya Sinha. We covered
        everything from Scratch including JavaScript React.js,HTML.
      </p>
    </div>
  );
}

export default Note;
