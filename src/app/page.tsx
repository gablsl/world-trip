import { Banner } from '@/components/Banner/banner';
import { Caracteristicas } from '@/components/Caracteristicas/index';
import { Separador } from '@/components/Separador';
import { Slider } from '@/components/Slider/slider';
import { Flex, Heading } from '@chakra-ui/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/slider.scss';

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

            <Slider />
        </Flex>
    );
}
