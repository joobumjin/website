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
import { UTASkills } from '../../components/skill'
import utaThumb from '../../public/images/uta.png'
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
				<LinkItem href={`/works/uta/#ed`} mt={-4} ml={3}> Forum </LinkItem>
				<LinkItem href={`/works/uta/#lab`} mt={-4} ml={3}> Lab </LinkItem>
				<LinkItem href={`/works/uta/#grade`} mt={-4} ml={3}> Staff Meetings </LinkItem>
				<LinkItem href={`/works/uta/#dev`}> Course Dev Responsibilities </LinkItem>
				<LinkItem href={`/works/uta/#takeaways`}> Takeaways </LinkItem>
			</SideBar>

			<WorkTitle 
				title="CSCI 1470 / 2470: (Graduate) Deep Learning"
				role="Undergraduate Teaching Assistant at Brown University"
				img={utaThumb}
			>
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
							May, 2022 - Present
						</Text>
					</Section>

					<Section>
						<Text fontSize="20" as='b'> Skills </Text>
						<Text>
							MLE, SWE, Version Control, Unit Testing, Debugging
						</Text>
					</Section>

					<Section>
						<Text fontSize="20" as='b'> Tools </Text>
						<UTASkills/>
					</Section>
				</SimpleGrid>
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
					The course&apos;s primary website can be found <Link as={NextLink} href="http://www.cs.brown.edu/courses/csci1470/">here<ExternalLinkIcon mx='2px' /></Link>.
				</Paragraph>
			
			</WorkSection>

			<WorkSection id="ta" header="Responsibilities as a UTA">
				<Paragraph>
					As an undergraduate teaching assistant, my responsibilities included: hosting weekly office hours, teaching a weekly lab section, resolving student issues on our class forum, grading assignments, and participating in a weekly progress meeting. 
				</Paragraph>

				<WorkSubSection id="oh" header="Office Hours">
					<Paragraph>
					Every week, I held hybrid (In Person/Remote) office hours for 2 hours. 
					During these office hour sessions, students could sign up to be claimed through Brown CS&apos;s queue system: <Link as={NextLink} href="https://hours.cs.brown.edu/">Hours at Brown<ExternalLinkIcon mx='2px' /></Link>.
					Once claimed, they would have 15-20 minutes to ask any questions regarding any course related work.
					</Paragraph>
					<Paragraph>
					I most commonly answered conceptual questions regarding the math and functionality of DL models introduced in class or helped students resolve implementation specific issues. 
					I would also work to fix any issues discovered in given code.
					</Paragraph>
				</WorkSubSection>

				<WorkSubSection id="ed" header="Forum Questions: EdStem">
					<Paragraph>
					Supplementing these office hours, CS1470 also had a forum open to students. In the forum, students could post questions, problems, and responses to others.
					Staff could post important course updates and also answer student questions or endorse student solutions.
					</Paragraph>
					<Paragraph>
					Oftentimes, I would debug implementation specific code within students&apos; code. This would involve cloning their project repository and reading / testing their code on my local machine.
					</Paragraph>
				</WorkSubSection>

				<WorkSubSection id="lab" header="Weekly Lab">
					<Paragraph>
					I also taught a weekly lab. These labs were interactive Notebook assignments which would introduce students to new content.
					As the TA for the lab, I would go around answering any questions and checking student progress.
					If any bugs came up during the lab, I would also fix those bugs by making edits to the Google Colab stencils
					</Paragraph>
				</WorkSubSection>

				<WorkSubSection id="grade" header="Staff Meetings / Grading">
					<Paragraph>
					At weekly staff meetings, the course staff would meet to discuss course progress, make adjustments to assignments and the progression of the course, and grade assignments. 
					As a majority of the homework assignments were rewritten, we closely monitored these homeworks both technically and pedagogically.
					</Paragraph>

					<Paragraph>
					In particular, we made sure to quickly patch and release fixes for bugs in stencil code when they were reported on EdStem. 
					Additionally, we considered a rough average of student difficulty to guide how assignments were adjusted and grdaed.
					</Paragraph>
				</WorkSubSection>
			</WorkSection> 

			<WorkSection id="dev" header="Responsibilities as a Course Dev">
				<Paragraph>
				Another active responsibility as a TA was to help develop the assignments to align with the professors&apos; visions for the course.
				</Paragraph>
				<Paragraph>
				Specifically, I developed course materials and assignments for over 200 students including written conceptual questions, interactive Notebook coding problems, and full Deep Learning model assignments. 

				The first assignment I helped develop was an interactive Notebook assignment where students would implement a heavily simplified version of PyTorch&apos;s Tensor/Autogradient tree structure.
				Next, I helped develop the following assignment in which students implemented a boiled-down version of Tensorflow&apos;s/Keras&apos;s Autograd graph traversal structure.
				</Paragraph>

				<Paragraph>
				In general, I also contributed to testing and autograding. Specifically, I helped write Bash scripts which would be run from the machine receiving submissions as well as the Python code that would verify the functionality of the submitted code. 
				</Paragraph>
			</WorkSection> 

			<WorkSection id="takeaways" header="Takeaways as a CS1470 TA">
				<Paragraph>
					As my first experience as a Teaching Assistant, this job has been a great learning opportunity in many ways.
				</Paragraph>
				<Paragraph>
					Firstly, I am very grateful to have worked with many excellent coders and learned from their perspectives, both as fellow staff members and students.
				</Paragraph>
				<Paragraph>
					I have also continued to grow in my technical abilities as I worked through, developed, and fixed course material. 
					In particular, I enjoyed being able to explore more modern DL concepts like attentioning, transformers, and generative models (e.g. GANs), just to name a few. 
				</Paragraph>
			</WorkSection>

		</Layout>
	)
}

export default Page