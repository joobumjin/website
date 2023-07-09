import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import NavBar from '../navbar'

const Main = ({children, router}) => {
	return (
		<Box as="main" pb={8}>
			<Head>
				<meta name="viewport" content="width=100px, initial-scale=1" />
				<title> Bumjin Joo - Home </title>
			</Head>

			<NavBar props={router.asPath} />

			<Container maxW="container.lg" pt={14} position="relative" zIndex={0}>
				{children}
			</Container>
		</Box>
	)
}


export default Main
