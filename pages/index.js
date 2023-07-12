import { 
	Container, 
	Box, 
	Heading, 
	Image, 
	useColorModeValue, 
	Button,
	Icon,
	Link,
	SimpleGrid } from '@chakra-ui/react'
// import { ChevronRightIcon } from '@chakra-ui/icons'
// import NextLink from 'next/link'
import Section from '../components/section'
// import Paragraph from '../components/paragraph'
// import { BioSection, BioYear } from '../components/bios'
import Layout from '../components/layouts/article'
import {
	IoLogoGithub,
	IoLogoLinkedin,
	IoMail
} from 'react-icons/io5'
import { WorkCardImg, WorkCardDesc } from '../components/grid-item'
import { UTASkills, SinghSkills, SkillDesc } from '../components/skill'
import utaThumb from '../public/images/brown_cs.png'
import mahmoodThumb from '../public/images/mahmood_lab.png'
import { css } from '@emotion/react'


const Page = () => {
	return (
		<Layout>
			<Container 
				maxW="container.lg"
				css={css`
					scroll-margin-top: 80px;
				`}
			>
				<Box borderRadius ="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mt={1} mb={6} align="center">
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
					<Heading 
						as="h3" 
						variant="section-title" 
						id="work" 
						css={css`
							scroll-margin-top: 80px;
						`}
					>
						Work
					</Heading>
					<Container maxW="container.lg">
						<SimpleGrid columns={{base:1, md:2}} spacingX="40px" spacingY="20px">
							<Section>
								<WorkCardImg id="uta" title="CS1470 UTA" thumbnail={utaThumb}/>
							</Section>
							<Section>
								<WorkCardDesc 
									id="uta" 
									position="Undergraduate Teaching Assistant" 
									team="Brown University CS1470/2470: Deep Learning" 
									skills=<UTASkills/>
								>
								</WorkCardDesc>
							</Section>

							<Section>
								<WorkCardImg id="singh" title="Singh Lab" thumbnail={utaThumb}/>
							</Section>
							<Section>
								<WorkCardDesc 
									id="singh" 
									position="Student Researcher" 
									team="Singh Lab @ Brown University" 
									skills=<SinghSkills/>
								>
								</WorkCardDesc>
							</Section>

							<Section>
								<WorkCardImg id="mahmood" title="Mahmood Lab" thumbnail={mahmoodThumb}/>
							</Section>
							<Section>
								<WorkCardDesc 
									id="mahmood" 
									position="Remote Research Intern" 
									team="Mahmood Lab, Harvard Medical School" 
									skills=<UTASkills/>
								>
								</WorkCardDesc>
							</Section>
						</SimpleGrid>
					</Container>
				</Section>

				<Section delay={0.2}>
					<Heading 
						as="h3" 
						variant="section-title" 
						id="skills" 
						css={css`
							scroll-margin-top: 80px;
						`}
					>
						Skills
					</Heading>
					<Container maxW="container.lg">
						<SkillDesc title="Machine Learning">
							Familiar with most widely used machine learning frameworks like Tensorflow, Keras, and PyTorch.
						</SkillDesc>
					</Container>
				</Section>				
			</Container>
			<Container> 
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
		</Layout>
	)
}

export default Page