import { atom, useRecoilState } from "recoil";
import { useEffect } from "react";
import {
  addDoc,
  serverTimestamp,
  collection,
  onSnapshot,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import { useRecoilValue } from "recoil";

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
  return product;
}
// atomo User localHost-------------------------------
export const userState = atom({
  key: "userState",
  default: "",
});

export function useUser() {
  const [user, setUser] = useRecoilState(userState);
  const localUser = localStorage.getItem("user");
  useEffect(() => {
    if (localUser) {
      const parseUser = JSON.parse(localUser);
      console.log(parseUser, "hook");
      setUser(parseUser);
    }
  }, [localUser]);
  return user;
}
