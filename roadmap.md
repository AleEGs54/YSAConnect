# ✅ YSAConnect - Roadmap de Construcción (SPA)

## 🧱 Fase 1: Configuración base y estructura
- [/] Inicializar proyecto con Vite y React
- [/] Instalar dependencias necesarias
- [/] Crear estructura de carpetas modular (componentes, páginas, servicios, etc.)
- [/] Configurar `main.jsx` con `<BrowserRouter>`
- [ ] Crear `App.jsx` con layout base (`Header`, `Sidebar`, `Outlet`)
- [/] Definir rutas en `AppRouter.jsx`
- [ ] Crear vistas básicas de:
  - [ ] LoginPage
  - [ ] RegistrationDashboardPage
  - [ ] LeaderManagementPage
  - [ ] ActivityLogPage
  - [ ] StatsPage
  - [ ] NotFoundPage

---

## 🔐 Fase 2: Autenticación
- [ ] Crear formulario de login con `react-hook-form`
- [ ] Implementar `AuthContext.jsx`
- [ ] Crear hook `useAuth.js` para login/logout/status
- [ ] Guardar token con `localStorage`
- [ ] Decodificar token con `jwt-decode`
- [ ] Crear `ProtectedRoute.jsx`
- [ ] Proteger rutas privadas en `AppRouter.jsx`

---

## 📄 Fase 3: Registro de personas
- [ ] Implementar `RegistrationTable.jsx`
- [ ] Crear `RegistrationRow`, `RegistrationForm`
- [ ] Agregar filtros: `SearchBar`, `SortControls`, `FilterControls`
- [ ] Usar `fetch` para datos desde `registrationService.js`
- [ ] Usar `useTableLogic` para manejar tabla
- [ ] Añadir feedback visual con `Spinner` y `Alert`

---

## 👥 Fase 4: Gestión de líderes
- [ ] Crear componentes `LeaderList`, `LeaderRow`, `LeaderForm`
- [ ] Conectar con `leaderService.js`
- [ ] Reutilizar estilos y lógica de registro

---

## 📈 Fase 5: Estadísticas y gráficos
- [ ] Crear `StatsDashboard` con `StatCard` y `ChartComponent`
- [ ] Obtener datos con `react-query` o `fetch`
- [ ] Mostrar gráficos con `chart.js` y `react-chartjs-2`
- [ ] Formatear fechas con `date-fns`

---

## 📝 Fase 6: Exportación y logs
- [ ] Crear `ExportButton.jsx`
- [ ] Usar `xlsx` para exportar Excel
- [ ] Usar `jspdf` y `jspdf-autotable` para PDF
- [ ] Mostrar logs con `ActivityLogTable` y `ActivityLogItem`

---

## 📦 Fase 7: Optimización y ajustes finales
- [ ] Lazy load en rutas y componentes grandes
- [ ] Limpieza de CSS y componentes no usados
- [ ] Validación global de formularios
- [ ] Deploy en Netlify/Vercel u otro hosting
- [ ] Agregar README con instrucciones de uso

---

### 🛠 Herramientas principales:
- React 19
- React Router DOM
- React Hook Form
- React Query (o uso propio de fetch)
- Chart.js y react-chartjs-2
- Date-fns
- JWT Decode
- XLSX (con vulnerabilidad conocida, revisa alternativas)
- jsPDF y jsPDF-Autotable