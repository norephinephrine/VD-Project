$(document).ready(function(){


     var urlParams = new URLSearchParams(window.location.search);
     var id= urlParams.get('id');
     var workout= urlParams.get('workout');

     var test=localStorage.getItem("schedule_data");

     if(test==null){
         j_obj={
             training1:[{"day":0,"time":"16.00-18.00","left":5,id:0},{"day":2,"time":"16.00-18.00","left":20,id:1},{"day":4,"time":"10.00-12.00","left":1,id:2},{"day":0,"time":"13.00-15.00","left":0,id:3}],
             training2:[{"day":1,"time":"13.00-14.00","left":4,id:0},{"day":1,"time":"14.00-16.00","left":1,id:1},{"day":1,"time":"16.00-18.00","left":0,id:2},{"day":5,"time":"11.00-13.00","left":0,id:3}]
         }
         localStorage.setItem("schedule_data",JSON.stringify(j_obj));
         test=localStorage.getItem("schedule_data");
     }


     var user_data=localStorage.getItem("user_data");

     if(user_data==null){
         j_obj={
             reservation:[{id:0,training:"training1"}]
         }
         localStorage.setItem("user_data",JSON.stringify(j_obj));
         user_data=localStorage.getItem("user_data");
     }






     var user_reservations=JSON.parse(user_data);
     var data_j=JSON.parse(test);

    if(workout!=null && id!=null  && data_j[workout]!=null){

        var found=false;
        data_j[workout].forEach(element => {
            
            if(element.id==id){
                found=true;
                var exists=false;
                user_reservations["reservation"].forEach(reservation =>{
                    
                    if(id==reservation.id){  
                        $("#status_reserve").text("Rezervacija već postoji");
                        $("#status_reserve").css("color","yellow");
                        exists=true;
                    }
                })
                if(exists==false){
                    $("#status_reserve").text("Uspešno ste rezervisali termin");    
                    user_reservations["reservation"].push({
                        "id":id,
                        "training":workout
                    });
                    localStorage.setItem("user_data",JSON.stringify(user_reservations));
                }
            }
 
         });
         if(found==false){
            $("#status_reserve").text("Ne postoji trening sa ovim id-ijem");
            $("#status_reserve").css("color","red");
         }
       
    }else{
        $("#status_reserve").text("Došlo je do greške");
        $("#status_reserve").css("color","red");
    }

});