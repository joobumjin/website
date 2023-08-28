import Layout from '../../components/layouts/article'
import { Text } from '@chakra-ui/react'
import tkmaThumb from '../../public/images/tkma.jpg'
import { WorkSection, SideBar, WorkTitle, LinkItem  } from '../../components/work_util'

const Page = () => {
	return (
		<Layout title="TKMA">
			<SideBar> 
				<LinkItem href={`/interests/tkd`}> Home </LinkItem>
			</SideBar>

			<WorkTitle 
				title="Tae Kwon Do - 태권도"
				role="4th Degree Black Belt"
				img={tkmaThumb}
			>
			</WorkTitle>
			<WorkSection header="Work In Progress" id="wip">
				<Text> Coming Soon </Text>
			</WorkSection>
		</Layout>
	)
}

export default Page