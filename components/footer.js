import {Container, Box, Button, Icon, Link} from '@chakra-ui/react'
import {
	IoLogoGithub,
	IoLogoLinkedin,
	IoMail
} from 'react-icons/io5'

export const ContactFooter = () => {
	return (
		<Container mt={6}> 
			<Box 
				align="center"
				id="contact"
			>
				<Link href="https://github.com/joobumjin">
					<Button 
						variant="ghost" 
						colorScheme="teal"
						leftIcon = {<Icon as={IoLogoGithub} boxSize="24px"/>}
					/>
				</Link>

				<Link href="https://www.linkedin.com/in/bumjin-joo/">
					<Button 
						variant="ghost" 
						colorScheme="teal"
						leftIcon = {<Icon as={IoLogoLinkedin} boxSize="24px"/>}
					/>
				</Link>

				<Link href="mailto:bumjin.joo@gmail.com">
					<Button 
						variant="ghost" 
						colorScheme="teal"
						leftIcon = {<Icon as={IoMail} boxSize="24px"/>}
					/>
				</Link>
			</Box>
		</Container>
	)
}