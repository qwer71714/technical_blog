import { collection, query, where, getDocs } from "firebase/firestore";
import firebassedb from "../firebase/firebasedb";
import { use } from "react";

const q = query(collection(firebassedb, "cities"), where("capital", "==", true));

const querySnapshot = use(getDocs(q));
querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
});