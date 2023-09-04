export interface DropdownProps {
  options: DropOption[];
  onSelect: Function;
}

export interface DropOption {
  value: string;
  label: string;
  countryFlag: string;
}
