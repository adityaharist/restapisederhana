<script>
// ditulis disini
 function load_ajax(){
 	const ajax = new XMLHttpRequest();
 	ajax.open('GET', 'index2.json', true);
 	ajax.onreadystatechange = function(){
 		if(this.readyState ===4 && this.status ===200){
 			let data = JSON.parse(this.responseText)
 			for (var i=0; i<data.length; i++) {
			   document.getElementById('result').innerHTML += '<li>'+ data[i].name +'</li>';
			}
 		}
 	}
 	ajax.send();
 }
 load_ajax();