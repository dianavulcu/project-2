var userdata = ""
function loadDoc() {
    console.log("am intrat in loadDoc");
    userdata = JSON.parse(data);	
    for (i=0; i<8;i++)
      {
        console.log(userdata[i].nume);
        document.getElementById("testme"+i).innerHTML = userdata[i].nume;
      }

  }
  function modifyMe() {
    console.log("am intrat in modifyMe");
    userdata[0].nume = "gigi"

  }