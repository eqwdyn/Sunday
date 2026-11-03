import { IDish } from "@entities/Dish.ent";
import { AxiosInstance } from "axios";

const GET_DISH = "dishes";
const GET_CATEGORY = "dishes";

export class CatalogService {
  constructor(private readonly api: AxiosInstance) {}

  async getDishesByCategoryId(categoryId: number) {
    try {
      const { data: dishes } = await this.api.get<IDish>(
        `${GET_DISH}/${categoryId}`,
      );
      return dishes;
    } catch (e) {
      throw e;
    }
  }

  async getCategories() {
    try {
      const { data: dishes } = await this.api.get<IDish>(GET_CATEGORY);
      return dishes;
    } catch (e) {
      throw e;
    }
  }
}
