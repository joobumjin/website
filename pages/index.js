import { 
	Container, 
	Box, 
	Heading, 
	Image, 
	useColorModeValue, 
	SimpleGrid,
	UnorderedList, ListItem } from '@chakra-ui/react'
// import { ChevronRightIcon } from '@chakra-ui/icons'
// import NextLink from 'next/link'
import Section from '../components/section'
// import Paragraph from '../components/paragraph'
// import { BioSection, BioYear } from '../components/bios'
import Layout from '../components/layouts/article'
import { WorkCardImg, WorkCardDesc, InterestCardImg, InterestCardDesc } from '../components/grid-item'
import { UTASkills, SinghSkills, MahmoodSkills, SkillDesc } from '../components/skill'
import utaThumb from '../public/images/uta.png'
import brownCS from '../public/images/brown_cs.png'
import mahmoodThumb from '../public/images/mahmood_lab.png'
import daebakThumb from '../public/images/daebaklogo.jpg'
import tkmaThumb from '../public/images/tkma.jpg'
import { css } from '@emotion/react'


const Page = () => {
	return (
		<Layout title="Home">
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
					<Container maxW="container.lg" mt={6}>
						<SimpleGrid 
							columns={{base:1, md:2}} 
							spacingX="20px" 
							spacingY="20px"
							mb="20px"
						>
							<Section>
								<WorkCardImg id="uta" title="CS1470 UTA" thumbnail={utaThumb}/>
							</Section>
							<Section>
								<WorkCardDesc 
									id="uta" 
									position="Undergraduate Teaching Assistant" 
									team={"Brown CS1470/2470: Deep Learning"} 
									skills=<UTASkills/>
								>
								</WorkCardDesc>
							</Section>

							<Section>
								<WorkCardImg id="singh" title="Singh Lab" thumbnail={brownCS}/>
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
									skills=<MahmoodSkills/>
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
							<UnorderedList>
								<ListItem>Experienced with most widely used machine learning frameworks like Tensorflow, Keras, and PyTorch.</ListItem>
								<ListItem>Proficient in Machine Learning research on large scale datasets.</ListItem>
								<ListItem>Practiced in model training, tuning, and evaluation.</ListItem>
							</UnorderedList>
						</SkillDesc>
						<SkillDesc title="Software Engineering">
							<UnorderedList>
								<ListItem>Comfortable with virtualization throguh Conda/Python VEnvs and containerization through Docker.</ListItem>
								<ListItem>Skilled at version control management through Git.</ListItem>
								<ListItem>Experienced with Agile Development patterns.</ListItem>
								<ListItem>Adept at testing code functionality by writing unit and system tests.</ListItem>
							</UnorderedList>
						</SkillDesc>
					</Container>
				</Section>

				<Section delay={0.3}>
					<Heading 
						as="h3" 
						variant="section-title" 
						id="interests" 
						css={css`
							scroll-margin-top: 80px;
						`}
					>
						Interests
					</Heading>
					<Container maxW="container.lg" mt={6}>
						<SimpleGrid 
							columns={{base:1, md:2}} 
							spacingX="20px" 
							spacingY="20px"
							mb="20px"
						>
							<Section>
								<InterestCardImg id="daebak" title="DAEBAK eBoard" thumbnail={daebakThumb}/>
							</Section>
							<Section>
								<InterestCardDesc 
									id="daebak" 
									position="Performer, Secretary" 
									name="DAEBAK k-pop Dance"
								>
								</InterestCardDesc>
							</Section>

							<Section>
								<InterestCardImg id="tkd" title="Taekwondo" thumbnail={tkmaThumb}/>
							</Section>
							<Section>
								<InterestCardDesc 
									id="tkd" 
									position="Black Belt, Master, Competitor" 
									name="Brown Taekwondo" 
								>
								</InterestCardDesc>
							</Section>

							{/*<Section>
								<InterestCardImg id="keebs" title="Keyboards" thumbnail={brownCS}/>
							</Section>
							<Section>
								<InterestCardDesc 
									id="keebs" 
									position="Keyboard Maker" 
									name="Keebs" 
								>
								</InterestCardDesc>
							</Section>*/}
						</SimpleGrid>
					</Container>
				</Section>				
			</Container>
		</Layout>
	)
}

export default Page