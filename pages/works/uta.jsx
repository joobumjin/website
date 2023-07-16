import { 
	Container, 
	SimpleGrid,
	Text,
	UnorderedList,
	ListItem,
	Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Section from '../../components/section'
import Paragraph from '../../components/paragraph'
// import { BioSection, BioYear } from '../components/bios'
import Layout from '../../components/layouts/article'
import { UTASkills } from '../../components/skill'
import utaThumb from '../../public/images/brown_cs.png'
import { WorkSection, SideBar, WorkTitle, LinkItem, WorkSubSection } from '../../components/work_util'
import NextLink from 'next/link'

const Page = () => {
	// if (typeof window !== "undefined") {
	// 	const anchor_list = document.querySelectorAll(".nav_link");	

	// 	window.onscroll = () => {
	// 		console.log("checking for highlight");
	// 	  anchor_list.forEach((anchor_link) => {
	// 	  	var anchor_section = anchor_link.hash.slice(1);
	// 	  	if (anchor_link.hash === "") { 
	// 	  		anchor_section = "summary"; 
	// 	  	}
	// 	  	const section = document.getElementById(anchor_section);
	// 	  	if (section !== null) {
	// 		    const sectionTop = section.offsetTop;
	// 		    const sectionHeight = section.offsetHeight;
	// 		    if ((pageYOffset >= sectionTop) && (pageYOffset < sectionTop + sectionHeight)) {
	// 		      anchor_link.classList.add("active");
	// 		  	} else {
	// 		  		anchor_link.classList.remove("active");
	// 		  	}
	// 	  	}
	// 	  });
	// 	};
	// }

	return (
		<Layout title="UTA">			
			<SideBar> 
				<LinkItem href={`/works/uta`}> Home </LinkItem>
				<LinkItem href={`/works/uta/#overview`}> Overview </LinkItem>
				<LinkItem href={`/works/uta/#ta`}> UTA Responsibilities </LinkItem>
				<LinkItem href={`/works/uta/#oh`} mt={-4} ml={3}> Office Hours </LinkItem>
				<LinkItem href={`/works/uta/#lab`} mt={-4} ml={3}> Lab </LinkItem>
				<LinkItem href={`/works/uta/#ed`} mt={-4} ml={3}> Forum </LinkItem>
				<LinkItem href={`/works/uta/#grade`} mt={-4} ml={3}> Staff Meetings </LinkItem>
				<LinkItem href={`/works/uta/#dev`}> Course Dev Responsibilities </LinkItem>
			</SideBar>

			<WorkTitle 
				title="CSCI 1470 / 2470: (Graduate) Deep Learning"
				role="Undergraduate Teaching Assistant at Brown University"
				img={utaThumb}
			>
				<Container maxW="container.lg">
					<SimpleGrid columns={{base:1, md:2}} spacingX="40px" spacingY="5px">
						<Section>
							<Text fontSize="20" as='b'> Roles </Text>
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
			</WorkTitle>

			<WorkSection id="overview" header="Overview">

				<Paragraph>
					CSCI 1470 / 2470 is Brown University&apos;s Undergraduate / Graduate Deep Learning course taught by Professor Chen Sun each Fall and Professor Ritambhara Singh each Spring. 
					On average, roughly 220 students take in the course every semester.
				</Paragraph>

				<Text mt={3}> Course topics include: </Text>
					<UnorderedList mb={3}>
						<ListItem>Neural Networks</ListItem>
						<ListItem>Autodifferentiation in PyTorch, Tensorflow</ListItem>
						<ListItem>Convolutional Neural Networks</ListItem>
						<ListItem>Recurrent Networks (RNN, LSTM, GRU)</ListItem>
						<ListItem>Transformers</ListItem>
						<ListItem>Variational Auto Encoders</ListItem>
						<ListItem>Generative Adversarial Networks</ListItem>
						<ListItem>Reinforcement Learning</ListItem>
					</UnorderedList>

				<Paragraph>
					As a UTA and Course Dev, I was part of CS1470&apos;s main point of contact between students and the course. 
					The course's primary website can be found <Link as={NextLink} href="http://www.cs.brown.edu/courses/csci1470/">here<ExternalLinkIcon mx='2px' />.</Link>
				</Paragraph>
			
			</WorkSection>

			<WorkSection id="ta" header="Responsibilities as a UTA">
				<Paragraph>
					As an undergraduate teaching assistant, my responsibilities included: hosting weekly office hours, teaching a weekly lab section, resolving student issues on our class forum, grading assignments, and participating in a weekly progress meeting. 
				</Paragraph>

				<WorkSubSection id="oh" header="Office Hours">
					<Paragraph>
					Every week, I held hybrid (In Person/Remote) office hours for 2 hours. 
					During these office hour sessions, students could sign up to be claimed through Brown CS&apos;s queue system: <Link as={NextLink} href="https://hours.cs.brown.edu/">Hours at Brown<ExternalLinkIcon mx='2px' />.</Link>
					Once claimed, they would have 15-20 minutes to ask any questions regarding any course related work.
					</Paragraph>
					<Paragraph>
					I most commonly answered conceptual questions regarding the math and functionality of DL models introduced in class or helped students resolve implementation specific issues. 
					I would also work to fix any issues discovered in given code.
					</Paragraph>
				</WorkSubSection>

				<WorkSubSection id="lab" header="Weekly Lab">

				</WorkSubSection>

				<WorkSubSection id="ed" header="Forum Questions: EdStem">

				</WorkSubSection>

				<WorkSubSection id="grade" header="Grading/Weekly Staff Meetings">

				</WorkSubSection>
				<Paragraph>
		Debugged course code based on student reports and deployed bug fixes during the course.

					Participated in weekly staff discussions covering student progress, presenting on upcoming projects, and implementing changes to improve course quality.

					Taught lab sections and answered student questions regarding undergraduate & graduate course material, student code bugs, and problems in lab assignments
					</Paragraph>
			</WorkSection> 

			<WorkSection id="dev" header="Responsibilities as a Course Dev">
					Developed course materials and assignments for over 200 students including written conceptual questions, interactive Notebook coding problems, and full Deep Learning model assignments.

			</WorkSection> 
		</Layout>
	)
}

export default Page