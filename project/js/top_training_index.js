$(document).ready(function(){
    var rating=localStorage.getItem("star_rating");

    if(rating==null){
        j_obj={
            crazy_cardio:{
            avg:"3.5",
            number:"4"
            },
            fat_burning:{
                avg:"3.5",
                number:"4"
                },
            spin_burning:{
                avg:"3.5",
                number:"4"
                },

            pilates:{
                avg:"3.5",
                number:"4"
                },
            aerobik:{
                avg:"3.5",
                number:"4"
                },
            zumba:{
                avg:"3.5",
                number:"4"
                },

            h_yoga:{
                avg:"3.5",
                number:"4"
                },
            b_yoga:{
                avg:"3.5",
                number:"4"
                },
            meditation:{
                avg:"3.5",
                number:"4"
                },

            core_gluteus:{
                avg:"3.5",
                number:"4"
                },
            core_endurance:{
                avg:"3.5",
                number:"4"
                },
            body_pump:{
                avg:"3.5",
                number:"4"
                }

        }
        localStorage.setItem("star_rating",JSON.stringify(j_obj));
        rating=localStorage.getItem("star_rating");
    } 

    var raitings=JSON.parse(rating);  
    map={
        crazy_cardio:{
            img:"img/crazyCardio/cardioCover.jpg",name:"Crazy Cardio",
            img_en:"../img/crazyCardio/cardioCover.jpg",name_en:"Crazy Cardio"},

        fat_burning:{
            img:"img/fatBurn/fatCover.jpg",name:"Fat Burn",
            img_en:"../img/fatBurn/fatCover.jpg",name_en:"Fat Burn"},


        spin_burning:{
            img:"img/spinnBurn/spinnBurnCover.jpg",name:"Spin Burn",
            img_en:"../img/spinnBurn/spinnBurnCover.jpg",name_en:"Spin Burn"},

        pilates:{
            img:"img/pilates/PilatesCover.jpeg",name:"Pilates",
            img_en:"../img/pilates/PilatesCover.jpeg",name_en:"Pilates"},  
    
        aerobik:{
            img:"img/aerobic/coverAerobic.jpeg",name:"Aerobik",
            img_en:"../img/aerobic/coverAerobic.jpeg",name_en:"Aerobic"},


        zumba:{
            img:"img/zumba/zumbaCover.jpg",name:"Zumba",
            img_en:"../img/zumba/zumbaCover.jpg",name_en:"Zumba"},



        h_yoga:{
            img:"img/yoga/YogaCover.jpg",name:"Hatha Yoga",
            img_en:"../img/yoga/YogaCover.jpg",name_en:"Hatha Yoga"},  
    
         b_yoga:{
            img:"img/bhakti/bhaktiCover.jpg",name:"Bhakti Yoga",
            img_en:"../img/bhakti/bhaktiCover.jpg",name_en:"Bhakti Yoga"},


        meditation:{
            img:"img/meditation/MeditationCover.jpg",name:"Meditacija",
            img_en:"../img/meditation/MeditationCover.jpg",name_en:"Meditation"},            
         
        core_gluteus:{
            img:"img/CoreAndGluteus/coreCover.jpg",name:"Core & Gluteus",
            img_en:"../img/CoreAndGluteus/coreCover.jpg",name_en:"Core & Gluteus"},  
    
        core_endurance:{
            img:"img/coreEndurance/coreCover.jpg",name:"Core Endurance",
            img_en:"../img/coreEndurance/coreCover.jpg",name_en:"Core Endurance"},


        body_pump:{
            img:"img/bodyPump/pumpCover.jpg",name:"Body Pump",
            img_en:"../img/bodyPump/pumpCover.jpg",name_en:"Body Pump"}             
                
     }
     map["crazy_cardio"]["link"]="crazyCardio.html";
     map["fat_burning"]["link"]="fatBurning.html";
     map["spin_burning"]["link"]="spinnBurn.html";

     map["pilates"]["link"]="pilates.html";
     map["aerobik"]["link"]="aerobic.html";
     map["zumba"]["link"]="zumba.html";
 
     map["h_yoga"]["link"]="hathaYoga.html";
     map["b_yoga"]["link"]="bhaktiYoga.html";
     map["meditation"]["link"]="meditacija.html";
 
     
     map["core_gluteus"]["link"]="gluteAndCore.html";
     map["core_endurance"]["link"]="coreEndurance.html";
     map["body_pump"]["link"]="bodyPump.html";

     var lang="";
     if(window.location.href.includes("/eng/"))lang="_en";

     var array = [];
     for (key in raitings) {
       raitings[key]["key"]=key;
       array.push(raitings[key]);
     }
     
     array.sort(function(a, b) {
       return a.avg-b.avg;
     });

     var n=array.length;
     for (let index = 1; index < 4; index++) {
         const element = array[n-(4-index)];
         $("#top_trening_"+index).prepend('<span class="fa fa-star checked"></span>'+"<h5 style='color:yellow'>"+raitings[element.key].avg+"</h5><br>");
         $("#top_trening_"+index).prepend("<h2 style='color:red'>"+map[element.key]["name"+lang]+"</h2><br>");
        
         $("#top_trening_"+index).css("background-image","url("+map[element.key]["img"+lang]+")");
         $("#top_trening_link_"+index).attr("href",map[element.key]["link"]);
     }

});