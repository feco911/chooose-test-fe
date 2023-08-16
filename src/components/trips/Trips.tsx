import { SimpleGrid } from "@chakra-ui/react";
import useSWR from "swr";
import { TripResponse } from "../../types/tripResponse";
import TripCard from "./components/TripCard/TripCard";

const Trips = () => {
    const { data } = useSWR<TripResponse>(`/trips?limit=20`);

    return (
        <SimpleGrid columns={{sm: 2, md: 3}} spacing={10}>
            {data?.map((data, index) => (<TripCard key={index} trip={data} />))}
        </SimpleGrid>);
};

export default Trips;