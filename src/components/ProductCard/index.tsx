import { Product } from '../../types/types';
import Button from '../Button';

interface IProductCard {
  product: Product
}

const ProductCard: React.FC<IProductCard> = ({ product }) => {
  const { title, price, strikedPrice, vendor, image } = product;

  return (
    <div className="flex flex-col bg-white rounded-3xl shadow-md p-4">
      <img src={image} alt="product" className="mx-auto max-h-20" />

      <div className="flex flex-col mt-4">
        <h6 className="font-semibold">{vendor}</h6>
        <p className="text-gray-500 mt-1 line-clamp-2">{title}</p>
        <div className="flex items-center py-3 border-b gap-x-2">
          <p
            className={`${
              strikedPrice ? 'text-[#FF6768]' : 'text-black'
            } text-sm`}
          >
            {price}
          </p>
          <p className="text-[#9C9D9D] text-sm line-through">{strikedPrice}</p>
        </div>
        <div className="flex items-center gap-x-3 pt-2">
          <span className="flex text-[#9C9D9D] gap-x-1 items-center">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#9C9D9D"
                d="M6 20q-1.25 0-2.125-.875T3 17H1V6q0-.825.588-1.412Q2.175 4 3 4h14v4h3l3 4v5h-2q0 1.25-.875 2.125T18 20q-1.25 0-2.125-.875T15 17H9q0 1.25-.875 2.125T6 20Zm0-2q.425 0 .713-.288Q7 17.425 7 17t-.287-.712Q6.425 16 6 16t-.713.288Q5 16.575 5 17t.287.712Q5.575 18 6 18Zm12 0q.425 0 .712-.288Q19 17.425 19 17t-.288-.712Q18.425 16 18 16t-.712.288Q17 16.575 17 17t.288.712Q17.575 18 18 18Zm-1-5h4.25L19 10h-2Z"
              ></path>
            </svg>
            <p className="text-xs">Free Shipping</p>
          </span>
          <span className="flex text-[#9C9D9D] gap-x-1 items-center">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#9C9D9D"
                d="M9.06 1.93C7.17 1.92 5.33 3.74 6.17 6H3a2 2 0 0 0-2 2v2a1 1 0 0 0 1 1h9V8h2v3h9a1 1 0 0 0 1-1V8a2 2 0 0 0-2-2h-3.17C19 2.73 14.6.42 12.57 3.24L12 4l-.57-.78c-.63-.89-1.5-1.28-2.37-1.29M9 4c.89 0 1.34 1.08.71 1.71C9.08 6.34 8 5.89 8 5a1 1 0 0 1 1-1m6 0c.89 0 1.34 1.08.71 1.71c-.63.63-1.71.18-1.71-.71a1 1 0 0 1 1-1M2 12v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8h-9v8h-2v-8H2Z"
              ></path>
            </svg>

            <p className="text-xs">Free Gift</p>
          </span>
        </div>

        <Button className="w-full bg-[#1AB76C] h-12 rounded-full text-white mt-8">
          <p>VIEW DEAL</p>
        </Button>
      </div>
    </div>
  );
};
export default ProductCard;
