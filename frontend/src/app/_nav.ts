interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [

  {
    name: 'Books',
    url: '/books',
    icon: 'icon-pencil'
  },
  {
    name: 'Languages',
    url: '/languages',
    icon: 'icon-pencil'
  },
  {
    name: 'Publishers',
    url: '/publishers',
    icon: 'icon-pencil'
  },
  {
    name: 'Subjects',
    url: '/subjects',
    icon: 'icon-pencil'
  },
  {
    name: 'Authors',
    url: '/authors',
    icon: 'icon-pencil'
  },
  {
    name: 'Book Item',
    url: '/book-item',
    icon: 'icon-pencil'
  },
  {
    name: 'Book Lending',
    url: '/book-lending',
    icon: 'icon-pencil'
  },
  {
    name: 'Librarians',
    url: '/librarians',
    icon: 'icon-people'
  },
  {
    name: 'Members',
    url: '/members',
    icon: 'icon-people'
  },
  {
    name: 'Cards',
    url: '/cards',
    icon: 'icon-pencil'
  },

];
