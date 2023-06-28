import { ICar } from "@/interfaces/car.interface";
import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;

export const CarService = {
    async getAll() {
        const { data } = await axios.get<ICar[]>("/cars");

        return data;
    },

    async getById(id: string) {
        const { data } = await axios.get<ICar[]>("/cars", {
            params: { id },
        });
        return data[0];
    },
};
