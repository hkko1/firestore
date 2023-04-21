import { init } from "./firebase/initialize";
import { getFirestore } from "firebase-admin/firestore";

import { readFile } from "fs";

async function addFieldFirestoreDocument(
  collectionName: string,
  fieldName: string,
  value: any
) {
  const firestore = getFirestore();
  const collectionRef = firestore.collection(collectionName);

  const snapshot = await collectionRef.get();

  snapshot.forEach((doc) => {
    let data = doc.data();

    //    console.log("### ", doc.data());
    data[fieldName] = value;
    doc.ref.set(data);
  });
}

function getValue(type: string, value: string): any {
  switch (type) {
    case "string":
      return value;
    case "number":
      return Number(value);
    case "boolean":
      return value == "true";
    default:
      return value;
  }
}

async function run() {
  let collectionName: string;
  let fieldName: string;
  let type: string;
  let value: any;

  console.log("add Field");

  init();

  readFile("input.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    let arr = data.toString().split("\n");

    collectionName = arr[0];
    fieldName = arr[1];
    value = getValue(arr[2], arr[3]);

    addFieldFirestoreDocument(collectionName, fieldName, value);
  });
}

run();
