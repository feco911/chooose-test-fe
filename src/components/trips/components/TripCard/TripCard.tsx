import { FC } from "react";

import { Box, Card, CardBody, Text } from "@chakra-ui/react";
import Counters from "../Counters/Counters";
import Emissions from "../Emissions/Emissions";

import { Trip } from "../../../../types/trip";

import styles from "./TripCard.module.css";
import Footer from "../Footer/Footer";

interface ITripCard {
    trip: Trip;
}

const TripCard: FC<ITripCard> = ({ trip }) => (
    <Card className={styles.tripCard}>
        <Box style={{ backgroundImage: `url("${trip.imageUrl}")` }} className={styles.tripCardInner}>
            <CardBody className={styles.tripCardBody}>
                <Box color="white">
                    <Text fontSize="xl" mb="2" fontWeight="medium">{trip.name}</Text>
                    <Counters numberOfCountries={trip.numberOfCountries} numberOfDays={trip.numberOfDays} />
                    <Emissions value={trip.emissions.value} unit={trip.emissions.unit} /> 
                    <Footer rating={trip.rating}/>                   
                </Box>
            </CardBody>
        </Box>
    </Card>
);

export default TripCard;