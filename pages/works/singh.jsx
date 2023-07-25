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
				<LinkItem href={`/works/singh/#projects`}> Current Projects </LinkItem>
				<LinkItem href={`/works/singh/#zero`} mt={-4} ml={3}> Zero Shot </LinkItem>
			</SideBar>

			<WorkTitle 
				title="Singh Lab @ Brown"
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
			<WorkSection header="Overview" id="overview">
				<Paragraph>
					The <Link as={NextLink} href="https://rsinghlab.org/">Singh Lab @ Brown <ExternalLinkIcon/></Link> is a Machine Learning research lab at Brown University.
					The lab aims to utilize modern machine learning techniques on patient genomic and medical image data to develop automated medical data analysis tools.
				</Paragraph>
			</WorkSection>

			<WorkSection header="Current Projects" id="projects">
				<WorkSubSection header="Zero Shot" id="zero">
					<Paragraph>
						My current project at the Singh Lab is a multimodal model which attempts to use contrastive learning in an attempt to learn an association between medical biopsy images and their clinical diagnoses.
					</Paragraph>
					<Paragraph>
						Recently, <Link as={NextLink} href="https://imagebind.metademolab.com/">ImageBind <ExternalLinkIcon/></Link> demonstrated the capability for Deep Learning models to learn a shared latent space across multiple data modalities, even in cases where most data points do not contain all modalities. 
					</Paragraph>
					<Paragraph>
						Moreover, a recent publication named <Link as={NextLink} href="https://arxiv.org/abs/2306.07831">MI-Zero <ExternalLinkIcon/></Link> attempts to create a similar shared latent space within patient medical data in order to learn an association between images and   
					</Paragraph>
					<Paragraph>
						We hope to be able to create a model which is similar in goal and function to MIZero, but also able to utilize other important modalities as demonstrated through ImageBind.
					</Paragraph>
				</WorkSubSection>
			</WorkSection>
		</Layout>
	)
}

export default Page