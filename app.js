var userdata_model = ""
var userdata_backend = ""
var usedata_optimi = {}
function loadDoc() {
    console.log("am intrat in loadDoc");
    userdata_model = JSON.parse(data);	
    userdata_backend = userdata_model
    refresh()   //going from BACKEND to FRONTEND
    calcOptieme() //generating optimeme
  }
  function refresh(){
  for (i=0; i<32;i++)
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
   calcOptieme()

  }

  function printMe(){
    console.log("printMe Updated data");
    for (i=0; i<32;i++)
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

  function calcOptieme(){
    var indexOptimi = 0;
    for(i=0;i<32;i++){
        if((i%4==0)||(i%4==1)){
          usedata_optimi[indexOptimi]=userdata_backend[i];
          indexOptimi++;
        }
      }   
    reoderOptieme() 
    console.log("calcOptimi print");
    for(i=0;i<16;i++){
      console.log(usedata_optimi[i].nume);
     } 
    }

   function reoderOptieme(){
    for(i=0;i<16;i++){
      if(i%4==1){
      temp = usedata_optimi[i]
      usedata_optimi[i]=usedata_optimi[i+2]
      usedata_optimi[i+2] = temp
      }
     }  
   } 

