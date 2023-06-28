import Layout from "@/components/layout/Layout";
import CarItem from "@/components/ui/car/CarItem";
import { ICarSingle } from "@/interfaces/car.interface";
import { FC } from "react";

const CarDetail: FC<ICarSingle> = ({ car }) => {
    return (
        <Layout title={car.name} description="Good expensive car!">
            <CarItem car={car} />
        </Layout>
    );
};

export default CarDetail;
