
//linear-gradient(to right, rgb(color[0],color[1],color[2]), rgb(color[3],color[4],color[5]))

function colorChange() {
    var color=[];
    for (var i = 0; i < 6; i++) {
        var j=i+1;
        color[i] = document.getElementById("color" +j).value;  
    }
    var colorview = document.getElementById("colorview")
    
    colorview.style.background = "linear-gradient(to right, rgb("+color[0]+","+color[1]+","+color[2]+"), rgb("+color[3]+","+color[4]+","+color[5]+"))";
    
}
