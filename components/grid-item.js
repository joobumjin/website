import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Button } from '@chakra-ui/react'
import { css } from '@emotion/react'

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
		</LinkBox>
	</Box>
)

export const WorkCardDesc = ({ children, id, position, team, skills }) => (
	<Box w="100%" align="left">
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
				<Text mt={2} fontSize={20}>{team}</Text>
			</LinkOverlay>
		</LinkBox>

		{skills}

		<Button mt={2}>

		</Button>
	</Box>
)

export const GridItemStyle = () => {
	<style jsx global> {`
		.grid-item-thumbnail {
			border-radius: 12px;
		}
	`} </style>
}