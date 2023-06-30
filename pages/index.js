import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
	return (
		<Container>
			<Box borderRadius ="lg" bg="white" p={3} mb={6} align="center">
				Hello! I&apos;m a CS Undergraduate at Brown University
			</Box>

			<Box display={{ md : 'flex'}}>
				<Box flexGrow = {1}>
					<Heading as="h2" variant="page-title">
						Bumjin Joo
					</Heading>
					<p> Machine Learning Engineer, Software Engineer, Student </p>
				</Box>
			</Box>
		</Container>
	)
}

export default Page