import NextLink from 'next/link'
import{ Box, Heading, Text, Container, Divider, Button } from '@chakra-ui/react'

const NotFound = () => {
	return (
		<Container>
			<Heading as="h1"> Not Found </Heading>
			<Text mt={3}> The page you requested could not be found </Text>
			<Divider my={6} />

			<Box my={6} align="center">
				<NextLink href="/">
					<Button>Return to Home</Button> 
				</NextLink>
			</Box>
		</Container>
	)
}

export default NotFound