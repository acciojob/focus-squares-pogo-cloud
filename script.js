//your JS code here. If required.
let squares=document.querySelectorAll(".square");
for(let t of squares){
	t.addEventListener("mouseover",(event)=>{
		for(let s of squares){
            s.style.backgroundColor = "#E6E6FA";
        }
		if(t.id=="square1"){
			document.querySelector("#square2").style.backgroundColor="#6F4E37";
			document.querySelector("#square3").style.backgroundColor="#6F4E37";
			
		}else if(t.id=="square2"){
			document.querySelector("#square1").style.backgroundColor="#6F4E37";
		    document.querySelector("#square3").style.backgroundColor="#6F4E37";
			
		}else if(t.id=="square3"){
			document.querySelector("#square1").style.backgroundColor="#6F4E37";
			document.querySelector("#square2").style.backgroundColor="#6F4E37";
		}
	})
}