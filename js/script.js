$( document ).ready(function() {
    
    var rows = 2;
    var columns = 2;
    var total = rows*columns;
    var matrix = [[],[]];
    
    //generate the nubers and mix them in the future....
    matrix[0][0] = 1;
    matrix[0][1] = 2;
    matrix[1][0] = 1;
    matrix[1][1] = 2;
    
    //thinking....
    
    var arr = [1,2];
    
    
    
    
    
    for (var y = 0; y < rows; y++) {
        //matrix[y] = [];
        for (var x = 0; x < columns; x++) {
            //console.log("indexes: ["+y+"]"+"["+x+"]");
            //matrix[y][x] = Math.floor((Math.random()*10)+1);
            var div = $("<div>", {class: "col-sm-6 tile", "data-x": x, "data-y": y}).text(matrix[y][x]);
            $("#game .row").append(div);
            
        }
    }
    
    start();
    
    function start(){
        console.log($(".tile").length);
        
        var lock = false;
        
        $(".tile").click(function(){
            if(!lock && !$(this).hasClass("done")){ //if there are not two selected...
                console.log($(this).data("x"));
                $(this).addClass("selected");
                
                if($(".selected").length == 2){ //when the second one is chosen...
                    lock = true;
                    if($(".selected:eq(0)").text() == $(".selected:eq(1)").text()){
                        $(".selected").addClass("done");
                        lock = false;
                        $(".selected").removeClass("selected");
                    } else {
                        setTimeout(function(){
                            lock = false;
                            $(".selected").removeClass("selected");
                        }, 2000);
                    }
                }
            }
            if($(".tile").length == $(".done").length){
                alert("game finished! congrats!");
            }
        });
        
    }
    
});