import { FC } from "react";

import { Flex, Text } from "@chakra-ui/react";
import { Rating } from "@smastrom/react-rating";

import '@smastrom/react-rating/style.css';
import styles from "./Footer.module.css";

interface IFooter {
    rating: number;
}

const Footer: FC<IFooter> = ({ rating }) => {
    return (<Flex className={styles.footerContentContainer} p="3">
        <Text fontSize="xs" fontWeight="bold">
            Trip rating
        </Text>
        <Flex alignItems="center">
            <Rating value={rating} readOnly style={{ maxWidth: 130 }} />
            <Text fontSize="xs" fontWeight="bold">
                {rating}
            </Text>
        </Flex>
    </Flex>);
};

export default Footer;