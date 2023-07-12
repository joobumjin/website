import Layout from '../../components/layouts/article'
import { Text } from '@chakra-ui/react'
import utaThumb from '../../public/images/brown_cs.png'
import { SectionHeader, SideBar, WorkContent, LinkItem } from '../../components/work_util'

const Page = () => {
	return (
		<Layout>
			<SideBar> 
				<LinkItem href={`/works/mahmood`}> Home </LinkItem>
			</SideBar>

			<WorkContent 
				title="Singh Lab @ Brown University Dept. of CS"
				role="Student Researcher"
				img={utaThumb}
			>
				<Text> Work In Progress </Text>
			</WorkContent>
		</Layout>
	)
}

export default Page