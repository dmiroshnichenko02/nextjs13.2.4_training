import CarDetail from "@/components/screens/car-detail/CarDetail";
import Home from "@/components/screens/home/Home";
import { ICarData, ICarSingle } from "@/interfaces/car.interface";
import { CarService } from "@/services/car.service";
import {
    GetServerSideProps,
    GetStaticPaths,
    GetStaticProps,
    NextPage,
} from "next";
import { ParsedUrlQuery } from "querystring";

const CarDetailPage: NextPage<ICarSingle> = ({ car }) => {
    return <CarDetail car={car} />;
};

interface Params extends ParsedUrlQuery {
    id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const cars = await CarService.getAll();

    return {
        paths: cars.map((car) => ({
            params: {
                id: car.id.toString(),
            },
        })),
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps<ICarSingle> = async ({
    params,
}) => {
    const car = await CarService.getById(String(params?.id));

    return {
        props: { car },
        revalidate: 60,
    };
};

export default CarDetailPage;
