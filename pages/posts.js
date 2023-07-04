import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import ex from '../public/images/prof_pic.png'

const Posts = () => (
	<Layout title="posts">
		<Container>
			<Heading as="h4" fontSize={20} mb={4}>
				Popular Posts
			</Heading>

			<Section delay={0.1}>
				<SimpleGrid columns = {[1,1,2]} gap={6}>
					<GridItem title="Example" thumbnail={ex} href="https://www.google.com"/>
				</SimpleGrid>
			</Section>
		</Container>
	</Layout>
) 

export default Posts