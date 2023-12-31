import { 
	Heading, 
	Stack, 
	Container, 
	Center,  
	Text, 
	Link,
	useColorModeValue,
	AspectRatio } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { css } from '@emotion/react'

/* eslint-disable react/display-name */
export const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
    	as={NextLink}
    	href={href}
    	p={2}
    	bg={active ? 'grassTeal' : undefined}
    	color={active ? '#202023' : inactiveColor}
    	// color={'grassTeal'}
    	fontWeight={600}
    	target={target}
    	className="nav_link"
    	{...props}
    >
      {children}
    </Link>
)}

export const WorkSection = ({id, header, children}) => {
	return (
		<Container 
			id={id}
			maxW="750px"
			ml={{lg: "15%"}}
			css={css`
					scroll-margin-top: 80px;
				`}
		>
			<Heading as="h2" variant="work-section-title">
				{header}
			</Heading>
			{children}
		</Container>
	)
}

export const WorkSubSection = ({id, header, children}) => {
	return (
		<Container 
			id={id}
			maxW="700px"
			css={css`
					scroll-margin-top: 80px;
				`}
		>
			<Heading as="h2" variant="work-subsection-title">
				{header}
			</Heading>
			{children}
		</Container>
	)
}

export const SideBar = ({children}) => {
	return (
		<div className="sidebar">
			<Stack 
				direction={'column'}
				display={{base: 'none', lg: 'flex'}}
				alignItems="left"
				maxW={{base: '0%', lg: '15%'}}
				position="absolute"
			> 
				{children}
			</Stack>
		</div>
	)
}

export const WorkTitle = ({title, role, img, children}) => {
	return (
		<Container 
			maxW={{base: '100%', lg: '70%'}}
			ml={{base:"0%", lg: "15%"}}
			mt={3}
			id="summary"
		>
			<Container 
				maxW="750px"
			>
			<Heading 
				as="h2" 
				variant="page-title" 
				css={css`
					scroll-margin-top: 80px;
				`}
			>
				{title}
			</Heading>

			<Text mt={2} mb={6}>
				{role}
			</Text>

			<Center w="100%">
				<AspectRatio 
					w="750px" 
					ratio={15 / 8}
					align="center"  
					bg="white" 
					rounded="lg" 
					overflow="hidden"
					mb={6}
				>
					<Center w="100%" h="100%">
						<Image
							src={img}
							fit="cover"
							alt={title}
							placeholder="blur"
							loading="lazy"
						/>
					</Center>
				</AspectRatio>
			</Center>
			<Container
				maxW="750px"
			>
			{children}
			</Container>
			</Container>
		</Container>
	)
}