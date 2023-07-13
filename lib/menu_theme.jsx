import { 
	createMultiStyleConfigHelpers, 
	defineStyle } from '@chakra-ui/react' // eslint-disable-line
import { menuAnatomy } from '@chakra-ui/anatomy'
import { mode } from '@chakra-ui/theme-tools'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys)

const baseStyle = definePartsStyle({
	list: {
		_dark: {
			'--menu-bg': '#202023',
		},
		_light: {
			'--menu-bg': '#ffffff',
		}
	},
  item: {
  	dark: {
  		'--menu-bg': '#202023',
  	},
  	_light: {
  		'--menu-bg': '#ffffff',
  	},
	}
})

export const menuTheme = defineMultiStyleConfig({ baseStyle })