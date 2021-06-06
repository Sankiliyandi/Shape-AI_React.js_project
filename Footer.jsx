import React from "react";
function Footer(){
  var currentYear=new Date().getFullYear();  
  return (<footer>
      <P>Copyright@{currentYear}</P>

    </footer>
  );
}
export default Footer;