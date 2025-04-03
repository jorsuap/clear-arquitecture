# 📚 Arquitectura Limpia en Angular

Este proyecto sigue los principios de **Arquitectura Limpia (Clean Architecture)**, un enfoque que busca una separación clara de responsabilidades, mejorando la mantenibilidad, escalabilidad y testabilidad del código.

## 🔍 ¿Qué es la Arquitectura Limpia?

La **Arquitectura Limpia** fue propuesta por **Robert C. Martin (Uncle Bob)** y se basa en la organización del código en capas bien definidas. Su principal objetivo es separar la lógica de negocio de los detalles de implementación, logrando así:

✅ **Independencia del framework** → El código no depende directamente de Angular, lo que facilita su migración a otras tecnologías.  
✅ **Testabilidad** → Al estar modularizado, las pruebas unitarias e integración son más sencillas.  
✅ **Mantenibilidad** → Facilita la incorporación de nuevas funcionalidades sin afectar el código existente.  
✅ **Escalabilidad** → La estructura permite que el proyecto crezca de manera ordenada.  

---

## 🏗️ **Estructura del Proyecto**

```plaintext
/src
 ├── app/
 │   ├── config/                # ⚙️ Configuraciones generales
 │   ├── domain/                # 🏛️ Reglas de negocio por módulo
 │   │   ├── user/
 │   │   │   ├── models/
 │   │   │   ├── usecases/
 │   │   ├── product/
 │   │   │   ├── models/
 │   │   │   ├── usecases/
 │   ├── infrastructure/        # 🏗️ Adaptadores técnicos
 │   │   ├── api/               # 🌍 Servicios HTTP
 │   │   ├── persistence/       # 💾 Almacenamiento local
 │   │   ├── websocket/         # 🔗 Comunicación en tiempo real
 │   ├── state/                 # 🔄 Gestión de estado global (NgRx)
 │   │   ├── user/
 │   │   │   ├── facades/
 │   │   │   ├── actions/
 │   │   │   ├── reducers/
 │   │   │   ├── selectors/
 │   │   │   ├── effects/
 │   │   ├── product/
 │   │   │   ├── facades/
 │   │   │   ├── actions/
 │   │   │   ├── reducers/
 │   │   │   ├── selectors/
 │   │   │   ├── effects/
 │   ├── UI/                    # 🎨 Interfaz de usuario
 │   │   ├── components/
 │   │   ├── pages/
 │   │   ├── main/
 │   ├── shared/                 # 🔄 Recursos reutilizables
 │   │   ├── components/         # 🧩 Componentes comunes
 │   │   ├── directives/         # ✨ Directivas personalizadas
 │   │   ├── pipes/              # 🔄 Pipes reutilizables
 │   │   ├── services/           # ⚙️ Servicios genéricos
 │   │   ├── utils/              # 🛠️ Funciones utilitarias
 │
 ├── assets/                    # 🖼️ Recursos estáticos
 ├── environments/               # 🌍 Configuraciones de entornos
```

## 📌 Explicación de cada capa

- **config/** → Contiene configuraciones generales de la aplicación, como rutas y variables globales.
- **domain/** → Implementa la lógica de negocio y casos de uso.
  - `models/` → Definición de modelos y entidades.
  - `usecases/` → Casos de uso que aplican reglas de negocio.
- **infrastructure/** → Contiene adaptadores para interactuar con APIs, almacenamiento y otros servicios externos.
  - `api/` → Servicios HTTP.
  - `persistence/` → Manejo de almacenamiento local (localStorage, sessionStorage, IndexedDB).
  - `websocket/` → Comunicación en tiempo real.
- **state/** → Implementación de NgRx para gestionar el estado global.
  - `facades/` → Proporcionan una capa de abstracción para interactuar con el store.
  - `actions/` → Definen las acciones que modifican el estado.
  - `reducers/` → Reducen los cambios en el estado global.
  - `selectors/` → Métodos para extraer datos del store.
  - `effects/` → Manejan efectos secundarios (llamadas a APIs, etc.).
- **UI/** → Componentes de presentación y páginas de la app.
  - `components/` → Componentes reutilizables.
  - `pages/` → Páginas principales.
  - `main/` → Punto de entrada de la interfaz.
- **shared/** → Contiene recursos reutilizables en toda la aplicación.
  - `components/` → Componentes comunes.
  - `directives/` → Directivas personalizadas.
  - `pipes/` → Pipes reutilizables.
  - `services/` → Servicios genéricos.
  - `utils/` → Funciones utilitarias.
- **assets/** → Contiene imágenes, fuentes y otros recursos estáticos.
- **environments/** → Configuración de entornos (`dev`, `prod`, etc.).

---

## 🛠️ Tecnologías Utilizadas

- **Angular** → Framework frontend
- **TypeScript** → Lenguaje de programación
- **NgRx** → Gestión del estado
- **RxJS** → Programación reactiva
- **Jest** → Pruebas unitarias

---

## 🚀 Instalación y Ejecución

1️⃣ Clona este repositorio:
```bash
git clone https://github.com/tu-usuario/tu-repo.git
```

2️⃣ Instala las dependencias:
```bash
npm install
```

3️⃣ Ejecuta el proyecto en modo desarrollo:
```bash
ng serve
```

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**.

