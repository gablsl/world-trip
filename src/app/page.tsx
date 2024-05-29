import { Banner } from '@/components/Banner/banner';
import { Caracteristicas } from '@/components/Caracteristicas/index';
import { Separador } from '@/components/Separador';
import { Flex, Heading } from '@chakra-ui/react';

export default function Home() {
    return (
        <Flex direction='column'>
            <Banner />
            <Caracteristicas />
            <Separador />

            <Heading
                textAlign='center'
                fontWeight='500'
                mb={['5', '14']}
                fontSize={['lg', '3xl', '4xl']}
            >
                Vamos nessa? <br />
                Então escolha seu continente
            </Heading>
        </Flex>
    );
}
