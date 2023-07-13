/* 
	SOURCES: 
	https://chakra-ui.com/docs/components/menu/theming 
	https://github.com/chakra-ui/chakra-ui/discussions/5326
*/

import { 
	createMultiStyleConfigHelpers, 
	defineStyle } from '@chakra-ui/react' // eslint-disable-line
import { menuAnatomy } from '@chakra-ui/anatomy'

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