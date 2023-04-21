import admin from "firebase-admin";
import { initializeApp, applicationDefault, cert } from "firebase-admin/app";

export function init() {
  console.log("init");
  const serviceAccount = require("../chr-janus-app-dev-firebase-adminsdk-vn6wi-9e909f4f25.json");
  initializeApp({
    //credential: admin.credential.applicationDefault(),
    credential: cert(serviceAccount),
  });
}
