export type SidebarProps = {
  onClick: () => void;
  barState: boolean;
}

export type FormProps = {
  type?: string;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
  onClick?: () => void;
}