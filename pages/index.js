import { 
	Container, 
	Box, 
	Heading, 
	Image, 
	useColorModeValue, 
	Button,
	Stack,
	Icon,
	Link,
	HStack } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bios'
import Layout from '../components/layouts/article'
import {
	IoLogoGithub,
	IoLogoLinkedin,
	IoMail
} from 'react-icons/io5'

const Page = () => {
	return (
		<Layout>
			<Container>
				<Box borderRadius ="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
					Hello! I&apos;m a CS Undergraduate at Brown University
				</Box>

				<Box display={{ md : 'flex'}}>
					<Box flexGrow = {1}>
						<Heading as="h2" variant="page-title">
							Bumjin Joo
						</Heading>
						<p> Machine Learning Engineer, Software Engineer, Student </p>
					</Box>
					<Box flexShrink={0} mt={{base:4, md:0}} ml={{md:6}} align="center">
						<Image 
							borderColor="whiteAlpha.800" 
							borderWidth={2} 
							borderStyle="solid" 
							maxWidth="100px" 
							display="inline-block" 
							borderRadius="full"
							src="/images/prof_pic.png"
							alt="Bumjin's Profile Picture" />
					</Box> 
				</Box>

				<Section delay={0.1}>
					<Heading as="h3" variant="section-title">
						Work
					</Heading>
					<Paragraph>
						Paragraph
					</Paragraph>
					<Box align="center" my={4}>
						<NextLink href="/works">
							<Button rightIcon={<ChevronRightIcon/>} colorScheme="teal"> 
								My Work
							</Button>
						</NextLink>
					</Box>
				</Section>

				<Section delay={0.2}>
					<Heading as="h3" variant="section-title">
						Bio
					</Heading>
					<BioSection>
						<BioYear>yyyy</BioYear> Paragraph
					</BioSection>
				</Section>

				<Section delay={0.2}>
					<Heading as="h3" variant="section-title">
						Interests
					</Heading>
					<Paragraph>
						Paragraph
					</Paragraph>
				</Section>				
			</Container>
			<Container> 
				<Box align="center">
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
		</Layout>
	)
}

export default Page