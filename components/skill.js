import { Tag, TagLabel, Box, Heading, Text, Divider, Wrap } from '@chakra-ui/react'

export const SkillCard = ({color, children}) => {
	return (
		<Tag
			size="lg"
			variant="outline"
			colorScheme={color}
			borderRadius="full"
		>
			<TagLabel w="flex">{children}</TagLabel>
		</Tag>
	)
}

export const UTASkills = () => {
	return (
		<Wrap>
			<SkillCard color="orange"> Python </SkillCard>
			<SkillCard color="red"> Tensorflow </SkillCard>
			<SkillCard color="red"> Keras </SkillCard>
			<SkillCard color="red"> PyTorch </SkillCard>
			<SkillCard color="red"> Jupyter </SkillCard>
			<SkillCard color="blue"> Git </SkillCard>
			<SkillCard color="blue"> Bash </SkillCard>

		</Wrap>
	)
}

export const SinghSkills = () => {
	return (
		<Wrap>
			<SkillCard color="orange"> Python </SkillCard>
			<SkillCard color="red"> Tensorflow </SkillCard>
			<SkillCard color="red"> PyTorch </SkillCard>
			<SkillCard color="red"> Jupyter </SkillCard>
			<SkillCard color="blue"> Git </SkillCard>
		</Wrap>
	)
}

export const MahmoodSkills = () => {
	return (
		<Wrap>
			<SkillCard color="orange"> Python </SkillCard>
			<SkillCard color="red"> PyTorch </SkillCard>
			<SkillCard color="blue"> Bash </SkillCard>
		</Wrap>
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