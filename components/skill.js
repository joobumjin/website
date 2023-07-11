import { Tag, TagLabel, Stack } from '@chakra-ui/react'

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
			<SkillCard color="red"> PyTorch </SkillCard>
			<SkillCard color="blue"> Git </SkillCard>
		</Stack>
	)
}