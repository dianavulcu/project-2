var userdata_model = ""
var userdata_backend = ""
function loadDoc() {
    console.log("am intrat in loadDoc");
    userdata_model = JSON.parse(data);	
    userdata_backend = userdata_model
    refresh()
  }
  function refresh(){
  for (i=0; i<8;i++)
  {
    console.log(userdata_model[i].nume);
    document.getElementById("testme"+i).innerHTML = userdata_model[i].nume;
  }
}
  function modifyMe() {
    console.log("am intrat in modifyMe");
    userdata_model[0].nume = "Diana somnoroasa"
    refresh()
  }
  
  function resetMe() {
    console.log("am intrat in resetMe");
    $( "#sortable" ).sortable( "cancel" );
    //$( "#sortable" ).sortable( "refresh" );
  }

  function applyPermuttation(element_id, oldIndex, newIndex){
    if (oldIndex > newIndex) {
      temp = userdata_backend[oldIndex]
      permutteAlltoTheRight(oldIndex,newIndex)
      userdata_backend[newIndex] = temp
    }
    else{
      temp = userdata_backend[oldIndex]
      permutteAlltoTheLeft(oldIndex,newIndex)
      userdata_backend[newIndex] = temp
    }
  
    console.log("am intrat in applyPermuttation");
    alert('id of Item moved = '+element_id+' old position = '+oldIndex+' new position = '+newIndex);
   printMe()


  }

  function printMe(){
    console.log("printMe Updated data");
    for (i=0; i<8;i++)
    {
      console.log(userdata_backend[i].nume);

    }
  }

  function permutteAlltoTheLeft(oldIndex, newIndex){
    for (i=oldIndex; i<newIndex;i++)
    {
      userdata_backend[i]=userdata_backend[i+1]
    }
  }

  function permutteAlltoTheRight(oldIndex, newIndex){
    for (i=oldIndex;i>newIndex;i--)
    {
      userdata_backend[i]=userdata_backend[i-1]
    }

  }