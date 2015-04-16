$(function(){
    
    function madlib(){
        var name = $("#name").val();
        var adjective = $("#adjective").val();
        var heshe = $("#heshe").val();
        var adjective2 = $("#adjective2").val();
        var place1 = $("#place1").val();
        var place2 = $("#place2").val();
        
        $("#sentence").slideDown();
        $("#nameholder").html(name);
        $("#adjectiveholder").html(adjective);
        $("#hesheholder").html(heshe);
        $("#adjective2holder").html(adjective2);
        $("#place1holder").html(place1);
        $("#place2holder").html(place2);
        
    }
    
    $("#sentence").hide();
    $("#play").click(madlib);
      })
           