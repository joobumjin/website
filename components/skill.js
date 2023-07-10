import { Tag, TagLabel, HStack } from '@chakra-ui/react'

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
		<HStack mt={2}>
			<SkillCard color="orange"> Tensorflow </SkillCard>
			<SkillCard color="red"> PyTorch </SkillCard>
		</HStack>
	)
}