var userdata = ""
function loadDoc() {
    console.log("am intrat in loadDoc");
    userdata = JSON.parse(data);	
    for (i=0; i<4;i++)
      {
        document.getElementById("testme"+i).innerHTML = userdata[i].nume;
      }

  }