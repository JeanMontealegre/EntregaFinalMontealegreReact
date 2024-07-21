# E-commerce React App

## Descripción
Aplicación de e-commerce desarrollada en React de venta de productos para perros. 
Permite a los usuarios navegar por productos, añadir productos al carrito y finalizar la compra.

## Tecnologías Usadas
- React
- Firebase Firestore
- React Router
- Tailwind CSS
- Vite

## Instrucciones de Uso e Instalación

### Requisitos
- Node.js y npm instalados en tu sistema

### Instalación
1. Clona el repositorio:
    ```bash
    git clone https://github.com/JeanMontealegre/EntregaFinalMontealegreReact.git
    cd tu-repositorio
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Configura Firebase:
    - Crea un proyecto en Firebase.
    - Habilita Firestore.
    - Descarga tu archivo `serviceAccountKey.json` desde la configuración de Firebase y colócalo en la carpeta raíz del proyecto.
    - Configura tus credenciales de Firebase en `firebaseConfig.js`.

4. Carga los productos a Firestore:
    ```bash
    node loadProducts.js
    ```

### Ejecución en Desarrollo
Para correr la aplicación en modo desarrollo, ejecuta:
```bash
npm run dev
