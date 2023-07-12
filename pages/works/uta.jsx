import { 
	Container, 
	Box, 
	Heading, 
	useColorModeValue, 
	Link,
	SimpleGrid,
	Text,
	Center } from '@chakra-ui/react'
// import { ChevronRightIcon } from '@chakra-ui/icons'
// import NextLink from 'next/link'
import Section from '../../components/section'
// import Paragraph from '../components/paragraph'
// import { BioSection, BioYear } from '../components/bios'
import Layout from '../../components/layouts/article'
import { UTASkills } from '../../components/skill'
import utaThumb from '../../public/images/brown_cs.png'
import { css } from '@emotion/react'
import NextLink from 'next/link'
import Image from 'next/image'
import { SectionHeader, SideBar } from '../../components/work_util'

/* eslint-disable react/display-name */
const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
    	as={NextLink}
    	href={href}
    	p={2}
    	bg={active ? 'grassTeal' : undefined}
    	color={active ? '#202023' : inactiveColor}
    	target={target}
    	{...props}
    >
      {children}
    </Link>
  )
}


const Page = () => {
	return (
		<Layout>			
			<SideBar> 
				<LinkItem href={`/works/uta`}> Home </LinkItem>
				<LinkItem href={`/works/uta/#overview`}> Overview </LinkItem>
			</SideBar>

			<Container 
				maxW={{base: '100%', md: '80%'}}
				ml={{base: '0%', md: '20%'}}
				mt={{base: 5, md: -20}}
				css={css`
					scroll-margin-top: 80px;
				`}
			>
				<Heading as="h2" variant="page-title" id="summary">
					CSCI 1470 / 2470: (Graduate) Deep Learning

				</Heading>
				<Text mb={10}>
					Undergraduate Teaching Assistant at Brown University
				</Text>

				<Center w="100%">
					<Box 
						w="750px" 
						h="500px" 
						align="center"  
						bg="white" 
						rounded="lg" 
						overflow="hidden"
						mb={6}
					>
						<Center w="100%" h="100%">
							<Image
								src={utaThumb}
								alt="CS 1470 UTA"
								placeHolder="blur"
								loading="lazy"
							/>
						</Center>
					</Box>
				</Center>

				<Container maxW="container.lg">
					<SimpleGrid columns={{base:1, md:2}} spacingX="40px" spacingY="5px">
						<Section>
							<Text fontSize="20" as='b'> Role </Text>
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
						</Section>

						<Section>
							<Text fontSize="20" as='b'> Tools </Text>
							<UTASkills/>
						</Section>
					</SimpleGrid>
				</Container>

				<SectionHeader id="overview">
					Overview
				</SectionHeader>

			</Container>
		</Layout>
	)
}

export default Page