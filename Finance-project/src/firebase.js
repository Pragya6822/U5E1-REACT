import axios from 'axios';

const URL = "https://react-task-c3990-default-rtdb.firebaseio.com/finances.json"

export const fetchData = async () => {
    try{
        const response = await axios.get(URL);
        return response.data;
    }catch(e){
        console.error("Failed to fetch data from firebase", e);
    }
};

export const createData = async (data) => {
    try{
        const response = await axios.post(URL, data);
        return response.data;
    }catch(e){
        console.error("Failed to create data in firebase", e);
    }
};

export const updateData = async (id, data) => {
    try{
        const response = await axios.patch(`${URL}/${id}.json`, data);
        return response.data;
    }catch(e){
        console.error("Failed to update data in firebase", e);
    }
};

export const deleteData = async (id) => {
    try{
        const response = await axios.delete(`${URL}/${id}.json`);
        return response.data;
    }catch(e){
        console.error("Failed to delete data from firebase", e);
    }
};