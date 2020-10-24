import React, {Component} from "react";
import Link from "./Link";
import { Input, Menu, Segment } from 'semantic-ui-react'



export default class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing>
          <Menu.Item>
            <Link href="/" className="item">
              Search
            </Link>
          </Menu.Item>

          <Menu.Item>
            <Link href="/translate" className="item">
              Translate
            </Link>
          </Menu.Item>

          <Menu.Item>
            <Link href="/translate" className="item">
              Nutrition
            </Link>
          </Menu.Item>

    

          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

      </div>
    )
  }
}
