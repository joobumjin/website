import Layout from '../../components/layouts/article'
import { Text } from '@chakra-ui/react'
import mahmoodThumb from '../../public/images/mahmood_lab.png'
import { WorkSection, SideBar, WorkTitle, LinkItem  } from '../../components/work_util'

const Page = () => {
	return (
		<Layout title="Mahmood">
			<SideBar> 
				<LinkItem href={`/works/mahmood`}> Home </LinkItem>
			</SideBar>

			<WorkTitle 
				title="Mahmood Lab, Harvard University Medical School"
				role="Remote Research Intern"
				img={mahmoodThumb}
			>
			</WorkTitle>
			<WorkSection header="Work In Progress" id="wip">
				<Text> Coming Soon </Text>
			</WorkSection>
		</Layout>
	)
}

export default Page