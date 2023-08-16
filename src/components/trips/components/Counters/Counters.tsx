import { FC } from "react";

import {  Text } from "@chakra-ui/react";

interface ICounter {
    numberOfCountries: number,
    numberOfDays: number;
}

const Counters: FC<ICounter> = ({ numberOfCountries, numberOfDays }) => {
    return (
        <Text fontSize="xs">{`${numberOfCountries} ${numberOfCountries === 1 ? "country" : "Countries"}, ${numberOfDays} ${numberOfDays === 1 ? "day" : "days"}`}</Text>
    );
};

export default Counters;