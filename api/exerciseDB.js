import axios from "axios";
import { rapidApiKey } from "../constants";


const baseUrl= 'https://exercisedb.p.rapidapi.com';

const apiCall = async(url,params)=>{
    try {
        const options ={
            method:'GET',
            url,
            params,
            headers:{
                'x-rapidapi-key': '28dac93bb2msh74d77bdea82b4c8p12144djsndeb34e670f75',
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
            }
        }
        const response= await axios.request(options);
        // console.log(response);
        return response.data;
    } catch (error) {
        console.log('error',error.message);
    }
}

export const fetchExercisesByBodyPart =async(bodyPart)=>{
    // console.log(bodyPart);
    let data = await apiCall(baseUrl+`/exercises/bodyPart/${bodyPart}`);
    return data;
}