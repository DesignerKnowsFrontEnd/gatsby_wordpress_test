import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const MainMenu = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpApiMenusMenusItems {
          edges {
            node {
              items {
                order
                title
                url
                object_slug
              }
            }
          }
        }
      }
    `}
    render={props => 
         <div>
            {props.allWordpressWpApiMenusMenusItems.edges[2].node.items.map(item => (
              <Link
                to={item.url}
                key={item.object_slug}
              >
                {item.title}
              </Link>
            ))}
          </div>
}
  ></StaticQuery>
)

export default MainMenu