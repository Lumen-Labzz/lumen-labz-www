import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/data";

const Products = () => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Our Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-2xl border p-0 border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="relative h-1/2 overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {!product.inStock && (
                  <Badge className="absolute top-3 right-3 text-xs font-medium px-2.5 py-1.5 shadow-md">
                    OUT OF STOCK
                  </Badge>
                )}
              </div>

              <CardContent className="flex flex-col flex-1 justify-between p-6 space-y-4 text-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </div>

                <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                  {product.description}
                </p>

                <p className="text-xl font-semibold text-primary">
                  ${product.price.toFixed(2)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
