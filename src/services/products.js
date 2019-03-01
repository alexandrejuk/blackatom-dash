import request from './request'

const endpoint = `/products`

class ProductService {
  constructor() {
    this.axios = request.getAxiosInstance()
  }

  addProduct = (product) => {
    return this.axios.post(endpoint, product)
  }
  
  productList = (page, filters) => {
    return this.axios.get(endpoint, { params: {
      page,
      total: 25,
      filters,
    }})
  }
  
  getProductById = (id) => {
    return this.axios.get(`${endpoint}/${id}`)
  }
  
  editProduct = (id, content) => {
    return this.axios.put(`${endpoint}/${id}`, content)
  }
}

export default ProductService