import NextLink from 'next/link'
import Image from 'next/image'
import { Grid, Box, Text, LinkBox, LinkOverlay, Button, Center } from '@chakra-ui/react'
import { css } from '@emotion/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const GridItem = ({ children, title, thumbnail }) => (
	<Box w="100%" align="center">
		<LinkBox as= {NextLink} cursor="pointer">
			<Image
				src={thumbnail}
				alt={title}
				className="grid-item-thumbnail"
				placeHolder="blur"
				loading="lazy"
			/>
			<Text mt={2}>{title}</Text>
			<Text fontSize={14}>{children}</Text>
		</LinkBox>
	</Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
	<Box w="100%" align="center">
		<LinkBox 
			as = {NextLink}
			href={`/works/${id}`}
			cursor="pointer"
			scroll={false}
	        css={css`
		        &:hover {
		          opacity: 0.8;
		        }

		        &:hover ${title} {
		          text-decoration: underline;
		        }
	        `}
		>
			<Image
				src={thumbnail}
				alt={title}
				className="grid-item-thumbnail"
				placeHolder="blur"
				loading="lazy"
			/>

			<LinkOverlay as="div" href={`/works/${id}`}>
				<Text mt={2} fontSize={20}>{title}</Text>
			</LinkOverlay>

			<Text fontSize={14}>{children}</Text>
		</LinkBox>
	</Box>
)

export const WorkCardImg = ({ id, title, thumbnail }) => (
	<Box 
		w="95%" 
		h="220px" 
		align="center"  
		bg="white" 
		rounded="lg" 
		overflow="hidden"
		ml="5%"
	>
		<Center h="100%">
			<LinkBox 
				as = {NextLink}
				href={`/works/${id}`}
				cursor="pointer"
				scroll={false}
		        css={css`
			        &:hover {
			          opacity: 0.8;
			        }

			        &:hover ${title} {
			          text-decoration: underline;
			        }
		        `}
			>
				<Image
					src={thumbnail}
					alt={title}
					className="grid-item-thumbnail"
					placeHolder="blur"
					loading="lazy"
				/>
			</LinkBox>
		</Center>
	</Box>
)

export const WorkCardDesc = ({ id, position, team, skills }) => (
	<Box w="100%" h="220px" align="left">
		<Grid 
			h="100%"
			templateAreas={`'desc'
							'more'`}
			gridTemplateRows={"4fr 1fr "}
		>
			<Box
				gridArea="desc"
			>
				<LinkBox 
					as = {NextLink}
					href={`/works/${id}`}
					cursor="pointer"
					scroll={false}
			        css={css`
				        &:hover {
				          opacity: 0.8;
				        }

				        &:hover ${position} {
				          text-decoration: underline;
				        }
			        `}
				>
					<Text fontSize={14}>{position}</Text>

					<LinkOverlay as="div" href={`/works/${id}`}>
						<Text mt={2} mb={4} fontSize={20}>{team}</Text>
					</LinkOverlay>
				</LinkBox>

				{skills}
			</Box>

			<NextLink 
				href={`/works/${id}`}
				gridArea="more">
				<Button>
					Learn More<ChevronRightIcon />
				</Button>
			</NextLink>

		</Grid>
	</Box>
)

export const GridItemStyle = () => {
	<style jsx global> {`
		.grid-item-thumbnail {
			border-radius: 12px;
		}
	`} </style>
}