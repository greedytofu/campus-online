import React from 'react'
import {map, get, flow} from 'lodash/fp'
import {mapProps} from 'recompose'
import flattenAuthorInfo from '../../fragments/AuthorInfo'
import MetaTags from '../../components/MetaTags'
import Container from '../../components/Container'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import AuthorCard from '../../components/AuthorCard'

const AuthorsPage = ({authors}) => (
	<React.Fragment>
		<Navbar style={{position: 'fixed', top: 0, zIndex: 2}} />
		<Hero title="Autores" sub={`${authors.length} autores no total`} />
		<Container>
			<MetaTags title="Autores" />
			<section style={{padding: '6rem 0 8rem', overflow: 'hidden'}}>
				<div style={{display: 'flex', flexWrap: 'wrap', margin: '0 -2rem'}}>
					{authors.map(author => (
						<div key={author.url} style={{padding: '1rem 2rem'}}>
							<AuthorCard {...author} />
						</div>
					))}
				</div>
			</section>
		</Container>
	</React.Fragment>
)

const enhance = mapProps(
	flow([
		get('data.authorList.authors'),
		map(flow([get('author'), flattenAuthorInfo])),
		authors => ({authors}),
	]),
)

export default enhance(AuthorsPage)
export const authorsPageQuery = graphql`
	query AuthorsQuery {
		authorList: allMarkdownRemark(
			sort: {order: DESC, fields: [frontmatter___title]}
			filter: {frontmatter: {template: {eq: "author"}}}
		) {
			authors: edges {
				author: node {
					...AuthorInfo
				}
			}
		}
	}
`