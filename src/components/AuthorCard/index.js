import React from 'react'
import styled from 'styled-components'
import {colors} from '../../constants'
import {above} from '../../utils/responsive'
import Link from '../StylableLink'
import Avatar from '../Avatar'

const Wrapper = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;
	color: currentColor;
	position: relative;
	color: ${colors.base66};
	&:hover {
		color: ${colors.base88};
	}
`

const Title = styled.div`
	font-size: 1.25rem;
	line-height: 1.5rem;
	font-weight: 500;
	${p =>
		p.small &&
		`
		font-size: 1rem;
		line-height: 1.25rem;
		font-weight: 600;
	`} ${above.md`
		font-size: 1.25rem;
		line-height: 1.75rem;
		${p =>
			p.small &&
			`
			font-size: 1rem;
			line-height: 1.25rem;
		`}
	`};
`

const AuthorCard = ({url, name, avatar, small, style, className}) => (
	<Wrapper to={url} style={style} className={className}>
		<Avatar avatar={avatar} name={name} small={small} />
		{name && <Title small={small}>{name}</Title>}
	</Wrapper>
)

export default AuthorCard
