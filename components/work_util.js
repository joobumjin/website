import { Heading, Stack } from '@chakra-ui/react'

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