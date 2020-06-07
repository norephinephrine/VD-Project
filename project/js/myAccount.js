
$(document).ready(function(){

    var user_data=localStorage.getItem("user_data");

    if(user_data==null){
        j_obj={
            reservation:[]
        }
        localStorage.setItem("user_data",JSON.stringify(j_obj));
        user_data=localStorage.getItem("user_data");
    }

    



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


    var data_j=JSON.parse(test);
    var user_reservations=JSON.parse(user_data);

    map={
        crazy_cardio:{
            img:"../img/crazyCardio/cardioCover.jpg",name:"Crazy Cardio",
            img_en:"../../img/crazyCardio/cardioCover.jpg",name_en:"Crazy Cardio"},

        fat_burning:{
            img:"../img/fatBurn/fatCover.jpg",name:"Fat Burn",
            img_en:"../../img/fatBurn/fatCover.jpg",name_en:"Fat Burn"},


        spin_burning:{
            img:"../img/spinnBurn/spinnBurnCover.jpg",name:"Spin Burn",
            img_en:"../../img/spinnBurn/spinnBurnCover.jpg",name_en:"Spin Burn"},

        pilates:{
            img:"../img/pilates/PilatesCover.jpeg",name:"Pilates",
            img_en:"../../img/pilates/PilatesCover.jpeg",name_en:"Pilates"},  
    
        aerobik:{
            img:"../img/aerobic/coverAerobic.jpeg",name:"Aerobik",
            img_en:"../../img/aerobic/coverAerobic.jpeg",name_en:"Aerobic"},


        zumba:{
            img:"../img/zumba/zumbaCover.jpg",name:"Zumba",
            img_en:"../../img/zumba/zumbaCover.jpg",name_en:"Zumba"},



        h_yoga:{
            img:"../img/yoga/YogaCover.jpg",name:"Hatha Yoga",
            img_en:"../../img/yoga/YogaCover.jpg",name_en:"Hatha Yoga"},  
    
         b_yoga:{
            img:"../img/bhakti/bhaktiCover.jpg",name:"Bhakti Yoga",
            img_en:"../../img/bhakti/bhaktiCover.jpg",name_en:"Bhakti Yoga"},


        meditation:{
            img:"../img/meditation/MeditationCover.jpg",name:"Meditacija",
            img_en:"../../img/meditation/MeditationCover.jpg",name_en:"Meditation"},            
         
        core_gluteus:{
            img:"../img/CoreAndGluteus/coreCover.jpg",name:"Core & Gluteus",
            img_en:"../../img/CoreAndGluteus/coreCover.jpg",name_en:"Core & Gluteus"},  
    
        core_endurance:{
            img:"../img/coreEndurance/coreCover.jpg",name:"Core Endurance",
            img_en:"../../img/coreEndurance/coreCover.jpg",name_en:"Core Endurance"},


        body_pump:{
            img:"../img/bodyPump/pumpCover.jpg",name:"Body Pump",
            img_en:"../../img/bodyPump/pumpCover.jpg",name_en:"Body Pump"}             
                
     }
    var script="";
    var id_next=0;
    var lang="";
    if(window.location.href.includes("/eng/"))lang="_en";
    var tre_text="Trening";
    var date_text="Datum";
    var time_text="Vreme";
    var canc_text="Otkaži";
    var show_text="Vidi";
    if(lang==="_en") {
        tre_text="Workout"; 
        date_text="Date";
        time_text="Time";  
        canc_text="Cancel"   
        show_text="Show"      
    }
    
//MY Reservation
    user_reservations["reservation"].forEach(element => {
        script+='<div class="row">';

        script+='<div class="col-12 col-sm-6 col-md-4">';
        script+="<img width=100%  height=150px src='"+map[element.training]["img"+lang]+"'>"
        script+='</div>';

        var data;

        data_j[element.training].forEach(el=>{

            if(el.id==element.id){
                data=el;
            }
        })
        var disabled="";

        var today=new Date();
        var time_1=data.time.substring(0,2)*60+1*data.time.substring(3,5);
        var time_2=today.getHours()*60+today.getMinutes();
        

        today.setHours(0,0,0,0);
        var new_day=today.getDay()-1-data.day;
        if(new_day==0 && time_1-time_2<30){
            disabled="disabled";
        }

       
        if(new_day<0)new_day+=7;
        today  = new Date(today.getTime()+86400000*(new_day));



        script+='<div class="col-12 col-sm-6 col-md-8 text-center">';
        script+="<span style='color:white'>"+tre_text+":"+map[element.training]["name"+lang]+"</span><br>";
        script+="<span style='color:white'>"+time_text+":"+data.time+"</span><br>";
        script+="<span style='color:white'>"+date_text+":"+today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear()+"</span><br>";
        script+="<button id='show"+id_next+"' type='button'class='btn btn-primary show_button'>"+show_text+"</button>&nbsp";
        script+="<button id='cancel"+id_next+"'"+disabled+"  type='button'class='btn btn-danger cancel_button'>"+canc_text+"</button>";

        script+="<input id='id"+id_next+"' type='text' hidden value='"+data.id+"'>";   
        script+="<input id='train"+id_next+"' type='text' hidden value='"+element.training+"'>";   
        script+='</div>'

        script+='</div><hr style="height:2px;border-width:0;color:gray;background-color:gray">';
        id_next+=1;
    });

    if(script==="")
    {
        var text="Nema rezervacije";
        if(window.location.href.includes("/eng/"))text="No reservation";      
        script='<div class="row"> <div class="col-lg-12 text-center">'+"<h4 style='color:white;'>"+text+"</h4>"+'</div></div>';
        $("#my_reservation").append(script);
    }else{
        $("#my_reservation").append(script);
    }
//MY Reservations End
var tre_text="Trening"
var name_text="Ime";
var surname_text="Prezime";
var date_text="Datum";
var time_text="Vreme";
var canc_text="Otkaži";
var show_text="Vidi";
var desc_text="Opis";
var tel_text="Telefon";
var massage_text="Masaža"
if(lang==="_en") {
    tre_text="Workout"; 
    date_text="Date";
    time_text="Time";  
    canc_text="Cancel"   
    show_text="Show"  
    name_text="Name";
    surname_text="Surname";   
    tel_text="Telephone"  
    massage_text="Massage" 
    desc_text="Description";  
}
//MY MASSAGES

script="";

for (let index = 1; index < 5; index++) {
    var obj=localStorage.getItem("massage_data_massage"+index);
    if(obj!=null){
    
        var json_obj=JSON.parse(obj);
        var path="../img/service/massage/massage"+index+".jpg";
        if(window.location.href.includes("/eng/"))path="../"+path;
        script+='<div class="row">';
        script+='<div class="col-12 col-sm-6 col-md-4">';
        script+="<img   width='70%' height=150px src='"+path+"'>"
        script+='</div>';  
        
        
        script+='<div class="col-12 col-sm-6 col-md-8 ">';
        script+="<span style='color:white'>"+massage_text+":"+json_obj.massage+"</span><br>";
        script+="<span style='color:white'>"+name_text+":"+json_obj.name+"</span><br>";
        script+="<span style='color:white'>"+surname_text+":"+json_obj.surname+"</span><br>";
        script+="<span style='color:white'>E-mail:"+json_obj.mail+"</span><br>";
        script+="<span style='color:white'>"+date_text+":"+json_obj.date.substring(8)+"/"+json_obj.date.substring(5,7)+"/"+json_obj.date.substring(0,4)+"</span><br>";
        script+="<span style='color:white'>"+tel_text+":"+json_obj.tel+"</span><br>";
        script+="<span style='color:white'>"+desc_text+":<br>"+json_obj.description+"</span><br>";
        script+='</div>'
        script+='</div><hr style="height:2px;border-width:0;color:gray;background-color:gray">';
    }
    
}
if(script===""){
    var text="Nema masaža";
    if(window.location.href.includes("/eng/"))text="No massages";      
    script='<div class="row"> <div class="col-lg-12 text-center">'+"<h4 style='color:white;'>"+text+"</h4>"+'</div></div>';
    $("#my_massage").append(script);    
}else{
    $("#my_massage").append(script);  
}
//MY MASSAGES End
//MY Nutricionist Begin
script="";

var obj=localStorage.getItem("nutricionist_data");
if(obj!=null){

    var json_obj=JSON.parse(obj);
    var path="../img/service/nutricionist/nutricionist.jpg";
    if(window.location.href.includes("/eng/"))path="../../img/service/nutricionist/nutricionist.jpg";
    script+='<div class="row">';

    script+='<div class="col-12 col-sm-6 col-md-4">';
    script+="<img width=100%  height=150px src='"+path+"'>"
    script+='</div>';   

    script+='<div class="col-12 col-sm-6 col-md-8 ">';
    script+="<span style='color:white'>"+name_text+":"+json_obj.name+"</span><br>";
    script+="<span style='color:white'>"+surname_text+":"+json_obj.surname+"</span><br>";
    script+="<span style='color:white'>E-mail:"+json_obj.mail+"</span><br>";
    script+="<span style='color:white'>"+date_text+":"+json_obj.date.substring(8)+"/"+json_obj.date.substring(5,7)+"/"+json_obj.date.substring(0,4)+"</span><br>";
    script+="<span style='color:white'>"+tel_text+":"+json_obj.tel+"</span><br>";
    script+="<span style='color:white'>"+desc_text+":<br>"+json_obj.description+"</span><br>";
    script+='</div>'
    script+='</div>'

    $("#my_nutricionist").append(script);  


}else{
    var text="Nema zahteva";
    if(window.location.href.includes("/eng/"))text="No request";      
    script='<div class="row"> <div class="col-lg-12 text-center">'+"<h4 style='color:white;'>"+text+"</h4>"+'</div></div>';
    $("#my_nutricionist").append(script);    
}
//MY Nutricionist End


    $(".cancel_button").click(function(){
        var mine_id=$(this).attr("id").substring(6);
        var id=$("#id"+mine_id).val();
        var training=$("#train"+mine_id).val();

        var test=localStorage.getItem("schedule_data");
        var data_j=JSON.parse(test);
   
        data_j[training].forEach(element => {
            if(element.id==id){
                element.left++;
            }
        });


        localStorage.setItem("schedule_data",JSON.stringify(data_j));

        var user_data=localStorage.getItem("user_data");
        var user_reservations=JSON.parse(user_data);

        var ind=-1;
        for (let index = 0; index < user_reservations["reservation"].length; index++) {
             element = user_reservations["reservation"][index];
             if(element.id==id && element.training==training){
                 ind=index;
                 break;
             }
            
        }
        if(ind!=-1)
            user_reservations["reservation"].splice(ind,1);

        localStorage.setItem("user_data",JSON.stringify(user_reservations));

        window.open("./myAccount.html","_self");

    })


    $(".show_button").click(function(){
        var mine_id=$(this).attr("id").substring(4);
        var training=$("#train"+mine_id).val();

        map["crazy_cardio"]="../crazyCardio.html";
        map["fat_burning"]="../fatBurning.html";
        map["spin_burning"]="../spinnBurn.html";

        map["pilates"]="../pilates.html";
        map["aerobik"]="../aerobic.html";
        map["zumba"]="../zumba.html";
    
        map["h_yoga"]="../hathaYoga.html";
        map["b_yoga"]="../bhaktiYoga.html";
        map["meditation"]="../meditacija.html";
    
        
        map["core_gluteus"]="../gluteAndCore.html";
        map["core_endurance"]="../coreEndurance.html";
        map["body_pump"]="../bodyPump.html";




        window.open(map[training],"_self");
    })

});