import { 
	createMultiStyleConfigHelpers, 
	defineStyle } from '@chakra-ui/react'
import { menuAnatomy } from '@chakra-ui/anatomy'
import { mode } from '@chakra-ui/theme-tools'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys)

const baseStyle = definePartsStyle({
	list: {
		bg: mode('#202023', '#ffffff')
	},
  item: {
  	bg: mode('#202023', '#ffffff')
	}
})

export const menuTheme = defineMultiStyleConfig({ baseStyle })