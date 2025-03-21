import axios from "axios";

const API_URL = "/api";
const TOKEN = "8WT05LTmEmJBmBWHROWGYmjulMDp3EIa38thJTBzc0R4VAGBVMpsifRsXu3bYPz7";

const fetchData = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: TOKEN,
        "Content-Type": "application/json",
      },
    });

    return await response.data;
  } catch (error) {
    console.log(error)
    return null;
  }
};

export default fetchData;