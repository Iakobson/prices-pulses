# prices-pulses


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

### додаткові пакети

#### prettier
Install **Prettier** locally:\
``npm install --save-dev --save-exact prettier``

Then, create an empty config file to let editors and other tools know you are using Prettier:\
``node --eval "fs.writeFileSync('.prettierrc','{}\n')"``

Приклад використання на конкретному файлі:\
``npx prettier --write seeder/placeholder-data.ts``









