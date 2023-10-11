export default interface Page {
  id: number;
  attributes: {
    title: string;
    description: string;
    slug: string;
    sections: object[]
    showInNavbar: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}