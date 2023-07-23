import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const lorem = `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut elit eget nisl ultricies euismod eget nec magna. Aliquam congue elit quis est gravida egestas. Nulla vel quam eleifend odio lobortis fringilla. Vestibulum eget mi posuere tortor suscipit hendrerit quis nec dui. In viverra massa et mi commodo, vitae finibus dolor auctor. Nunc vitae condimentum velit. Vivamus commodo mi quis arcu commodo vestibulum. Etiam consequat turpis id scelerisque pretium.</p>
`

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <h1>Ehijoe</h1>
      <h2>Software Engineer</h2>
      <div dangerouslySetInnerHTML={{ __html: lorem.repeat(20) }} />
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
