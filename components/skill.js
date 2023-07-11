import { Tag, TagLabel, Stack, Box, Heading, Text, Divider } from '@chakra-ui/react'

export const SkillCard = ({color, children}) => {
	return (
		<Tag
			size="lg"
			variant="outline"
			colorScheme={color}
			borderRadius="full"
		>
			<TagLabel>{children}</TagLabel>
		</Tag>
	)
}

export const UTASkills = () => {
	return (
		<Stack direction={['column', 'row']} mt={2}>
			<SkillCard color="orange"> Tensorflow </SkillCard>
			<SkillCard color="red"> Keras </SkillCard>
			<SkillCard color="red"> PyTorch </SkillCard>
			<SkillCard color="blue"> Git </SkillCard>
		</Stack>
	)
}

export const SinghSkills = () => {
	return (
		<Stack direction={['column', 'row']} mt={2}>
			<SkillCard color="orange"> Tensorflow </SkillCard>
			<SkillCard color="red"> PyTorch </SkillCard>
			<SkillCard color="red"> Jupyter </SkillCard>
			<SkillCard color="blue"> Git </SkillCard>
		</Stack>
	)
}

export const SkillDesc = ({title, children}) => {
	return (
		<Box>
			<Heading as="h5"> {title} </Heading>
			<Text mt={3}> {children} </Text>
			<Divider my={6} />
		</Box>
	)
}