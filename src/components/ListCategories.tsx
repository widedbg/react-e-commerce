import { categories } from "@/dev-data";
import { Card, CardContent } from "./ui/card";
import { useNavigate } from "react-router-dom";

function ListCategories() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mt-5">
      {categories.map((cat) => (
        <Card
          key={cat}
          className="aspect-square flex justify-center items-center cursor-pointer hover-primary hover:border hover:border-primary"
          onClick={() => navigate(`/categories/${cat}`)}
        >
          <CardContent className="text-xl font-bold uppercase">
            {cat}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
export default ListCategories;
