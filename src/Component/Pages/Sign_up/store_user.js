import axios from "axios";


//store register user
// in database
const storeRegisterUser = async (data) => {

    await axios.post("register_user", data)
        .then(e => {
            const token = e.data.token
            localStorage.setItem("user_token", token)
        })
        .catch(e => {
            console.log(e.message);
        })
};

export default storeRegisterUser