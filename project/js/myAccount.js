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

    var map={};
    
    map["crazy_cardio"]="../img/crazyCardio/cardioCover.jpg";
    map["fat_burning"]="../img/fatBurn/fatCover.jpg";
    map["spin_burning"]="../img/spinnBurn/spinnBurnCover.jpg";

    map["pilates"]="../img/pilates/PilatesCover.jpeg";
    map["aerobik"]="../img/aerobic/coverAerobic.jpeg";
    map["zumba"]="../img/zumba/zumbaCover.jpg";

    map["h_yoga"]="../img/yoga/YogaCover.jpg";
    map["b_yoga"]="../img/bhakti/bhaktiCover.jpg";
    map["meditation"]="../img/meditation/MeditationCover.jpg";

    
    map["core_gluteus"]="../img/CoreAndGluteus/coreCover.jpg";
    map["core_endurance"]="../img/coreEndurance/coreCover.jpg";
    map["body_pump"]="../img/bodyPump/pumpCover.jpg";
    var script="";
    var id_next=0;
    user_reservations["reservation"].forEach(element => {
        
        script+='<div class="row">';

        script+='<div class="col-12 col-sm-6 col-md-4">';
        script+="<img width=100%  height=150px src='"+map[element.training]+"'>"
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
        script+="<span style='color:white'>Trening:"+element.training+"</span><br>";
        script+="<span hidden id='train"+id_next+"'>"+element.training+"</span>"
        script+="<span hidden id='id"+id_next+"'>"+element.id+"</span>"
        script+="<span style='color:white'>Vreme:"+data.time+"</span><br>";
        script+="<span style='color:white'>Datum:"+today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear()+"</span><br>";
        script+="<button id='show"+id_next+"' type='button'class='btn btn-primary show_button'>Vidi</button>&nbsp";
        script+="<button id='cancel"+id_next+"'"+disabled+"  type='button'class='btn btn-danger cancel_button'>Otkaži</button>";
        script+='</div>'

        script+='</div><hr style="height:2px;border-width:0;color:gray;background-color:gray">';
        id_next+=1;
    });

    if(script==="")
    {
        script='<div class="row"> <div class="col-lg-12 text-center">'+"<h4 style='color:white;'>NEMA REZERVACIJA</h4>"+'</div></div>';
        $("#my_reservation").append(script);
    }else{
        $("#my_reservation").append(script);
    }


    $(".cancel_button").click(function(){
        var mine_id=$(this).attr("id").substring(6);
        var id=$("#id"+mine_id).text();
        var training=$("#train"+mine_id).text();


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
        var training=$("#train"+mine_id).text();

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