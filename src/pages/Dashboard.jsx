//rrd imports
import { useLoaderData } from "react-router-dom";

import { fetchData } from "../helpers";
import {Intro} from "../components/Intro";

import {ToastContainer,toast} from 'react-toastify';
//loader
export function dashBoardLoader(){
     const userName = fetchData("userName");
     return {userName};
}

export async function dashboardAction({request}){
    const data=await request.formData();
    const formData = Object.fromEntries(data);
    try{
        localStorage.setItem("userName", JSON.stringify(formData.userName));
        return toast.success(`Welcome, ${formData.userName}`);
    }
    catch(error){
        throw new Error(error);
    }
}

const Dashboard = ()=>{
    const {userName} = useLoaderData()

    return(
        <div>
            {userName?(<p>{userName}</p>):(<Intro/>)}
        </div>
    )
}

export default Dashboard;