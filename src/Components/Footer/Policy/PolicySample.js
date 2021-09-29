import React from "react";
import classes from "./PolicySample.module.css";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

function PolicySample(props) {
  return (
    <Fragment>
      <div className={classes.center} onClick={props.onClose}>
        <div className={classes.policy}>
          <div className={classes.x}>
            <FontAwesomeIcon onClick={props.onClose} icon={faTimesCircle} />
          </div>
          <h3>Our policy</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            efficitur faucibus commodo. Donec consectetur sem et nisl sagittis,
            in ultrices erat fringilla. Proin elementum orci nisl, in ultricies
            justo auctor sit amet. Maecenas eget nulla quis nisl fringilla
            imperdiet. Integer viverra, nisi eget accumsan dapibus, ante risus
            convallis erat, a gravida magna massa ut enim. Nullam laoreet odio
            id sem placerat, ac ullamcorper lorem hendrerit. Sed ut enim
            venenatis, tincidunt ex vel, placerat quam. Aenean semper, risus at
            rhoncus sagittis, sapien lorem facilisis lorem, ut interdum augue mi
            vitae leo. Praesent a lectus nisl. Proin ut cursus justo. Duis ut
            erat tincidunt, condimentum sem non, fringilla odio.
          </p>
          <p>
            Aliquam erat volutpat. Aliquam a neque ex. Maecenas finibus nec
            tortor vitae mollis. Fusce blandit sodales blandit. Suspendisse quis
            ex et odio dapibus ornare. Quisque luctus mi orci, et ornare arcu
            condimentum in. Fusce accumsan eros in justo rutrum egestas.
            Vestibulum interdum elementum ipsum, eu cursus neque ultricies non.
            Donec placerat leo vitae libero lacinia, at hendrerit nibh mollis.
            Donec porttitor nunc vitae lectus dignissim, nec maximus ipsum
            fermentum. Morbi convallis mi sed augue aliquet, in scelerisque
            justo iaculis. Suspendisse congue, nibh at porta porttitor, nisl
            risus sagittis nisi, sed sollicitudin erat urna vel sapien. Aenean
            interdum convallis tellus nec facilisis. In hac habitasse platea
            dictumst.
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default PolicySample;
