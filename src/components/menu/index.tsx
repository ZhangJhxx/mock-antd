import {FC} from "react";
import Menu ,{MenuProps} from "./menu";
import SubMenu,{SubMenuProps} from "./subMenu";
import MenuItem,{MenuItemProps} from "./menuItem";

type IMenuProps = FC<MenuProps> & {
  Item:FC<MenuItemProps>,
  SubMenu:FC<SubMenuProps>
}

const TransMenu = Menu as IMenuProps;

TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;

export default TransMenu;