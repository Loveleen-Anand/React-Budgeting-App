import { redirect } from "react-router-dom";
import { deleteItem } from "../helpers";
import React from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export async function logoutAction(){
    //delete the user
    deleteItem({
        key:"userName"
    });

    toast.success("You've deleted your account!");
    //return redirect
    return redirect("/");   
}