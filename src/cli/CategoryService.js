class CategoryService {
  static async findCategories() {
    try {
      const response = await fetch('http://localhost:3000/categories');
      console.log('response status: ', response.status)
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  static async findCategoryById(id) {
    try {
      const response = await fetch('http://localhost:3000/categories');
      console.log('response status: ', response.status)
      const json = await response.json();
      const category = json.find(item => item.id == id);
      console.log(category);
    } catch (error) {
      console.log(error);
    }
  }
}

export default CategoryService;