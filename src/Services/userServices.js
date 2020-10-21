import axiosService from './axiosService'

const baseURL="http://fundoonotes.incubation.bridgelabz.com/api/";

class userService{
	constructor(){
		this.axios_Service=new axiosService();
	  }
	
	  login(data){
		let url=baseURL+"user/login";
		return this.axios_Service.post(url,data);
	  }
	
	  register(data){
		let url=baseURL+"user/userSignUp";
		return this.axios_Service.post(url,data);
	  }
	
	  forgotPass(data){
		let url=baseURL+"user/reset";
		return this.axios_Service.post(url,data);
	  }
	
	  resetPass(data){
		let url=baseURL+"user/reset-password";
		return this.axios_Service.post(url,data);
	  }
	}
	
	export default new userService();