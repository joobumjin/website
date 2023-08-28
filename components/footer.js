import {Container, Box, Button, Icon, Link, Text} from '@chakra-ui/react'
import {
	IoLogoGithub,
	IoLogoLinkedin,
	IoMail,
	IoHeart
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
			<Text align='center' mt={3} fontSize={13} fontWeight={100}>
				Designed with <Icon as={IoHeart} color="teal"/> by Bumjin Joo. Inspired by <Link href="https://craftz.dog">craftzdog</Link>. 
			</Text>
		</Container>
	)
}