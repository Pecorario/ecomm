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
  }
}

export default CategoryService;