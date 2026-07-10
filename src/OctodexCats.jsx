import React from "react";
import sponsortocat from "./images/sponsortocat.png";
import boxertocat from "./images/boxertocat.jpg";
import hula_loop_cat from "./images/hula_loop_cat.gif";
import puddle_jumper_cat from "./images/puddle_jumper_cat.jpg";
import scubatocat from "./images/scubatocat.png";
import universetocat from "./images/universetocat.png";
import surftocat from "./images/surftocat.png";
import vinyltocat from "./images/vinyltocat.png";
import dinotocat from "./images/dinotocat.png";

import Cat from "./Cat";

function OctodexCats() {
  const Cats = [
    //3rd filmtocats
    {
      number: "#156:",
      name: "Sponsortocat",
      imageUrl: sponsortocat,
      imageAlt: "Sponsortocat octodex cat",
    },
    {
      number: "#139:",
      name: "Boxertocat",
      imageUrl: boxertocat,
      imageAlt: "Hula Loop Cat octodex cat",
    },
    {
      number: "#137:",
      name: "Hula Loop Cat",
      imageUrl: hula_loop_cat,
      imageAlt: "Hula Loop Cat octodex cat",
    },
    {
      number: "#140:",
      name: "Puddle Jumper Cat",
      imageUrl: puddle_jumper_cat,
      imageAlt: "Puddle Jumper Cat octodex cat",
    },
    {
      number: "#136:",
      name: "Scubatocat",
      imageUrl: scubatocat,
      imageAlt: "Scubatocat octodex cat",
    },
    {
      number: "#157:",
      name: "Universetocat",
      imageUrl: universetocat,
      imageAlt: "Universe octodex cat",
    },
    {
      number: "#138:",
      name: "Surftocat",
      imageUrl: surftocat,
      imageAlt: "Surftocat octodex cat",
    },
    {
      number: "#135:",
      name: "Vinyltocat",
      imageUrl: vinyltocat,
      imageAlt: "Vinyltocat octodex cat",
    },
    {
      number: "#128:",
      name: "Dinotocat",
      imageUrl: dinotocat,
      imageAlt: "Dinotocat octodex cat",
    },
  ];

  return (
    <>
      <section className="title-section">
        <h2 className="favorite-cats">My Favorite Octodex Cats</h2>
      </section>

      <ul className="photo-container">
        {Cats.map((cat, key) => {
          return (
            <Cat
              number={cat.number}
              name={cat.name}
              imageUrl={cat.imageUrl}
              imageAlt={cat.imageAlt}
              key={key}
            />
          );
        })}
      </ul>
    </>
  );
}

export default OctodexCats;