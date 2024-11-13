"use server";

import axios from "axios";

export const sayHello = async (name) => {
    try {
        // code bellows show how to access function sapa_nama from backend app.py using method get, the desire output should be an object with value message and status
        const response = await axios.get(`http://127.0.0.1:5000/api/v1/sapa?name=${name}`);

        // response will contain value like this if success
        // {
        //     "Message": "jalan yuk yukina sayangku",
        //     "status": "Yatta"
        //   }

        // and this if error 404
        // {
        //   "Message": "Nama tidak disediakan.",
        //   "status": "Error"
        return response.data
    } catch (err) {
        console.error(err);
        throw err;
    }
}