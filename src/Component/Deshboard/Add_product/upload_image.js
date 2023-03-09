// import axios from "axios";
// import addProductInDB from "./add_product_in_db";

// //store image in imgBB server
// const uploadImg = async (data) => {
//     const files = data.image[0];
//     const filetFormate = new FormData();
//     filetFormate.append("image", files);

//     const img_url = `https://api.imgbb.com/1/upload?key=${ process.env.REACT_APP_image_key }`;

//     let img

//     await axios
//         .post(img_url, filetFormate)
//         .then((url) => {
//             const image_uri = url.data.data.url

//             // add product in mongodb
//             addProductInDB(data, image_uri)
//         })
//         .catch((e) => {
//             console.log(e.message);
//         });
// };

// export default uploadImg