import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { menuTheme } from './menu_theme'

const styles = {
	global : props => ({
		body: {
			bg: mode('#f0e7db', '#202023')(props),
		},
		html: {
			"scrollBehavior": "smooth !important"
		},
		".sidebar": {
			position: "sticky",
			top: "80px"
		},
		list: {
			bg: mode('#f0e7db', '#202023')(props)
		},
		".nav_link.active": {
			fontWeight: 700
		},
		h2: {
			
		}
	})
}

const components = {
	Heading: {
		baseStyle : () => ({
			"scrollMarginTop": "80px"
		}),
		variants: {
			'section-title': {
				textDecoration: 'underline',
				fontSize: 20,
				textUnderlineOffset: 6,
				textDecorationColor: '#525252',
				textDecorationThickness: 4,
				marginTop: 3,
				marginBottom: 4
			}
		},
	},
	Link: {
		baseStyle: props => ({
			color: mode('#3d7aed', '#ff63c3')(props),
			textUnderlineOffset: 3
		})
	},
	Menu: menuTheme,
	SkillTitle: {
		textDecoration: 'underline',
		fontSize: 20,
		textUnderlineOffset: 6,
		textDecorationColor: '#525252',
		textDecorationThickness: 4,
		marginTop: 3,
		marginBottom: 4,
	}
}

const fonts = {
	heading: `'Montserrat'`,
	body: `'Montserrat'`
}

const colors = {
	grassTeal: '#88ccca'
}

const config = {
	initialColorMode: 'dark',
	useSystemColorMode: true
}

const theme = extendTheme({
	config, 
	styles, 
	components,
	colors,
	fonts
})

export default theme