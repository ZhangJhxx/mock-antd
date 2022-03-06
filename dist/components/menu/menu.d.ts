import React from 'react';
declare type MenuMode = 'horizontal' | 'vertical';
declare type selectedCallback = (selectedIndex: string) => void;
export interface MenuProps {
    defaultIndex?: string;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    defaultOpenArr?: string[];
    onSelect?: selectedCallback;
}
export interface IMenuContext {
    index: string;
    onSelect?: selectedCallback;
    mode?: MenuMode;
    defaultOpenArr?: string[];
}
export declare const MenuContext: React.Context<IMenuContext>;
declare const Menu: React.FC<MenuProps>;
export default Menu;
