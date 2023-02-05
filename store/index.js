import Vuex from "vuex";
import Cookies from "js-cookie";

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null,
      userCheck: null,
      products: [],
      totalCount: 0,
    },
    getters: {},
    mutations: {
      signUp(state, user) {
        state.user = user;
      },
      loginCheck(state, user) {
        state.userCheck = user;
      },
      logoutUser(state) {
        state.userCheck = false;
      },
      changeTotalProduct(state, product) {
      state.products.filter(item=>{
        if(item.id==product.id)
        return item.totalPrice=item.count*item.price
      })

      },
      addProduct(state, product) {
        state.products.push(product);
      },
      countTotal(state) {
        state.totalCount = 0;
        state.products.forEach((item) => {
          state.totalCount += item.totalPrice;
        });
      },
      setProduct(state, products) {
        state.products = products;
      },
      removeProductItem(state, product) {
        state.products = state.products.filter((item) => {
          return item.name != product.name;
        });
      },
    },
    actions: {
      nuxtServerInit({ commit }) {
        return this.$axios
          .get(
            "https://products-29fbf-default-rtdb.firebaseio.com/productUser.json"
          )
          .then((response) => {
            commit("signUp", response.data);
            return this.$axios
              .get(
                "https://products-29fbf-default-rtdb.firebaseio.com/myProducts.json"
              )
              .then((response) => {
                let data = response.data;
                let productArray = [];
                for (let key in data) {
                  productArray.push({ ...data[key], id: key, });
                }
                commit("setProduct", productArray);
                commit("countTotal");
              });
          });
      },
      async signUp({ commit }, user) {
        this.$axios.put(
          "https://products-29fbf-default-rtdb.firebaseio.com/productUser.json",
          user
        );
        commit("signUp", user);
        commit("loginCheck", true);
        this.$router.push("/products");
        Cookies.set("userCheck", true);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("userCheck", true);
      },

      initAuth({ commit }, req) {
        let userCheck, user;
        if (req) {
          if (!req.headers.cookie) {
            return;
          }

          if (req.headers.cookie) {
            userCheck = req.headers.cookie.split("=")[1];
          }
        } else {
          userCheck = localStorage.getItem("userCheck");
          user = JSON.parse(localStorage.getItem("user"));
          commit("signUp", user);
        }

        commit("loginCheck", userCheck);
      },

      logout({ commit }) {
        commit("logoutUser");
        Cookies.remove("userCheck");
        localStorage.removeItem("userCheck");
        this.$router.push("/signIn");
      },
      async signIn({ commit }, user) {
        let data = this.$axios.get(
          "https://products-29fbf-default-rtdb.firebaseio.com/productUser.json"
        );
        let userData = await data;

        if (
          userData.data.name == user.name &&
          userData.data.password == user.password
        ) {
          commit("loginCheck", true);
          localStorage.setItem("userCheck", true);
          Cookies.set("userCheck", true);
          this.$router.push("/products");
        } else {
          alert("Xahis olunur duzgun daxil olun");
        }
      },
      async addProduct({ commit }, product) {
        let productData = this.$axios.post(
          "https://products-29fbf-default-rtdb.firebaseio.com/myProducts.json",
          product
        );

        let data = await productData;
        product.id = data.data.name;
        await commit("addProduct", product);
        await commit("countTotal");
      },
      removeProduct({ commit }, product) {
        this.$axios.delete(
          `https://products-29fbf-default-rtdb.firebaseio.com/myProducts/${product.id}.json`
        );
        commit("removeProductItem", product);
        commit("countTotal");
      },

      addCountData({ commit }, { product, count }) {
        this.$axios
          .put(
            `https://products-29fbf-default-rtdb.firebaseio.com/myProducts/${product.id}.json`,
            {
              ...product,
              count: product.count+=count,
              totalPrice: product.count * product.price,
            }
          )
          .then((response) => {
            let data = response.data;
            commit("changeTotalProduct", data);
            commit('countTotal')

          });
      },
    },
  });
};

export default createStore;
