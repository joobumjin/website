import { 
	Heading, 
	Stack, 
	Container, 
	Center, 
	Box, 
	Text, 
	Link,
	useColorModeValue } from '@chakra-ui/react'
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
    	target={target}
    	{...props}
    >
      {children}
    </Link>
  )
}

export const SectionHeader = ({id, children}) => {
	return (
		<Heading as="h2" variant="page-title" id={id}>
			{children}
		</Heading>
	)
}

export const SideBar = ({children}) => {
	return (
		<div class="sidebar">
			<Stack 
				direction={'column'}
				display={{base: 'none', md: 'flex'}}
				alignItems="left"
				mt={6}
			> 
				{children}
			</Stack>
		</div>
	)
}

export const WorkContent = ({title, role, img, children}) => {
	return (
		<Container 
			maxW={{base: '100%', md: '70%'}}
			ml={{base: '0%', md: '15%'}}
			mr={{base: '0%', md: '15%'}}
			mt={{base: 5, md: -20}}
			css={css`
				scroll-margin-top: 80px;
			`}
			mb={6}
		>
			<Heading as="h2" variant="page-title" id="summary">
				{title}
			</Heading>

			<Text mb={10}>
				{role}
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
							src={img}
							alt="CS 1470 UTA"
							placeHolder="blur"
							loading="lazy"
						/>
					</Center>
				</Box>
			</Center>

			{children}
		</Container>
	)
}