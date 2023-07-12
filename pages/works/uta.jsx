import { 
	Container, 
	SimpleGrid,
	Text} from '@chakra-ui/react'
// import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../../components/section'
import Paragraph from '../../components/paragraph'
// import { BioSection, BioYear } from '../components/bios'
import Layout from '../../components/layouts/article'
import { UTASkills } from '../../components/skill'
import utaThumb from '../../public/images/brown_cs.png'
import { SectionHeader, SideBar, WorkContent, LinkItem } from '../../components/work_util'


const Page = () => {
	return (
		<Layout>			
			<SideBar> 
				<LinkItem href={`/works/uta`}> Home </LinkItem>
				<LinkItem href={`/works/uta/#overview`}> Overview </LinkItem>
			</SideBar>

			<WorkContent 
				title="CSCI 1470 / 2470: (Graduate) Deep Learning"
				role="Undergraduate Teaching Assistant at Brown University"
				img={utaThumb}
			>
				<Container maxW="container.lg">
					<SimpleGrid columns={{base:1, md:2}} spacingX="40px" spacingY="5px">
						<Section>
							<Text fontSize="20" as='b'> Role </Text>
							<Text>
								Undergraduate Teaching Assistant,
								Summer Course Developer
							</Text>
						</Section>

						<Section>
							<Text fontSize="20" as='b'> Timeline </Text>
							<Text>
								July, 2022 - Present
							</Text>
						</Section>

						<Section>
							<Text fontSize="20" as='b'> Skills </Text>
							<Text>
								MLE, SWE, Version Control,
							</Text>
						</Section>

						<Section>
							<Text fontSize="20" as='b'> Tools </Text>
							<UTASkills/>
						</Section>
					</SimpleGrid>
				</Container>

				<SectionHeader id="overview">
					Overview
				</SectionHeader>

				<Paragraph>
					As a staff member of the Brown CS&apos; Deep Learning course, I had two main roles: Undergraduate TA and Course Developer.

					Developed course materials and assignments for over 200 students including written conceptual questions, interactive Notebook coding problems, and full Deep Learning model assignments.

					Debugged course code based on student reports and deployed bug fixes during the course.

					Participated in weekly staff discussions covering student progress, presenting on upcoming projects, and implementing changes to improve course quality.

					Taught lab sections and answered student questions regarding undergraduate & graduate course material, student code bugs, and problems in lab assignments
				</Paragraph>

			</WorkContent>
		</Layout>
	)
}

export default Page