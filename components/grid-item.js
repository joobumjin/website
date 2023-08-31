import NextLink from 'next/link'
import Image from 'next/image'
import { Grid, Box, Text, LinkBox, LinkOverlay, Button, Center, AspectRatio } from '@chakra-ui/react'
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
			<AspectRatio 
				w="100%" 
				ratio={15 / 8}
				align="center"  
				bg="white" 
				rounded="lg" 
				overflow="hidden"
				mb={6}
			>
				<Image
					src={thumbnail}
					alt={title}
					className="grid-item-thumbnail"
					placeHolder="blur"
					loading="lazy"
				/>
			</AspectRatio>
			<LinkOverlay as="div" href={`/works/${id}`}>
				<Text mt={2} fontSize={20}>{title}</Text>
			</LinkOverlay>

			<Text fontSize={14}>{children}</Text>
		</LinkBox>
	</Box>
)

export const WorkCardImg = ({ id, title, thumbnail }) => (
	<AspectRatio
		ratio={15 / 8}  
		w="95%" 
		align="center"  
		bg="white" 
		rounded="lg" 
		overflow="hidden"
		ml={{base: "2.5%", md: "5%"}}
		shadow='sm'
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
		        `}
			>
				<Image
					src={thumbnail}
					alt={title}
					className="grid-item-thumbnail"
					placeholder="blur"
					loading="lazy"
					fit="cover"
				/>
			</LinkBox>
		</Center>
	</AspectRatio>
)

export const WorkCardDesc = ({ id, position, team, skills }) => (
	<Box w="100%" h={{base: "250px", sm: "230px", md: "210px", lg: "230px"}}  align="left">
		<Grid 
			h="100%"
			templateAreas={{base: `'desc'
						     'more'`}}
			gridTemplateRows="4fr 1fr"
			display={{base:"none", md: "grid"}}
		>
			<Box area="desc">
				<LinkBox 
					as = {NextLink}
					href={`/works/${id}`}
					cursor="pointer"
					scroll={false}
			        css={css`
				        &:hover {
				          opacity: 0.8;
				          text-decoration: underline;
				        }

				        &:hover ${position} {
				          text-decoration: underline;
				        }
			        `}
				>
					<Text fontSize={14}>{position}</Text>

					<LinkOverlay as="div" href={`/works/${id}`}>
						<Text mb={{base: 1, md: 3}} fontSize={20}>{team}</Text>
					</LinkOverlay>
				</LinkBox>

				{skills}
			</Box>

			<Box area="more">
				<NextLink href={`/works/${id}`}>
					<Button mt={{base:'2', lg:'0'}}>
						Learn More<ChevronRightIcon />
					</Button>
				</NextLink>
			</Box>

		</Grid>
		<Box display={{base:"inline-block", md: "none"}}>
			<LinkBox 
				as = {NextLink}
				href={`/works/${id}`}
				cursor="pointer"
				scroll={false}
		        css={css`
			        &:hover {
			          opacity: 0.8;
			          text-decoration: underline;
			        }
		        `}
			>
				<Text fontSize={14}>{position}</Text>

				<LinkOverlay as="div" href={`/works/${id}`}>
					<Text mb="3" fontSize={20}>{team}</Text>
				</LinkOverlay>
			</LinkBox>

			{skills}

			<Box>
			<NextLink 
				href={`/works/${id}`}
			>
				<Button mt="6">
					Learn More<ChevronRightIcon />
				</Button>
			</NextLink>
			</Box>
		</Box>
	</Box>
)

export const InterestCardDesc = ({ id, position, name }) => (
	<Box w="100%" h={{base: "250px", sm: "230px", md: "210px", lg: "230px"}}  align="left">
		<Grid 
			h="100%"
			templateAreas={{base: `'desc'
						     'more'`}}
			gridTemplateRows="4fr 1fr"
			display={{base:"none", md: "grid"}}
		>
			<Box area="desc">
				<LinkBox 
					as = {NextLink}
					href={`/works/${id}`}
					cursor="pointer"
					scroll={false}
			        css={css`
				        &:hover {
				          opacity: 0.8;
			          	  text-decoration: underline;
				        }
			        `}
				>
					<LinkOverlay as="div" href={`/interests/${id}`}>
						<Text fontSize={14}>{position}</Text>
						<Text mb={{base: 1, md: 3}} fontSize={20}>{name}</Text>
					</LinkOverlay>
				</LinkBox>
			</Box>

			<Box area="more">
				<NextLink href={`/interests/${id}`}>
					<Button mt={{base:'2', lg:'0'}}>
						Learn More<ChevronRightIcon />
					</Button>
				</NextLink>
			</Box>

		</Grid>
		<Box display={{base:"inline-block", md: "none"}}>
			<LinkBox 
				as = {NextLink}
				href={`/interests/${id}`}
				cursor="pointer"
				scroll={false}
		        css={css`
			        &:hover {
			          opacity: 0.8;
			          text-decoration: underline;
			        }
		        `}
			>
				<LinkOverlay as="div" href={`/interests/${id}`}>
					<Text fontSize={14}>{position}</Text>
					<Text mb="3" fontSize={20}>{name}</Text>
				</LinkOverlay>
			</LinkBox>

			<Box>
			<NextLink 
				href={`/works/${id}`}
			>
				<Button mt="6">
					Learn More<ChevronRightIcon />
				</Button>
			</NextLink>
			</Box>
		</Box>
	</Box>
)

export const InterestGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox
      as={NextLink}
      href={`/works/${id}`}
      scroll={false}
      cursor="pointer"
      css={css`
        &:hover {
          opacity: 0.8;
          text-decoration: underline;
        }
      `}
    >
	    <AspectRatio
			ratio={15 / 8}  
			w="95%" 
			align="center"  
			bg="white" 
			rounded="lg" 
			overflow="hidden"
			ml={{base: "2.5%", md: "5%"}}
			shadow='sm'
		>
			<Center h="100%">
				<Image
					src={thumbnail}
					alt={title}
					className="grid-item-thumbnail"
					placeholder="blur"
					loading="lazy"
					fit="cover"
				/>
			</Center>
		</AspectRatio>
      <LinkOverlay 
      	as="div" 
      	href={`/interests/${id}`}
      >
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
        <Text fontSize={14}>{children}</Text>
      </LinkOverlay>
    </LinkBox>
  </Box>
)

export const GridItemStyle = () => {
	<style jsx global> {`
		.grid-item-thumbnail {
			border-radius: 12px;
		}
	`} </style>
}