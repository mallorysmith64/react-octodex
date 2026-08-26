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
import labtocat from "./images/labtocat.png";
import droidtocat from "./images/droidtocat.png";
import electrocat from "./images/electrocat.png";
import snowoctocat from "./images/snowoctocat.png";
import dojocat from "./images/dojocat.jpg";
import jetpacktocat from "./images/jetpacktocat.png";
import stormtroopocat from "./images/stormtroopocat.png";

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
      imageAlt: "Boxertocat octodex cat",
    },
    {
      number: "#137:",
      name: "Hulaloopcat",
      imageUrl: hula_loop_cat,
      imageAlt: "Hula Loop Cat octodex cat",
    },
    {
      number: "#140:",
      name: "Puddlejumpercat",
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
    // additional cats pulled from octodex.github.com
    {
      number: "#104:",
      name: "Labtocat",
      imageUrl: labtocat,
      imageAlt: "Labtocat octodex cat",
    },
    {
      number: "#78:",
      name: "Droidtocat",
      imageUrl: droidtocat,
      imageAlt: "Droidtocat octodex cat",
    },
    {
      number: "#71:",
      name: "Electrocat",
      imageUrl: electrocat,
      imageAlt: "Electrocat octodex cat",
    },
    {
      number: "#68:",
      name: "Cowsnowcat",
      imageUrl: snowoctocat,
      imageAlt: "Cowsnowcat octodex cat",
    },
    {
      number: "#66:",
      name: "Dojocat",
      imageUrl: dojocat,
      imageAlt: "Dojocat octodex cat",
    },
    {
      number: "#116:",
      name: "Jetpacktocat",
      imageUrl: jetpacktocat,
      imageAlt: "Jetpacktocat octodex cat",
    },
    {
      number: "#84:",
      name: "Stormtroopocat",
      imageUrl: stormtroopocat,
      imageAlt: "Stormtroopocat octodex cat",
    },
  ];

  return (
    <>
      <section className="title-section">
        <h2 className="favorite-cats">My Favorite Octodex Cats</h2>
      </section>

      <ul className="photo-container">
        {Cats.map((cat) => {
          return (
            <Cat
              number={cat.number}
              name={cat.name}
              imageUrl={cat.imageUrl}
              imageAlt={cat.imageAlt}
              key={cat.number}
            />
          );
        })}
      </ul>
    </>
  );
}

export default OctodexCats;