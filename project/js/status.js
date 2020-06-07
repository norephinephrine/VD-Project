$(document).ready(function(){


     var urlParams = new URLSearchParams(window.location.search);
     var id= urlParams.get('id');
     var workout= urlParams.get('workout');

     var test=localStorage.getItem("schedule_data");

     if(test==null){
        j_obj={
            crazy_cardio:[{"day":0,"time":"16.00-18.00","left":5,id:0}
            ,{"day":2,"time":"16.00-18.00","left":20,id:1}
            ,{"day":4,"time":"10.00-12.00","left":1,id:2}
            ,{"day":0,"time":"13.00-15.00","left":0,id:3}],

            fat_burning:[{"day":1,"time":"13.00-14.00","left":4,id:0}
            ,{"day":1,"time":"14.00-16.00","left":1,id:1},
            {"day":1,"time":"16.00-18.00","left":0,id:2},
            {"day":5,"time":"11.00-13.00","left":0,id:3}],

            spin_burning:[{"day":0,"time":"16.00-18.00","left":5,id:0},{"day":2,"time":"16.00-18.00","left":20,id:1},{"day":4,"time":"10.00-12.00","left":1,id:2},{"day":0,"time":"13.00-15.00","left":0,id:3}],

            pilates:[{"day":1,"time":"13.00-14.00","left":4,id:0},{"day":1,"time":"14.00-16.00","left":1,id:1},{"day":1,"time":"16.00-18.00","left":0,id:2},{"day":5,"time":"11.00-13.00","left":0,id:3}],
            aerobik:[{"day":0,"time":"16.00-18.00","left":5,id:0},{"day":2,"time":"16.00-18.00","left":20,id:1},{"day":4,"time":"10.00-12.00","left":1,id:2},{"day":0,"time":"13.00-15.00","left":0,id:3}],
            zumba:[{"day":1,"time":"13.00-14.00","left":4,id:0},{"day":1,"time":"14.00-16.00","left":1,id:1},{"day":1,"time":"16.00-18.00","left":0,id:2},{"day":5,"time":"11.00-13.00","left":0,id:3}],

            h_yoga:[{"day":0,"time":"16.00-18.00","left":5,id:0},{"day":2,"time":"16.00-18.00","left":20,id:1},{"day":4,"time":"10.00-12.00","left":1,id:2},{"day":0,"time":"13.00-15.00","left":0,id:3}],
            b_yoga:[{"day":1,"time":"13.00-14.00","left":4,id:0},{"day":1,"time":"14.00-16.00","left":1,id:1},{"day":1,"time":"16.00-18.00","left":0,id:2},{"day":5,"time":"11.00-13.00","left":0,id:3}],
            meditation:[{"day":0,"time":"16.00-18.00","left":5,id:0},{"day":2,"time":"16.00-18.00","left":20,id:1},{"day":4,"time":"10.00-12.00","left":1,id:2},{"day":0,"time":"13.00-15.00","left":0,id:3}],

            core_gluteus:[{"day":1,"time":"13.00-14.00","left":4,id:0},{"day":1,"time":"14.00-16.00","left":1,id:1},{"day":1,"time":"16.00-18.00","left":0,id:2},{"day":5,"time":"11.00-13.00","left":0,id:3}],
            core_endurance:[{"day":0,"time":"16.00-18.00","left":5,id:0},{"day":2,"time":"16.00-18.00","left":20,id:1},{"day":4,"time":"10.00-12.00","left":1,id:2},{"day":0,"time":"13.00-15.00","left":0,id:3}],
            body_pump:[{"day":1,"time":"13.00-14.00","left":4,id:0},{"day":1,"time":"14.00-16.00","left":1,id:1},{"day":1,"time":"16.00-18.00","left":0,id:2},{"day":5,"time":"11.00-13.00","left":0,id:3}],


        }
         localStorage.setItem("schedule_data",JSON.stringify(j_obj));
         test=localStorage.getItem("schedule_data");
     }


     var user_data=localStorage.getItem("user_data");

     if(user_data==null){
         j_obj={
            reservation:[]
         }
         localStorage.setItem("user_data",JSON.stringify(j_obj));
         user_data=localStorage.getItem("user_data");
     }


     map={
        crazy_cardio:{
            img:"../../img/crazyCardio/cardioCover.jpg",name:"Crazy Cardio",
            img_en:"../../../img/crazyCardio/cardioCover.jpg",name_en:"Crazy Cardio"},

        fat_burning:{
            img:"../../img/fatBurn/fatCover.jpg",name:"Fat Burn",
            img_en:"../../../img/fatBurn/fatCover.jpg",name_en:"Fat Burn"},


        spin_burning:{
            img:"../../img/spinnBurn/spinnBurnCover.jpg",name:"Spin Burn",
            img_en:"../../../img/spinnBurn/spinnBurnCover.jpg",name_en:"Spin Burn"},

        pilates:{
            img:"../../img/pilates/PilatesCover.jpeg",name:"Pilates",
            img_en:"../../../img/pilates/PilatesCover.jpeg",name_en:"Pilates"},  
    
        aerobik:{
            img:"../../img/aerobic/coverAerobic.jpeg",name:"Aerobik",
            img_en:"../../../img/aerobic/coverAerobic.jpeg",name_en:"Aerobic"},


        zumba:{
            img:"../../img/zumba/zumbaCover.jpg",name:"Zumba",
            img_en:"../../../img/zumba/zumbaCover.jpg",name_en:"Zumba"},



        h_yoga:{
            img:"../../img/yoga/YogaCover.jpg",name:"HATHA YOGA",
            img_en:"../../../img/yoga/YogaCover.jpg",name_en:"HATHA YOGA"},  
    
         b_yoga:{
            img:"../../img/bhakti/bhaktiCover.jpg",name:"BHAKTI YOGA",
            img_en:"../../../img/bhakti/bhaktiCover.jpg",name_en:"BHAKTI YOGA"},


        meditation:{
            img:"../../img/meditation/MeditationCover.jpg",name:"Meditacija",
            img_en:"../../../img/meditation/MeditationCover.jpg",name_en:"Meditation"},            
         
        core_gluteus:{
            img:"../../img/CoreAndGluteus/coreCover.jpg",name:"Core & Gluteus",
            img_en:"../../../img/CoreAndGluteus/coreCover.jpg",name_en:"Core & Gluteus"},  
    
        core_endurance:{
            img:"../../img/coreEndurance/coreCover.jpg",name:"Core Endurance",
            img_en:"../../../img/coreEndurance/coreCover.jpg",name_en:"Core Endurance"},


        body_pump:{
            img:"../../img/bodyPump/pumpCover.jpg",name:"Body Pump",
            img_en:"../../../img/bodyPump/pumpCover.jpg",name_en:"Body Pump"}             
                
     }





     var user_reservations=JSON.parse(user_data);
     var data_j=JSON.parse(test);

     var lang="";
     if(window.location.href.includes("/eng/"))lang="_en";
     
     var found=false;
     var rezerv_text="Rezervacija već postoji";
     var succ_text="Uspešno ste rezervisali termin";
     var noSpace_text="Nema više mesta";
     var noId_text="Ne postoji trening sa ovim id-ijem";
     var errorText="Došlo je do greške";
     if(lang!==""){
         rezerv_text="Booking already exists";
         succ_text="Succesfully booked";
         noSpace_text="No open spots left";
         noId_text="No workout exists with this id";
         errorText="Error occured";           
     }
    if(workout!=null && id!=null  && data_j[workout]!=null){


        $(".breadcrumb-section").css("background-image","url("+map[workout]["img"+lang]+")")
        $("a[href='./schedule.html']").attr('href', './schedule.html?id_sched='+workout);





        for (let index = 0; index < data_j[workout].length; index++) {
            var element = data_j[workout][index];
            if(element.id==id){
                found=true;
                var exists=false;


                for (let j = 0; j <user_reservations["reservation"].length; j++) {
                    var reservation = user_reservations["reservation"][j];
                    if( reservation.training==workout && id==reservation.id){  
                        $("#status_reserve").text(rezerv_text);
                        $("#status_reserve").css("color","yellow");
                        exists=true;
                        break;
                    }                  
                }
                if(exists==false && element.left!=0){
                    $("#status_reserve").text(succ_text);    
                    user_reservations["reservation"].push({
                        "id":id,
                        "training":workout
                    });
                    element.left-=1;
                    

                    localStorage.setItem("user_data",JSON.stringify(user_reservations));
                   
                }
                else if(exists==false && element.left==0){
                    $("#status_reserve").text(noSpace_text);
                    $("#status_reserve").css("color","red");           
                }
                break;             
            }
        }
        if(found==false){
            $("#status_reserve").text(noId_text);
            $("#status_reserve").css("color","red");
         }     
    
    }
    else{
        $("#status_reserve").text(errorText);
        $("#status_reserve").css("color","red");
        }
    localStorage.setItem("schedule_data",JSON.stringify(data_j));

});