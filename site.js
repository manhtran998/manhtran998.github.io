document.getElementById('work').addEventListener('keypress', function() {
	if(event.keyCode==13) {	
		AddWork();
	}
});
function AddWork() {
	var Work=document.getElementById('work').value;
	console.log(Work);
	document.getElementById('work').value="";	
	if(Work=="") {
		alert("Không được để trống");
	}	
	else {
		var list=document.getElementById("todo");
		var LI=document.createElement("li");
		var checkBox=document.createElement("input");
		checkBox.setAttribute("type", "checkbox");		
		checkBox.addEventListener("change", function() {
            this.parentElement.classList.toggle("complete");
            Count();
        });
		LI.appendChild(checkBox);
		var text = document.createElement("p");
        text.appendChild(document.createTextNode(Work));
        LI.appendChild(text);
		var remove=document.createElement("button");
		remove.innerHTML="XÓA";		
		remove.addEventListener('click', function() {
			this.parentElement.remove();
			Count();
		});	
		LI.appendChild(remove);
		document.getElementsByTagName('ul')[0].appendChild(LI);
		Count();
	}
}
function Count() {
	var dem = 0;
	var total = document.getElementsByTagName('li');
	for (var i = 0; i < total.length; i++) {
		if(!total[i].classList.contains("complete")) {
			dem ++;
		}
	}
		document.getElementById('dem').innerHTML = dem + " things to do";
}
var all = document.getElementById('all');
all.addEventListener('click', function() {
	var total = document.getElementsByTagName('li');
	for (var i = 0; i < total.length; i++) {
		total[i].classList.remove('hide');
	}
	document.getElementById("all").classList.add("choose");
    document.getElementById("active").classList.remove("choose");
    document.getElementById("completed").classList.remove("choose");
    document.getElementById("completedAll").classList.remove("choose");
    document.getElementById("clearAll").classList.remove("choose");
});
var active = document.getElementById('active');
active.addEventListener('click', function() {
	var total = document.getElementsByTagName('li');
	for (var i = 0; i < total.length; i++) {
		if(total[i].classList.contains('complete')) {
			total[i].classList.add('hide');
		}
		else {
			total[i].classList.remove('hide');
		}
	}
	document.getElementById("all").classList.remove("choose");
    document.getElementById("active").classList.add("choose");
    document.getElementById("completed").classList.remove("choose");
    document.getElementById("completedAll").classList.remove("choose");
    document.getElementById("clearAll").classList.remove("choose");
});
var completed = document.getElementById("completed");
completed.addEventListener('click', function() {
	var total = document.getElementsByTagName('li');
	for (var i = 0; i < total.length; i++) {
		if(total[i].classList.contains("complete")) {
			total[i].classList.remove("hide");
		}
		else {
			total[i].classList.add("hide");
		}
	}
	document.getElementById("all").classList.remove("choose");
    document.getElementById("active").classList.remove("choose");
    document.getElementById("completed").classList.add("choose");
    document.getElementById("completedAll").classList.remove("choose");
    document.getElementById("clearAll").classList.remove("choose");
});
var completedAll = document.getElementById('completedAll');
completedAll.addEventListener('click', function() {
	var total = document.getElementsByTagName('li');
	for (var i = 0; i < total.length; i++) {
		total[i].firstChild.checked = true;
		total[i].classList.add("complete");
	}
	document.getElementById("all").classList.remove("choose");
    document.getElementById("active").classList.remove("choose");
    document.getElementById("completed").classList.remove("choose");
    document.getElementById("completedAll").classList.add("choose");
    document.getElementById("clearAll").classList.remove("choose");
    Count();
});
var clearAll = document.getElementById('clearAll');
clearAll.addEventListener('click', function() {
	document.getElementById('todo').innerHTML="";
	document.getElementById("all").classList.remove("choose");
    document.getElementById("active").classList.remove("choose");
    document.getElementById("completed").classList.remove("choose");
    document.getElementById("completedAll").classList.remove("choose");
    document.getElementById("clearAll").classList.add("choose");
    Count();
});