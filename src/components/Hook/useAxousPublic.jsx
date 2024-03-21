
import axios from "axios";
const AxiosPublic= axios.create({
    baseURL: "https://dns-server-xi.vercel.app",

  });
const useAxousPublic = () => {
    return AxiosPublic

};

export default useAxousPublic;