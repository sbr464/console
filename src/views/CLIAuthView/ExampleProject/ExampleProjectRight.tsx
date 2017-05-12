import * as React from 'react'
import {ProjectType} from './ExampleProject'
const QueryEditor: any = require('../../SchemaView/Editor/QueryEditor').QueryEditor

interface Props {
  projectType: ProjectType
}

export default class ExampleProjectRight extends React.Component<Props, {}> {

  render() {
    return (
      <div className='example-project-right'>
        <style jsx={true}>{`
          .example-project-right {
            @p: .flex, .flexColumn, .pl38, .pr60, .flexFixed;
            background-color: #0f202d;
            max-width: 536px;
          }

          .title {
            @p: .pl10, .pt60, .white50, .f25, .fw6;
          }

          .subtitle {
            @p: .pl10, .pt16, .f16, .white60;
          }

          .project-file {
            @p: .fw6, .white80;
          }

          .info {
            @p: .f16, .white60;
          }

          .code {
            @p: .blue, .mono;
          }

          .editor {
            @p: .mv38, .bgDarkBlue;
            box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.15);
          }

          .editor :global(.CodeMirror), .editor :global(.CodeMirror-gutters) {
            background: none;
          }
        `}</style>
        <div className='title'>How to use our CLI</div>
        <div className='subtitle'>
          We created a file called <span className='project-file'>project.graphcool</span> in your current folder.
          All you can do with your project is in there.
        </div>

        <div className='editor'>
          <QueryEditor
            value={this.props.projectType === 'instagram' ?
              instagramExampleProjectFileContents : blankExampleProjectFileContents}
            readOnly={true}
          />
        </div>

        <div className='info'>
          If you make changes to it, just push them to the console
          with <span className='code'>$graphcool push</span>.
        </div>
      </div>
    )
  }
}

const blankExampleProjectFileContents = `\
# project: cj2lteo728kgy0107l51zmy8y
# version: 1

type File implements Node {
  contentType: String!
  createdAt: DateTime!
  id: ID! @isUnique
  name: String!
  secret: String! @isUnique
  size: Int!
  updatedAt: DateTime!
  url: String! @isUnique
}

type Post implements Node {
  createdAt: DateTime!
  description: String!
  id: ID! @isUnique
  imageUrl: String!
  updatedAt: DateTime!
}

type User implements Node {
  createdAt: DateTime!
  id: ID! @isUnique
  updatedAt: DateTime!
`


const instagramExampleProjectFileContents = `\
# project: cj2lteo728kgy0107l51zmy8y
# version: 1

type File implements Node {
  contentType: String!
  createdAt: DateTime!
  id: ID! @isUnique
  name: String!
  secret: String! @isUnique
  size: Int!
  updatedAt: DateTime!
  url: String! @isUnique
}

type Post implements Node {
  createdAt: DateTime!
  description: String!
  id: ID! @isUnique
  imageUrl: String!
  updatedAt: DateTime!
}

type User implements Node {
  createdAt: DateTime!
  id: ID! @isUnique
  updatedAt: DateTime!
`
