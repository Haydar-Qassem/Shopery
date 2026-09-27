import { CategoryCardStyles } from "./styles";
import { categories } from "../../../Constants/Categories.js";

function CategoryCard({ rounded, type }) {
  return (
    <CategoryCardStyles rounded={rounded}>
      {type === categories.fruits.id && (
        <>
          <img src={categories.fruits.image} alt={categories.fruits.id} />
          <p>{categories.fruits.id}</p>
        </>
      )}
      {type === categories.vegetables.id && (
        <>
          <img
            src={categories.vegetables.image}
            alt={categories.vegetables.id}
          />
          <p>{categories.vegetables.id}</p>
        </>
      )}
      {type === categories.meat.id && (
        <>
          <img src={categories.meat.image} alt={categories.meat.id} />
          <p>{categories.meat.id}</p>
        </>
      )}
      {type === categories.snacks.id && (
        <>
          <img src={categories.snacks.image} alt={categories.snacks.id} />
          <p>{categories.snacks.id}</p>
        </>
      )}
      {type === categories.beverages.id && (
        <>
          <img src={categories.beverages.image} alt={categories.beverages.id} />
          <p>{categories.beverages.id}</p>
        </>
      )}
      {type === categories.beauty.id && (
        <>
          <img src={categories.beauty.image} alt={categories.beauty.id} />
          <p>{categories.beauty.id}</p>
        </>
      )}
      {type === categories.bread.id && (
        <>
          <img src={categories.bread.image} alt={categories.bread.id} />
          <p>{categories.bread.id}</p>
        </>
      )}
      {type === categories.baking.id && (
        <>
          <img src={categories.baking.image} alt={categories.baking.id} />
          <p>{categories.baking.id}</p>
        </>
      )}
      {type === categories.cooking.id && (
        <>
          <img src={categories.cooking.image} alt={categories.cooking.id} />
          <p>{categories.cooking.id}</p>
        </>
      )}
      {type === categories.diabetic.id && (
        <>
          <img src={categories.diabetic.image} alt={categories.diabetic.id} />
          <p>{categories.diabetic.id}</p>
        </>
      )}
      {type === categories.detergents.id && (
        <>
          <img
            src={categories.detergents.image}
            alt={categories.detergents.id}
          />
          <p>{categories.detergents.id}</p>
        </>
      )}
      {type === categories.oil.id && (
        <>
          <img src={categories.oil.image} alt={categories.oil.id} />
          <p>{categories.oil.id}</p>
        </>
      )}
    </CategoryCardStyles>
  );
}

export default CategoryCard;
