import axios from 'axios';
const params={
    headers:{
        Authorization:"Bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
    },
};

const fetchData= async(url)=>{

    try{
      const {data}= await axios.get(process.env.REACT_APP_DEV_URL+ url,params);
      return data;
    }

    catch(error){
        console.log(error);
        return error;

    };
}
export default fetchData