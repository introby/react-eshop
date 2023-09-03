import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalog | Noliner shop",
};
const Catalog = () => {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="max-w-screen-md mb-8 lg:mb-16">Каталог</div>
    </div>
  );
};

export default Catalog;
