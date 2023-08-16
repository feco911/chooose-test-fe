import { FC } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Emissions as EmissionType } from "../../../../types/emissions";
import styles from "./Emissions.module.css";

interface IEmissions extends EmissionType { }

const Emissions: FC<IEmissions> = ({ value, unit }) => {
    return (
        <Flex justifyContent="space-between" className={styles.emissions} mt="2" mb="6" p="3">
            <Text fontSize="sm">
                Emissions offset:
            </Text>
            <Text fontSize="sm">
                {`${value} ${unit} CO`}  <Text as='sub'>2e</Text>
            </Text>
        </Flex>);
};

export default Emissions;