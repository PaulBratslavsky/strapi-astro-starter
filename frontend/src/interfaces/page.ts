export default interface Page {
  id: number;
  attributes: {
    title: string;
    description: string;
    slug: string;
    showInNavbar: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}