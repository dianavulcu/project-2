var userdata = ""
function loadDoc() {
    console.log("am intrat in loadDoc");
    userdata = JSON.parse(data);	
    refresh()
  }
  function refresh(){
  for (i=0; i<8;i++)
  {
    console.log(userdata[i].nume);
    document.getElementById("testme"+i).innerHTML = userdata[i].nume;
  }
}
  function modifyMe() {
    console.log("am intrat in modifyMe");
    userdata[0].nume = "Diana somnoroasa"
    refresh()
  }
  
  function resetMe() {
    console.log("am intrat in resetMe");
    $( "#sortable" ).sortable( "cancel" );
    //$( "#sortable" ).sortable( "refresh" );
  }