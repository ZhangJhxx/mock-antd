import { FC } from "react";
import { MenuProps } from "./menu";
import { SubMenuProps } from "./subMenu";
import { MenuItemProps } from "./menuItem";
declare type IMenuProps = FC<MenuProps> & {
    Item: FC<MenuItemProps>;
    SubMenu: FC<SubMenuProps>;
};
declare const TransMenu: IMenuProps;
export default TransMenu;
