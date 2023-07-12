import Layout from '../../components/layouts/article'
import { Text } from '@chakra-ui/react'
import mahmoodThumb from '../../public/images/mahmood_lab.png'
import { SectionHeader, SideBar, WorkContent, LinkItem } from '../../components/work_util'

const Page = () => {
	return (
		<Layout>
			<SideBar> 
				<LinkItem href={`/works/mahmood`}> Home </LinkItem>
			</SideBar>

			<WorkContent 
				title="Mahmood Lab, Harvard University Medical School"
				role="Remote Reserach Intern"
				img={mahmoodThumb}
			>
				<Text> Work In Progress </Text>
			</WorkContent>
		</Layout>
	)
}

export default Page