# Next Testing Library
## Single command
```shell
npm i -D @testing-library/dom@^9.0.0 @testing-library/jest-dom@^6.4.2 @testing-library/react@^14.2.1 next-router-mock@0.9.9 ts-node@^10.9.2 jest@^29.7.0 jest-environment-jsdom@^29.7.0 @types/jest@^29.5.12 && git clone https://github.com/LightScrool/next-testing-library.git && cat > jest.config.ts << EOF
import { createJestConfig } from "./next-testing-library";

export default createJestConfig({ dir: "./" });
EOF
```
## Quick start
### 1. Installing dependencies
#### 1.1 Add following dependencies to your package.json file:
```
"@testing-library/dom": "^9.0.0",  
"@testing-library/jest-dom": "^6.4.2",  
"@testing-library/react": "^14.2.1",  
"next-router-mock": "0.9.9",  
"ts-node": "^10.9.2",  
"jest": "^29.7.0",  
"jest-environment-jsdom": "^29.7.0",  
```
#### 1.2 If you are using typescript, you may also want to add this dependency:
```
"@types/jest": "^29.5.12"
```

#### 1.3 Run installation command:
```
npm install
```
```
yarn install
```
```
pnpm install
```
### 2. Clone module to your repository
```
git clone https://github.com/LightScrool/next-testing-library.git
```
### 3. Create `jest.config.ts` file with following content:
```typescript
import { createJestConfig } from "./next-testing-library";

export default createJestConfig({ dir: "./" });
```