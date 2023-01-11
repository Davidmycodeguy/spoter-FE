export type Product = {
  id: string;
  title: string;
  price: number;
  strikedPrice: string;
  vendor: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};

export type Data {
  data: any[];
  meta: {
    totalCount: number;
    page: number;
    pageSize: number;
    hasNextPage: boolean;
    totalPages: number;
  };
}