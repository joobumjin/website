import { forwardRef } from 'react'
import NextLink from 'next/link'
import {
	Container,
	Box,
	Link,
	Stack,
	Heading,
	Flex,
	Menu,
	MenuItem,
	MenuList,
	MenuButton,
	IconButton,
	useColorModeValue,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Logo from './logos'
import ThemeToggleButton from './theme-toggle-button'

/* eslint-disable react/display-name */
const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
    	as={NextLink}
      href={href}
      p={2}
      // bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const NavBar = props => {
	const { path } = props

	return (
		<Box 
			position="fixed" 
			as="nav" 
			w="100%" 
			bg={useColorModeValue('#ffffff40', '#20202380')}
			style={{backdropFilter:'blur(10px'}}
			zIndex={1}
			{...props}
		>
			<Container 
				display="flex" 
				p={2} maxW="container.md" 
				wrap="wrap" 
				align="center" 
				justify="space-between"
			>
				<Flex align="center" mr={5}>
					<Heading as="h1" size="lg" letterSpacing={'tighter'}>
						<Logo />
					</Heading>
				</Flex>
				
				<Stack
					direction={{base:'column', md: 'row'}}
					display={{base:'none', md: 'flex'}}
					width={{base:'full', md: 'auto'}}
					alignItems="center"
					flexGrow = {1}
					mt={{base: 4, nmd: 0}}
				>
					<LinkItem href="/#work" path={path}>
						Work
					</LinkItem>

					<LinkItem href="/#skills" path={path}>
						Skills
					</LinkItem>

					<LinkItem href="/#interests" path={path}>
						Interests
					</LinkItem>

					<LinkItem href="https://www.overleaf.com/read/gpmckphwbtkh">
						Resume
					</LinkItem>

				</Stack>

				<Box flex={1} align="right">
					<ThemeToggleButton />
					<Box ml={2} display={{base: 'inline-block', md:'none'}}>
						<Menu>
							<MenuButton 
								as={IconButton} 
								icon={<HamburgerIcon />}
								variant="outline" 
								aria-label="Options"
							/>
							<MenuList>
								<MenuItem as={MenuLink} href="/">
									Home
								</MenuItem>

								<MenuItem as={Link} href="/#work">
									Work
								</MenuItem>
								
								<MenuItem as={Link} href="/#skills">
									Skills
								</MenuItem>

								<MenuItem as={Link} href="/#interests">
									Interests
								</MenuItem>

								<MenuItem as={Link} href="https://www.overleaf.com/read/gpmckphwbtkh">
									Resume
								</MenuItem>
							</MenuList>
						</Menu>
					</Box>
				</Box>

				
			</Container>
		</Box>
	)
}

export default NavBar