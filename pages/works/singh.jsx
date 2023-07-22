import { 
	SimpleGrid,
	Text,
	UnorderedList,
	ListItem,
	Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Section from '../../components/section'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { SinghSkills } from '../../components/skill'
import brownCSThumb from '../../public/images/brown_cs.png'
import { WorkSection, SideBar, WorkTitle, LinkItem, WorkSubSection } from '../../components/work_util'
import NextLink from 'next/link'

const Page = () => {
	return (
		<Layout title="Singh">
			<SideBar> 
				<LinkItem href={`/works/singh`}> Home </LinkItem>
				<LinkItem href={`/works/singh/#overview`}> Overview </LinkItem>
			</SideBar>

			<WorkTitle 
				title="Singh Lab @ Brown University CS"
				role="Student Researcher"
				img={brownCSThumb}
			>
				<SimpleGrid columns={{base:1, md:2}} spacingX="40px" spacingY="5px">
					<Section>
						<Text fontSize="20" as='b'> Roles </Text>
						<Text>
							Student Researcher
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
							MLE, SWE, ML Research, Debugging
						</Text>
					</Section>

					<Section>
						<Text fontSize="20" as='b'> Tools </Text>
						<SinghSkills/>
					</Section>
				</SimpleGrid>
			</WorkTitle>
			<WorkSection header="Work In Progress" id="wip">
				<Text> Coming Soon </Text>
			</WorkSection>
			<WorkSection header="Overview" id="overview">
				<Text> Coming Soon </Text>
			</WorkSection>
		</Layout>
	)
}

export default Page