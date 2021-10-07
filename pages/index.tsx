import {Container, Flex, VStack} from '@chakra-ui/react';
import React from "react";

const IndexPage = () =>
    <Container maxW="container.xl" p={0}>
        <Flex vh="100vh" py={20}>
            <VStack
                w="full"
                h="full"
                p={10}
                spacing={10}
                alignItems="flex-start"
            ></VStack>
            <VStack
                w="full"
                h="full"
                p={10}
                spacing={10}
                alignItems="flex-start"
                bg="gray.50"
            ></VStack>
        </Flex>
    </Container>;

export default IndexPage;