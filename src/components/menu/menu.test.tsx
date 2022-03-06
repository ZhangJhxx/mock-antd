import {render, screen, fireEvent,within} from "@testing-library/react";
import Menu,{MenuProps} from './menu';
import MenuItem from './menuItem'
import SubMenu from './subMenu';
const testProps: MenuProps ={
  defaultIndex:"0",
  onSelect:jest.fn(),
  className:'test'
}

const testVerticalProps:MenuProps ={
  defaultIndex:"0",
  mode: 'vertical'
}

const genMenu = (props:MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>
        active
      </MenuItem>
      <MenuItem disabled>
        disabled
      </MenuItem>
      <SubMenu title="dropDown">
        <MenuItem>
          dropDown1
        </MenuItem>
        <MenuItem>
          dropDown2
        </MenuItem>
      </SubMenu>
      <MenuItem>
        whatEver
      </MenuItem>
    </Menu>
  )
}
let menuElement:HTMLElement,activeElement:HTMLElement,disabledElement:HTMLElement;

describe('test Menu and MenuItem component', () => {
  const setup = (props:MenuProps) => render(genMenu(props));

  it('should render correct Menu and MenuItem based on default props', () => {
    setup(testProps);
    menuElement = screen.getByTestId("menu-test");
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass("menu test");

    const meneItemGroup = within(menuElement).getAllByRole("listitem");
    expect(meneItemGroup.length).toEqual(4);
  })
  it('should change active and call the right callback',()=>{
    setup(testProps);
    activeElement = screen.getByText('active');
    const thirdElement = screen.getByText('whatEver') as HTMLElement;
    expect(activeElement).toHaveClass("is-active");
    fireEvent.click(thirdElement);
    expect(thirdElement).toHaveClass("is-active");
    expect(activeElement).not.toHaveClass("is-active");
    expect(testProps.onSelect).toHaveBeenCalledWith("3");
    disabledElement = screen.getByText('disabled');
    fireEvent.click(disabledElement);
    expect(testProps.onSelect).not.toHaveBeenCalledWith("1");
  })
  it('should render vertical menu',()=>{
    setup(testVerticalProps);
    menuElement = screen.getByTestId("menu-test");
    expect(menuElement).toHaveClass("menu-vertical");
  })
})