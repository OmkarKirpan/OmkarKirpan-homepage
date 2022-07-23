import Head from 'next/head'
import {Box, Container} from '@chakra-ui/react'

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" contents="width=device-width, initial-scale=1" />
                <title>Omkar Kirpan - Homepage</title>
            </Head>

            <Container maxW="container.md" pd={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main