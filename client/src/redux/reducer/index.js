import {
  GET_PRODUCTS,
  SORT_PRODUCTS,
  GET_PRODUCT_ID,
  GET_PRODUCT_BY_NAME,
  FILTER_BRANDS,
  GET_HOME_PRODUCTS,
  RESET_DETAIL,
} from "../actions/actionTypes";

const initialState = {
  products: [],
  allProducts: [], // copia con todos los productos
  listNewArrivals: [],
  listPopular: [],
  listOffers: [],
  productDetail: {},
  productType: [],
  errorSearch: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
      };

    case GET_HOME_PRODUCTS:
      let sortOffers;
      let sortPopular;
      let sortNew;
      let products = action.payload;

      /* Get Offers array */
      let discountedProducts = products?.filter((product) => {
        return product.discount >= 1;
      });

      if (discountedProducts.length) {
        sortOffers = discountedProducts?.sort((a, b) => {
          if (a.discount < b.discount) return 1;
          if (a.discount > b.discount) return -1;
          else return 0;
        });
      } else {
        sortOffers = products.sort((a, b) => {
          if (a.price < b.price) return -1;
          if (a.price > b.price) return 1;
          else return 0;
        });
      }

      /* Get Popular array */
      sortPopular = products.sort((a, b) => {
        if (a.rank < b.rank) return 1;
        if (a.rank > b.rank) return -1;
        else return 0;
      });

      /* Get Newest array */
      sortNew = products.sort((a, b) => {
        if (a.createdAt < b.createdAt) return 1;
        if (a.createdAt > b.createdAt) return -1;
        else return 0;
      });

      sortOffers.splice(12);
      sortPopular.splice(12);
      sortNew.splice(12);

      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
        listOffers: sortOffers,
        listPopular: sortPopular,
        listNewArrivals: sortNew,
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
            if (
              a.price - (a.price * a.discount) / 100 <
              b.price - (b.price * b.discount) / 100
            )
              return 1;
            if (
              a.price - (a.price * a.discount) / 100 >
              b.price - (b.price * b.discount) / 100
            )
              return -1;
            else return 0;
          };
          break;
        case "priceAsc":
          sorter = (a, b) => {
            if (
              a.price - (a.price * a.discount) / 100 <
              b.price - (b.price * b.discount) / 100
            )
              return -1;
            if (
              a.price - (a.price * a.discount) / 100 >
              b.price - (b.price * b.discount) / 100
            )
              return 1;
            else return 0;
          };
          break;
        case "newest":
          sorter = (a, b) => {
            if (a.createdAt < b.createdAt) return 1;
            if (a.createdAt > b.createdAt) return -1;
            else return 0;
          };
          break;
        case "popular":
          sorter = (a, b) => {
            if (a.rank < b.rank) return 1;
            if (a.rank > b.rank) return -1;
            else return 0;
          };
          break;
        default:
          break;
      }
      return {
        ...state,
        products: state.allProducts.sort(sorter),
      };

    // ---- FILTERS ----
    case FILTER_BRANDS: {
      const filteredProducts = state.allProducts?.filter((product) => {
        return product.brand === action.payload;
      });

      if (filteredProducts.length) {
        return {
          ...state,
          products: filteredProducts,
        };
      }
    }
    // ---- SEARCH BAR -----

    case GET_PRODUCT_BY_NAME: {
      if (action.payload.length === 0) {
        return {
          ...state,
          error: "Product Not Found",
        };
      } else {
        return {
          ...state,
          products: action.payload,
          error: "",
        };
      }
    }

    // ---- DETAIL -----

    case GET_PRODUCT_ID:
      let filterType = state.products?.filter((product) => {
        return (
          product.category === action.payload.category &&
          product.id !== action.payload.id
        );
      });
      return {
        ...state,
        productDetail: action.payload,
        productType: filterType,
      };

    case RESET_DETAIL:
      return {
        ...state,
        productDetail: {},
        productType: [],
      };

    default:
      return state;
  }

  // ---
};

export default rootReducer;
