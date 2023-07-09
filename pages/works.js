import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import utaThumb from '../public/images/brown_cs.png'

const Works = () => {
	return (
		<Container maxW="container.lg">
			<Heading as="h3" fontSize={20} mb={4}>
				Works
			</Heading>

			<SimpleGrid columns={[1,1,2]} gap={6}>
				<Section>
					<WorkGridItem id="uta" title="CS1470 UTA" thumbnail={utaThumb}>
						Filler about TAing
					</WorkGridItem>
				</Section>
			</SimpleGrid>
		</Container>
	)
}

export default Works