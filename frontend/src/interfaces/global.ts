export interface TopNav {
  id: number;
  name: string;
  logoTitle: string;
  logoImage: {
    data: {
      attributes: {
        url: string;
      };
    }
  };
  link: {
    id: number;
    text: string;
    href: string;
    isExternal: boolean;
    isButton: boolean;
  }[];
}

export default interface Global {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    topNav: TopNav
  };
}
