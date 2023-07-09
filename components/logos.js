import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;

&: hover img {
	transform: rotate(20deg);
}
`

const Logo = () => {
	const logoImg = `/images/b_logo${useColorModeValue('', '_dark')}.jpg`

	const handleClick = event => {
	    event.preventDefault();
	    window.scrollTo({top: 0, left: 0, behavior: "smooth" });
	  };
	return (
		<Link 
			href = "/"
			onClick={handleClick}
		>
			<LogoBox>
				<Image src={logoImg} width={20} height={20} alt="logo"/>
				<Text color={useColorModeValue('gray.800', 'whiteAlpha.900')}
					ml={3}
				>
				Bumjin Joo
				</Text>
			</LogoBox>
		</Link>
	)
}

export default Logo