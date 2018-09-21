export interface NavItem {
    displayName: string;
    CategoryID:string;
    CategoryParent:string;
    CategoryOrder:string;
    disabled?: boolean;
    iconName: string;
    route?: string;
    children?: NavItem[];
  }
  