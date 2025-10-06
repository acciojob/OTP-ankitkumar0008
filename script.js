//your JS code here. If required.
let inputs = document.querySelectorAll('.code');
inputs[0].focus(); 

inputs.forEach((input,index)=>{
	input.addEventListener("input",(e)=>{
		const values = e.target.value;
		if(values.length === 1 & index<inputs.length-1){
			inputs[index+1].focus();
		}
	})
	input.addEventListener("keydown",(e)=>{
		if(e.key ==='Backspace' && index>0){
			if(input.value === '' && index > 0 ){
				 inputs[index - 1].focus();
			     inputs[index - 1].value = "";
			}else{
				input.value = "";
			}
		}
	})
})