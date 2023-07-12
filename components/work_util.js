import { Heading, Stack, Container } from '@chakra-ui/react'
import { css } from '@emotion/react'

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

export const WorkContent = ({children}) => {
	return (
		<Container 
			maxW={{base: '100%', md: '80%'}}
			ml={{base: '0%', md: '20%'}}
			mt={{base: 5, md: -20}}
			css={css`
				scroll-margin-top: 80px;
			`}
		>
			{children}
		</Container>
	)
}