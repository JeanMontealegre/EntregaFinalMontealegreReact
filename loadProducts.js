import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json' assert { type: 'json' };
import products from './products.json' assert { type: 'json' };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function uploadProducts() {
  const batch = db.batch();

  products.forEach((product) => {
    const productRef = db.collection('items').doc(product.id);
    batch.set(productRef, product);
  });

  await batch.commit();
  console.log('Productos cargados exitosamente a Firestore');
}

uploadProducts().catch(console.error);

