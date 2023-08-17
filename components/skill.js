import { Tag, TagLabel, Box, Heading, Divider, Wrap } from '@chakra-ui/react'

export const SkillTag = ({color, children}) => {
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
			<SkillTag color="orange"> Python </SkillTag>
			<SkillTag color="red"> Tensorflow </SkillTag>
			<SkillTag color="red"> Keras </SkillTag>
			<SkillTag color="red"> PyTorch </SkillTag>
			<SkillTag color="red"> Jupyter </SkillTag>
			<SkillTag color="blue"> Git </SkillTag>
			<SkillTag color="blue"> Bash </SkillTag>
		</Wrap>
	)
}

export const SinghSkills = () => {
	return (
		<Wrap>
			<SkillTag color="orange"> Python </SkillTag>
			<SkillTag color="red"> Tensorflow </SkillTag>
			<SkillTag color="red"> PyTorch </SkillTag>
			<SkillTag color="red"> Jupyter </SkillTag>
			<SkillTag color="blue"> Git </SkillTag>
			<SkillTag color="blue"> Bash </SkillTag>
		</Wrap>
	)
}

export const MahmoodSkills = () => {
	return (
		<Wrap>
			<SkillTag color="orange"> Python </SkillTag>
			<SkillTag color="red"> PyTorch </SkillTag>
			<SkillTag color="blue"> Bash </SkillTag>
		</Wrap>
	)
}

export const SkillDesc = ({title, children}) => {
	return (
		<Box mt={6}>
			<Heading as="h5" variant="skill-title"> {title} </Heading>
			{children}
			<Divider mt={6} variant="thick"/>
		</Box>
	)
}