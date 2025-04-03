# Arquitectura Limpia en Angular

## 📖 ¿Qué es la Arquitectura Limpia?
La **Arquitectura Limpia** es un patrón de diseño de software que busca organizar el código de manera modular y escalable, separando las responsabilidades en capas bien definidas. Su objetivo principal es desacoplar la lógica de negocio de la infraestructura y la interfaz de usuario, facilitando el mantenimiento, la prueba y la reutilización del código.

En el contexto de Angular, se estructura el proyecto dividiendo la aplicación en capas de **dominio**, **infraestructura**, **estado** y **UI**, asegurando una separación clara de responsabilidades y promoviendo buenas prácticas de desarrollo.

---

## 📂 Estructura del Proyecto

```bash
/src
 ├── app/
 │   ├── config/                # ⚙️ Configuraciones generales de la aplicación
 │   │   ├── app.config.ts      # 🛠️ Configuración global de la app
 │   │   ├── app.routes.ts      # 🗺️ Definición de rutas de la aplicación
 │   │
 │   ├── domain/                # 🏛️ Lógica de negocio y reglas de dominio
 │   │   ├── models/            # 📂 Definición de modelos de datos
 │   │   │   ├── model/         # 📝 Modelos específicos de cada entidad
 │   │   │   │   ├── gateways/  # 🔌 Interfaces que definen contratos para la infraestructura
 │   │   ├── usecases/          # 🎯 Casos de uso que contienen la lógica de aplicación
 │   │
 │   ├── infrastructure/        # 🏗️ Implementaciones técnicas y adaptadores externos
 │   │   ├── driven-adapter/    # 🔌 Adaptadores para interactuar con APIs, bases de datos, etc.
 │   │   │   ├── api/           # 🌍 Llamadas HTTP a servicios externos
 │   │
 │   ├── state/                 # 🔄 Gestión del estado global con NgRx
 │   │   ├── actions/           # ⚡ Definición de acciones para cambiar el estado
 │   │   ├── effects/           # 🔁 Lógica asíncrona y efectos secundarios
 │   │   ├── reducers/          # 🔄 Reductores que modifican el estado global
 │   │   ├── selectors/         # 🔍 Métodos para obtener información del estado
 │   │   ├── facades/           # 🎭 Intermediarios entre la UI y el estado global
 │   │   ├── state.ts           # 📌 Definición del estado centralizado
 │   │
 │   ├── UI/                    # 🎨 Componentes de presentación y páginas de la app
 │   │   ├── components/        # 🧩 Componentes reutilizables y presentacionales
 │   │   ├── pages/             # 📄 Páginas de la aplicación (pantallas principales)
 │   │   ├── main/              # 🏠 Punto de entrada de la interfaz
 │
 ├── assets/                    # 🖼️ Recursos estáticos como imágenes, fuentes y estilos
 ├── environments/               # 🌍 Configuraciones de entornos (dev, prod, etc.)
```

---

## 🔥 Beneficios de esta Arquitectura
✔ **Mantenibilidad**: Separar responsabilidades facilita la modificación del código sin afectar otras capas.
✔ **Escalabilidad**: Permite agregar nuevas funcionalidades sin afectar el núcleo de la aplicación.
✔ **Reutilización**: Los casos de uso y modelos pueden reutilizarse en diferentes partes de la aplicación.
✔ **Pruebas más sencillas**: La independencia entre capas facilita la creación de pruebas unitarias y de integración.
✔ **Modularidad**: Se pueden reemplazar o modificar partes del sistema sin afectar el resto.

---

## 🛠️ Recomendaciones
- Mantén los **casos de uso** en la capa de **dominio**, no en los componentes.
- Evita que la **UI** acceda directamente a la **infraestructura**, usa **facades** en la capa de **estado**.
- Los **gateways** definen contratos que las implementaciones en **infraestructura** deben seguir.
- Mantén la lógica de **negocio** en los **usecases**, no en los servicios Angular.
- Usa **selectors** para obtener datos del estado y **effects** para manejar efectos secundarios en NgRx.

---

## 📌 Conclusión
Esta arquitectura permite una aplicación Angular bien estructurada, modular y fácil de mantener. Siguiendo este esquema, garantizamos un código más limpio y organizado, alineado con las mejores prácticas de desarrollo.

