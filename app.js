var userdata_model = ""
var userdata_backend = ""
var usedata_optimi = {}
var usedata_quatrieme = {}
var usedata_semi = {}
function loadDoc() {
    console.log("am intrat in loadDoc");
    userdata_model = JSON.parse(data);	
    userdata_backend = userdata_model
    calcOptieme() //generating optimeme
    calcQuatrieme()
    applyOnStartupGroups()   //applying first time groups from json file
    refreshBackend()
  }
  function applyOnStartupGroups() {
  for (i=0; i<32;i++)
  {
    console.log(userdata_model[i].nume);
    document.getElementById("testme"+i).innerHTML = userdata_model[i].nume;
  }
  }

  function refreshBackend(){
    for (i=0; i<16;i++)   
    {
      console.log(usedata_optimi[i].nume);
      document.getElementById("optimi"+i).innerHTML = usedata_optimi[i].nume;
    }
    for (i=0; i<8;i++)   
    {
      console.log(usedata_quatrieme[i].nume);
      document.getElementById("quatri"+i).innerHTML = usedata_quatrieme[i].nume;
    }
}

  
  function resetMe() {
    console.log("am intrat in resetMe");
    $( "#sortable" ).sortable( "cancel" );
    $( "#sortable1" ).sortable( "cancel" );
    $( "#sortable2" ).sortable( "cancel" );
    $( "#sortable3" ).sortable( "cancel" );
    $( "#sortable4" ).sortable( "cancel" );
    $( "#sortable5" ).sortable( "cancel" );
    $( "#sortable6" ).sortable( "cancel" );
    $( "#sortable7" ).sortable( "cancel" );
    loadDoc();
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
   calcQuatrieme()
   refreshBackend()
  

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

   function calcQuatrieme(){
    var indexQuatrieme = 0;
    for(i=0;i<16;i++){
        if(i%2==0){
          usedata_quatrieme[indexQuatrieme]=usedata_optimi[i];
          indexQuatrieme++;
        }
      }   
    reoderQuatrieme() 
    console.log("calcQuatrieme print");
    for(i=0;i<8;i++){
      console.log(usedata_quatrieme[i].nume);
     } 
    }

    function reoderQuatrieme(){
      for(i=0;i<8;i++){
        if(i%4==1){
        temp = usedata_quatrieme[i]
        usedata_quatrieme[i]=usedata_quatrieme[i+1]
        usedata_quatrieme[i+1] = temp
        }
      }  
     } 

     function calcSemiFinal(){ //Todo
      var indexSemi = 0;
      for(i=0;i<8;i++){
          if(i%2==0){
            usedata_semi[indexSemi]=usedata_quatrieme[i];
            indexSemi++;
          }
        }   
      }

