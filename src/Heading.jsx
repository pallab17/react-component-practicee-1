import React from "react";
function Heading() {
  const date = new Date();
  const currentTime = date.getHours();

  let greeting;

  const customStyle = {
    color: ""
  };

  if (currentTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Night";
    customStyle.color = "blue";
  }

  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

export default Heading;

/*
return keyword r por jeita amra likhchi sudhu otai screen e user ra dekhte pabe

return keyword e opore jeita ache seita sudhu developer der jonno like e,g. -->

return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );

  screen e user ra sudhu h1 takei dekhte pabe as ei code ta return keyword r bhetore ache

  eibar 

    const date = new Date();
  const currentTime = date.getHours();

  let greeting;

  const customStyle = {
    color: ""
  };

  if (currentTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Night";
    customStyle.color = "blue";
  }
 
  47-65 line r code ta screen e dekhte pabe na keu
  as eiguno hocche rough work for developers like us
  rough work = je code ta likhle pore tobei return r bhetore r code ta
  user ra dekhte pabe
  i.e. return r bhetore r code === result
  aar return r opore r code === preparation
  


*/
