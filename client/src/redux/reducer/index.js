import { GET_PRODUCTS, SORT_PRODUCTS, GET_PRODUCT_ID, GET_PRODUCT_TYPE, GET_PRODUCT_BY_NAME } from "../actions/actionTypes";

const initialState = {
  products: [],
  allProducts: [], // copia con todos los productos
  listNewArrivals: [],
  listPopular: [],
  listOffers: [],
  productDetail: {},
  productType: [],
  errorSearch:"",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
      };

    case SORT_PRODUCTS:
      let sorter;
      switch (action.payload) {
        case "A-Z":
          sorter = (a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            else return 0;
          };
          break;
        case "Z-A":
          sorter = (a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
            if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
            else return 0;
          };
          break;
        case "priceDesc":
          sorter = (a, b) => {
            if (a.price < b.price) return 1;
            if (a.price > b.price) return -1;
            else return 0;
          };
          break;
        case "priceAsc":
          sorter = (a, b) => {
            if (a.price < b.price) return -1;
            if (a.price > b.price) return 1;
            else return 0;
          };
          break;
        case "newest":
          sorter = (a, b) => {
            if (a.created_at < b.created_at) return -1;
            if (a.created_at > b.created_at) return 1;
            else return 0;
          };
          break;
        case "popular":
          sorter = (a, b) => {
            if (a.rating < b.rating) return -1;
            if (a.rating > b.rating) return 1;
            else return 0;
          };
          break;
        case "discount":
          sorter = (a, b) => {
            if (a.discount < b.discount) return -1;
            if (a.discount > b.discount) return 1;
            else return 0;
          };
          break;
        default:
          break;
      }
      return {
        ...state,
        products: state.products.sort(sorter),
        listNewArrivals: state.listNewArrivals.sort("newest"),
        listPopular: state.listPopular.sort("popular"),
        listOffers: state.listOffers.sort("discount"),
      };

      // ---- SEARCH BAR -----

      case GET_PRODUCT_BY_NAME: {
        if (action.payload.length===0) {
          return {
            ...state,
            error:"Country Not Found"
          }
        } else {
          return {
            ...state,
            products: action.payload,
            error:"",
          }
        }
        
      }


      // ---- DETAIL -----

    case GET_PRODUCT_ID: {

        return{
            ...state,
            productDetail: action.payload
        }
    }
    case GET_PRODUCT_TYPE: {
      let filterType = state.products?.filter(product => {
         return product.product_type === action.payload
      })
      return {
         ...state,
         productType: filterType
     }
     
  }
  default:
            return state
  }

  // ---
};

export default rootReducer;
