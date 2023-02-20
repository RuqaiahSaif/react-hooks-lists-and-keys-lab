import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (<nav>{/* display an <a> tag for each link here */}
  {links.map((l)=>(
    <a  kry={l} href={"#"+l}>{l}</a>
  ))
  }
  </nav>)
}

export default NavBar;
