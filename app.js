function hash(input, dictionary) {
	//  TODO: implementați funcția
	if(!(typeof input === 'string')){
		throw new Error("Input should be a string");
	}

	for (let i = 0; i < dictionary.length ; i++) {
		if(!(typeof dictionary[i] === 'string')){
			throw new Error("Invalid dictionary format");
		}
	  } 

	  let text=input;
	  for (let i = 0; i < dictionary.length ; i++) {
		let cuv = dictionary[i];
		let poz = text.toLowerCase().search(cuv);
		  if(poz!=-1)
		  {
			let diez="";
		  	for(let u = 1;u<cuv.length-1;u++)	  diez = diez+"#";
			if(text.at(poz)>= 'A' && text.at(poz)<='Z')
			{
				cuv = text.charAt(poz) + text.substring(poz+1,cuv.length)
				text = text.replace(cuv,  cuv[0] + diez + cuv[cuv.length-1]);
			}
			else{
				text = text.replace(cuv, cuv[0] + diez + cuv[cuv.length-1]);
			}
		  }
		}   
		return text;
	
	
}

const app = {
	hash
};

module.exports = app;

