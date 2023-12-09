# prices-pulses


## 🗄️ Backend Technology

- 🔧 Node.js
- 🚀 Express.js
- 📜 TypeScript
- 📦 MongoDB
- ⚡ Socket.io
- 🔄 Redis
- 🔑 Joi
- 🔐 JWT
- 🃏 Jest Tests
- 🐳 Docker

## 🖥️ Frontend Technology
- 🌐 Next.js
- 📜 TypeScript
- 🎨 MUI
- 🔁 Redux Toolkit
- ⚡ Socket.io
- 🔍 Eslint
- 📡 Axios
- 🔐 Next-Auth
- 🌲 Cypress Tests
- 🐳 Docker

### структура робочих файлів проекту

```go
📁prices-pulses/
│
├─ package.json
├─ tsconfig.json
├─ next.config
├─ next-env.d
├─ tailwind.config
├─ postcss.config
│
├─ 📁app/
│  ├─ globals.css
│  ├─ fonts.ts
│  ├─ favicon
│  ├─ layout.tsx
│  ├─ page.tsx
│  │
│  ├─ 📁api/
│  │  ├─ 📁admin/
│  │  │  ├─ 📁beverages/
│  │  │  ├─ 📁householdchemicals/
│  │  │  └─ 📁seafood/
│  │  │
│  │  ├─ 📁beverages/
│  │  │  ├─ 📁alcoholic/
│  │  │  └─ 📁nonalcoholic/
│  │  │
│  │  ├─ 📁householdchemicals/
│  │  │
│  │  └─ 📁seafood/
│  │
│  ├─ 📁about/
│  │  └─ page.tsx
│  ├─ 📁profile/
│  │  └─ page.tsx
│  ├─ 📁signin/
│  │  └─ page.tsx
│  │
│  ├─ 📁beverages/
│  │  ├─ layout.tsx
│  │  ├─ 📁alcoholic/
│  │  │  └─ page.tsx
│  │  ├─ 📁nonalcoholic/
│  │  │  └─ page.tsx
│  │  ├─ 📁create/
│  │  │  └─ page.tsx
│  │  └─ 📁[id]/
│  │     └─ 📁edit/
│  │        └─ page.tsx
│  │
│  ├─ 📁householdchemicals/
│  │  ├─ page.tsx
│  │  ├─ 📁create/
│  │  │  └─ page.tsx
│  │  └─ 📁[id]/
│  │     └─ 📁edit/
│  │        └─ page.tsx
│  │
│  └─ 📁seafood/
│  │  ├─ page.tsx
│  │  ├─ 📁create/
│  │  │  └─ page.tsx
│  │  └─ 📁[id]/
│  │     └─ 📁edit/
│  │        └─ page.tsx
│  │
│  └─ 📁view-components/
│     ├─ logo.tsx
│     ├─ skeletons.tsx
│     ├─ login-form.tsx
│     ├─ button.tsx
│     ├─ 📁dashboard/
│     │  ├─ sidenav.tsx
│     │  ├─ nav-links.tsx
│     │
│     ├─ 📁.../
│     │  ├─ ...tsx
│     │  ├─ ...tsx
│
│
├─ 📁public/
│  ├─ 📁beverages/
│  │  ├─ 📁alcoholic/
│  │  └─ 📁nonalcoholic/
│  ├─ 📁householdchemicals/
│  │   
│  └─ 📁seafood/  
│
├─ 📁backend/
│  ├─ 📁models/
│  │  ├─ enums.ts
│  │  ├─ interfaces.ts
│  │  ├─ types.ts
│  │  └─ classes.ts
│  │
│  ├─ 📁services/
│  │  ├─ get-data.ts
│  │  ├─ data-actions.ts
│  │  └─ utils.ts
│  │
│  ├─ 📁middlewares/
│  │  └─ 
│  │
│  └─ 📁controllers/
│     └─ 
│    
└─ 📁seeder/
   ├─ placeholder-data.ts
   └─ seed.js
```

 <p align="center">(🚧  The project is under active development! 🔨)</p>





### додаткові пакети

#### prettier
Install **Prettier** locally:\
``npm install --save-dev --save-exact prettier``

Then, create an empty config file to let editors and other tools know you are using Prettier:\
``node --eval "fs.writeFileSync('.prettierrc','{}\n')"``

Приклад використання на конкретному файлі:\
``npx prettier --write seeder/placeholder-data.ts``

#### eslint-config-prettier
We recommend including it in your ESLint config to make ESLint and Prettier work together.

``npm install --save-dev eslint-config-prettier``





- - -

## ⚡️ Features
- 🔑 authentication and authorization for secure access to the system
- 👑 login as a Super Admin, Client, and User for different access levels
- 🖼️ image uploaded preview for a user-friendly experience
- ✉️ email templates for efficient and consistent communication
- 🎨 themes color setting and dark mode for a personalized interface
- 🚫 Allow admin to enable/disable user registration module
- 🍪 GDPR Cookie for a personalized and seamless user experience
- 📣 Integrate Telegram for messaging and notifications
- 💬 real-time custom messenger using socket.io for seamless communication with the company, users, and clients



