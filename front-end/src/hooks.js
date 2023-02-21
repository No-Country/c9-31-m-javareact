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
