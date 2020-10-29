import axiosServices from "./axiosService";

let Config = require("../Configuration/config");
const axiosService = new axiosServices();
const configUrl = Config.url;
const token = localStorage.getItem('Token');

class noteServices {


	addCard(data) {
		console.log("token :", token);
		let url = configUrl + 'notes/addNotes';
		return axiosService.post(url, data, true, {
			headers: {
				Authorization: localStorage.getItem("Token")
			}
		});
	}

	getNotes() {
		let url = configUrl + 'notes/getNotesList';
		return axiosService.get(url,{
			headers: {
				Authorization: localStorage.getItem("Token")
			}
		});
	}
	
	DeleteNotes(data){
		let url="http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes";
		return axiosService.post(url,data,true,{
			headers:{
				Authorization:localStorage.getItem("Token")
			}
		});
	}

	UpdateNotes(data){
		let url=configUrl+'notes/updateNotes';
		return axiosService.post(url,data,true,{
			headers:{
				Authorization:localStorage.getItem("Token")
			}
		});
	}

	changeColor(data){
		let url=configUrl+'notes/changesColorNotes';
		return axiosService.post(url,data,true,{
			headers:{
				Authorization:localStorage.getItem("Token")
			}
		});
	}
}
export default new noteServices();