import Utils from './Utils.js';
class CategoryService {
  static async findCategories() {
    try {
      const response = await fetch('http://localhost:3000/categories');
      const json = await response.json();

      Utils.returnResponse(response, json);
    } catch (error) {
      console.log(error);
    }
  };

  static async findCategoryById(id) {
    try {
      const response = await fetch(`http://localhost:3000/categories/${id}`);
      const json = await response.json();

      Utils.returnResponse(response, json);
    } catch (error) {
      console.log(error);
    }
  }

  static async createCategory(newCategory) {
    try {
      const response = await fetch('http://localhost:3000/categories', {
        method: "POST",
        body: JSON.stringify(newCategory),
        headers: { "Accept": "application/json", "Content-Type": "application/json" }
      });
      const json = await response.json();

      Utils.returnResponse(response, json);
    } catch (error) {
      console.log(error);
    }
  }

  static async updateCategory(id, data) {
    try {
      const response = await fetch(`http://localhost:3000/categories/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Accept": "application/json", "Content-Type": "application/json" }
      });
      const json = await response.json();

      Utils.returnResponse(response, json);
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteCategory(id) {
    try {
      const response = await fetch(`http://localhost:3000/categories/${id}`, {
        method: "DELETE",
        headers: { "Accept": "application/json", "Content-Type": "application/json" }
      });
      const json = await response.json();

      Utils.returnResponse(response, json);
    } catch (error) {
      console.log(error);
    }
  }
}

export default CategoryService;