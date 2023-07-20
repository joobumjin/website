import Layout from '../../components/layouts/article'
import { Text } from '@chakra-ui/react'
import csThumb from '../../public/images/brown_cs.png'
import { WorkSection, SideBar, WorkTitle, LinkItem  } from '../../components/work_util'

const Page = () => {
	return (
		<Layout title="Singh">
			<SideBar> 
				<LinkItem href={`/works/singh`}> Home </LinkItem>
			</SideBar>

			<WorkTitle 
				title="Singh Lab @ Brown University Dept. of CS"
				role="Student Researcher"
				img={csThumb}
			>
			</WorkTitle>
			<WorkSection header="Work In Progress" id="wip">
				<Text> Coming Soon </Text>
			</WorkSection>
		</Layout>
	)
}

export default Page