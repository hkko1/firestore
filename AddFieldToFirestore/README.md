# Add a new field to all document of a collection in a firestore
## Write 'input.txt'  
* line 1: collection name
* line 2: field name
* line 3: type ( string, number, boolean )
* line 4: data
## Get the JSON file for firebase Admin SDK  ( [https://firebase.google.com/docs/admin/setup](https://firebase.google.com/docs/admin/setup)]
 * To generate a private key file for your service account:
  1. In the Firebase console, open Settings > Service Accounts.
  2. Click Generate New Private Key, then confirm by clicking Generate Key.
  3. Securely store the JSON file containing the key.
  * Change the JSON name in firebase/initialize.ts in this project to your JSON file.