$(document).ready(function(){

    function Table_row(){
           this.days= ["<td></td>","<td></td>","<td></td>","<td></td>","<td></td>","<td></td>","<td></td>"];   
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
     var urlParams = new URLSearchParams(window.location.search);
     var id_sched = urlParams.get('id_sched');
    
    

 
 
     

     
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


    if(id_sched!=null && data_j[id_sched]!=null){
        var lang="";
        if(window.location.href.includes("/eng/"))lang="_en";

        $(".breadcrumb-section").css("background-image","url("+map[id_sched]["img"+lang]+")");

         $("#training_type").html("Nedeljni Raspored "+"<span style='color:red';>"+map[id_sched]["name"+lang]+"</span>");






        today=new Date();
        today.setHours(0,0,0,0);
        day=today.getDay()-1;
        var script="";
        var day_arr=["PONEDELJAK","UTORAK","SREDA","ČETVRTAK","PETAK","SUBOTA","NEDELJA"];
        for (let i = 0; i < 7; i++) {
            script += "<th>";
            script+=day_arr[(day+i)%7]+"<br>"+today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear();
            script += "</th>";
            today  = new Date(today.getTime()+86400000);

        }
        $("#sched_names").append(script);

        var script="";
        data_j[id_sched].sort(function(a,b){
          if((a.day-b.day)!=0) return a.day-b.day;
         return parseInt(a.time.substring(0,2))-parseInt(b.time.substring(0,2)); 
        });

        var indexes=[0,0,0,0,0,0,0];
        var number_rows=0;
        var list_rows=[];
        data_j[id_sched].forEach(element => {
            
           var cur_day=element.day;
           indexes[cur_day]++;


           if(indexes[cur_day]>number_rows){
               number_rows++;
               list_rows.push(new Table_row());
           }

           var disabled="";
           var current_time= new Date($.now());
           if(element.left==0 || ( element.day==day && (current_time.getHours()>element.time.substring(0,2) || (current_time.getHours()==element.time.substring(0,2) && current_time.getMinutes()==element.time.substring(3,5) ))))
            disabled="hidden";
           list_rows[indexes[cur_day]-1].days[cur_day]="<td>"+"<span>"+element.time+"</span>"+"<h6>"+id_sched+"</h6>"+"<span>"+"Ostalo Mesta:"+element.left+"</span>"+'<button type="button" id='+element.id+" "+disabled+' class="btn btn-primary reserve_button">Rezervacija</button>'+"</td>";

        });

        list_rows.forEach(element => {

            var script="<tr>";
            for (let i = 0; i < 7; i++) {
                script+=element.days[(i+day)%7];
                
            }
            script+="</tr>";
            $("#sched_times").append(script);
        });

    }

    
    $(".reserve_button").click(function(){
        
        var urlParams = new URLSearchParams(window.location.search);
        var id_sched = urlParams.get('id_sched');        
        window.open("status_page.html?id="+$(this).attr("id")+"&workout="+id_sched,"_self")
    })

});