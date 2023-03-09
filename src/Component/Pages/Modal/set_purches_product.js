import axios from "axios";

const storePurchesProduct = (data, image) => {
    const product_obj = {
        ...data,
        image: image,
    };

    axios
        .post("store_purches_product", product_obj)
        .then((data) => {
            console.log(data);
        })
        .catch((e) => {
            console.log(e.message);
        });

    // const { data: store_product = [] } = useQuery({
    //   queryFn: async () => {
    //     const res = await axios.post(`store_purches_product`, {
    //       body: product_obj,
    //     });

    //     return res.data.data;
    //   },
    // });
};

export default storePurchesProduct