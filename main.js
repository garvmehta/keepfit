var arr =["image2.jpg" ,"image3.jpg", "image1.jpg"];
var i =0;
function change() {
    
    if(i<arr.length-1){
        i++;
        document.getElementById('tagline').style.display="none";
        document.getElementById('tagline2').style.display="block";        
        document.getElementById('img').src=arr[i];
    }
    else{
        i=0;
        document.getElementById('tagline2').style.display="none";
        document.getElementById('tagline').style.display="block";
        document.getElementById('img').src=arr[i];	
    }
}
var one = false;
        function sidebar() {
            
            if(one=== false){
                document.getElementById('toggle').style="transform:rotate(45deg);";
                document.getElementById('sidebar').style="width:30vw;";
                document.getElementById('sidebarLinks').style="display:block;";
                one =true;
            }
            else{
                document.getElementById('toggle').style="transform:rotate(0deg);";
                document.getElementById('sidebar').style="width;0vw;";
               document.getElementById('sidebarLinks').style="display:none;";
                one=false;
            }

}

function number(){
            const counters = document.querySelectorAll('.clock');
            counters.forEach(counter => {
                    const updateCount = () => {
                        const target = +counter.getAttribute('value');
                        var count = +counter.innerText;
                        if (count < target) {
                            count++;
                            counter.innerText = count;
                            setTimeout(updateCount, 1);
                        } else {
                            counter.innerText = target;
                        }
                    };

	updateCount();
});
       
                  
         }

