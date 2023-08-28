import Layout from '../../components/layouts/article'
import { Text } from '@chakra-ui/react'
import daebakThumb from '../../public/images/daebaklogo.jpg'
import { WorkSection, SideBar, WorkTitle, LinkItem  } from '../../components/work_util'

const Page = () => {
	return (
		<Layout title="DAEBAK">
			<SideBar> 
				<LinkItem href={`/interests/daebak`}> Home </LinkItem>
			</SideBar>

			<WorkTitle 
				title="DAEBAK Kpop Dance"
				role="Dancer"
				img={daebakThumb}
			>
			</WorkTitle>
			<WorkSection header="Work In Progress" id="wip">
				<Text> Coming Soon </Text>
			</WorkSection>
		</Layout>
	)
}

export default Page