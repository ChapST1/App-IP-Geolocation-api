const btn = document.querySelector('.btn');
const loader = document.querySelector('.loader');
const data = document.querySelector('.json-container')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '51d7638decmsh86b8619f01eee42p16d23bjsn74b75b2fe76f',
		'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
	}
};

document.addEventListener('submit',(e)=>{
    e.preventDefault();
    //get ip
    const {value} = document.querySelector('.input-ip');
    //show loader
    loader.style.display = "flex"

    getData(value)
})


async function getData(ip){
   try {
        const response = await fetch(`https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`,options);
        const json = await response.json();
        
        //hidden loader
        loader.style.display = "none";
        
        //show data(json)
        data.innerHTML = JSON.stringify(json, null, 2);
   } catch (error) {
        console.log(error)
   }
}

