import { ContinentBanner } from '@/components/ContinentBanner/continent-banner';
import { Header } from '@/components/Header/header';
import { Flex } from '@chakra-ui/react';

export default function Continent() {
    return (
        <Flex direction='column'>
            <Header />
            <ContinentBanner />
        </Flex>
    );
}
