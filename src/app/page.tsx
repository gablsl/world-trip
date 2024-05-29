import { Banner } from '@/components/Banner/banner';
import { Caracteristicas } from '@/components/Caracteristicas/index';
import { Flex } from '@chakra-ui/react';

export default function Home() {
    return (
        <Flex direction='column'>
            <Banner />
            <Caracteristicas />
        </Flex>
    );
}
