'use client';

import { Flex, Heading, Text } from '@chakra-ui/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

export function Slider() {
    return (
        <Flex
            w='100%'
            maxW='1240px'
            mx='auto'
            mb={['5', '10']}
            h={['250px', '450px']}
        >
            <Swiper
                slidesPerView={1}
                modules={[Navigation, Pagination]}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000,
                }}
                style={{ width: '100%', flex: '1' }}
            >
                <SwiperSlide>
                    <Flex
                        w='100%'
                        h='100%'
                        align='center'
                        justify='center'
                        direction='column'
                        bg='url(/europa.png)'
                        bgRepeat='no-repeat'
                        bgSize='cover'
                        textAlign='center'
                        bgPosition='center'
                    >
                        <Link href='/continent/europe'>
                            <Heading
                                fontSize={['3xl', '4xl', '5xl']}
                                color='gray.100'
                                fontWeight='bold'
                            >
                                Europa
                            </Heading>
                            <Text
                                fontWeight='bold'
                                color='gray.300'
                                fontSize={['12.8px', '1xl', '2xl']}
                                mt={['2', '4']}
                            >
                                O continente mais antigo
                            </Text>
                        </Link>
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex
                        w='100%'
                        h='100%'
                        align='center'
                        justify='center'
                        direction='column'
                        bg='url(/europa.png)'
                        bgRepeat='no-repeat'
                        bgSize='cover'
                        textAlign='center'
                        bgPosition='center'
                    >
                        <Link href='/continent/europe'>
                            <Heading
                                fontSize={['3xl', '4xl', '5xl']}
                                color='gray.100'
                                fontWeight='bold'
                            >
                                Europa
                            </Heading>
                            <Text
                                fontWeight='bold'
                                color='gray.300'
                                fontSize={['12.8px', '1xl', '2xl']}
                                mt={['2', '4']}
                            >
                                O continente mais antigo
                            </Text>
                        </Link>
                    </Flex>
                </SwiperSlide>
            </Swiper>
        </Flex>
    );
}
