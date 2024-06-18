import { CategoriesRepository } from "../database/repositories/categories.repository";
import { CategoryModel } from "../database/schemas/category.schema";
import { CategoriesService } from "../services/categories.service";

export class CategoriesFactory {
  private static categoriesService: CategoriesService;

  static getServiceInstance() {

    if (this.categoriesService) {
      return this.categoriesService;
    }
    const repository = new CategoriesRepository(CategoryModel);
    const service = new CategoriesService(repository);

    this.categoriesService = service;

    return service;
  }
}