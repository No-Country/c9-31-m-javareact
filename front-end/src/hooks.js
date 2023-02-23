import { atom, useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import {
  addDoc,
  serverTimestamp,
  collection,
  onSnapshot,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import { useParams } from "react-router-dom";
import { useRecoilValue } from 'recoil';

export const picturesURLState = atom({
  key: "picturesState",
  default: [],
});

const moreViewsState = atom({
  key: "moreViews",
  default: [],
});

export function useProducts() {
  const [data, setData] = useRecoilState(moreViewsState);
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "products"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          console.log(doc.data(), "dataa");
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  return data;
}

export async function addProduct(data) {
  try {
    await addDoc(collection(db, "products"), {
      ...data,
      timeStamp: serverTimestamp(),
    });
    //navigate(-1);
  } catch (err) {
    console.log(err);
  }
}

export const productState = atom({
  key: "product",
  default: {},
});

export async function getProductById(id) {
  const [product, setProduct] = useRecoilState(productState);
  useEffect(() => {
    const fetchProduct = async () => {
      const productRef = doc(db, "products", id);
      const productDoc = await getDoc(productRef);
      if (productDoc.exists()) {
        setProduct(productDoc.data());
      } else {
        console.log("No such document!");
      }
    };
    fetchProduct();
  }, [id]);
  console.log(product);
  return product;
}

// ? Me nació aprender recoil :p . Todo lo de abajo es un hook para el funcionamiento correcto del carrito de compras

export let productincart = "No hay nada en el carrito";

export const cartState = atom({
  key: "cartState",
  default: [],
});

function addToCart(product) {
  return (cart) => [...cart, product];
}

function removeFromCart(productIndex) {
  return (cart) => [    ...cart.slice(0, productIndex),    ...cart.slice(productIndex + 1),  ];
}

function updateCartItem(productIndex, newProduct) {
  return (cart) => [    ...cart.slice(0, productIndex),    newProduct,    ...cart.slice(productIndex + 1),  ];
}

export function useCart() {
  const [cart, setCart] = useRecoilState(cartState);
  productincart = cart
  
  console.log("producto agregado " + productincart)

  function addItem(product) {
    setCart(addToCart(product));
  }

  function removeItem(productIndex) {
    setCart(removeFromCart(productIndex));
  }

  function updateItem(productIndex, newProduct) {
    setCart(updateCartItem(productIndex, newProduct));
  }

  function clearCart() {
    setCart([]);
  }

  return {
    cart,
    addItem,
    removeItem,
    updateItem,
    clearCart,
  };
}



export function getProductInCart() {
  const cart = useRecoilValue(cartState);
  return cart;
}



