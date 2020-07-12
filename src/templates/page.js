import React, {Component} from "react"
import Layout from "../components/layout"

class PageTemplate extends Component {
    render() {
        const siteMetadata = this.props.data.site.siteMetadata
        const currentPage = this.props.data.wordpressPage
         

      

        // if (currentPage.slug === '/' ) {
        //     let heroTitle = ' currentPage.acf.hero_title'
        // } else {
        //     let heroTitle = '' 
        // }

        return (
            <Layout>
                <div>
                    <h1 dangerouslySetInnerHTML={{__html: currentPage.title}}/>
                    {/* <h1 dangerouslySetInnerHTML={{__html: heroTitle }}/> */}
                    
                    <div dangerouslySetInnerHTML={{__html: currentPage.content}}/>

                    <p dangerouslySetInnerHTML={{__html: currentPage.date}} />
                    <p dangerouslySetInnerHTML={{__html: currentPage.slug}} />
                </div>
            </Layout>
        )
    }
}

export default PageTemplate

export const pageQuery = graphql`
    query currentPageQuery($id: String!) {
        wordpressPage(id: { eq: $id }) {
            title
            content
            slug
            id
            date(formatString: "MMMM DD, YYYY")
            acf {
                hero_title
            }
        }
        site {
            id
            siteMetadata {
                title
            }
        }
    }
`