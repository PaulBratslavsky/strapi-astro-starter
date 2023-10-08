export default interface Global {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    topNav: {
      id: number;
      name: string;
      link: {
        id: number;
        text: string;
        href: string;
        isExternal: boolean;
        isButton: boolean;
      }[];
    };
  };
}
