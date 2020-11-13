import React from "react";

const NavData = (props) => {
  // console.log(props.toShow)
  return (
    <>
      {props.toShow === "Details" && (
        <div>
          <h3>The standard passage, used since the 1500s</h3>
          <p>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>

          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>

          <h3>
            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
            Cicero in 45 BC
          </h3>
          <p>
            Sound of Marshall, unplugs the chords, and takes the show on the
            road.
          </p>
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
          <p>
            The FM radio is perhaps gone for good, the assumption apparently
            being that the jury has ruled in favor of streaming over the
            internet. The IR blaster is another feature due for retirement – the
            S6 had it, then the Note5 didn’t, and now with the S7 the trend is
            clear.
          </p>
        </div>
      )}
      {props.toShow === "More Information" && (
        <div>
          <h3>No data to show</h3>
        </div>
      )}
      {props.toShow === "Reviews" && (
        <div>
          <h3>No Reviews Yet</h3>
        </div>
      )}
    </>
  );
};

export default NavData;
