import {render,screen,fireEvent} from "@testing-library/react"
import Button, { ButtonProps}  from "./button"
const defaultProps = {
  onClick: jest.fn(),
  label:"hello"
  // disabled: true
}
const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
}
const testProps: ButtonProps = {
  btnType: "primary",
  size: "sm",
  className: 'klass'
}
describe('test button component',()=>{
  it('should render the correct default button',()=>{
    render(<Button {...defaultProps} />);
    const element = screen.getByText("hello") as HTMLButtonElement;
    expect(element).toBeTruthy();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn btn-default");
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
    expect(element.disabled).toBeFalsy()
  })
  it('should render the correct component based on different props',()=>{
    render(<Button {...testProps} label="hello" />);
    const element = screen.getByText("hello") as HTMLButtonElement;
    expect(element).toBeTruthy();
    expect(element).toHaveClass('btn-primary btn-sm klass')
  })
  it('should render a link when btnType equals link and href is provided',()=>{
    render(<Button btnType="link" href="http://dummyurl" label="Link" />)
    const element = screen.getByText("Link");
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  })
  it('should render disable button when disable provided',()=>{
    render(<Button {...disabledProps} label="hello"/>);
    const element = screen.getByText("hello") as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})
