# complex

Приложение vue (front) и koa (backend)
Представляет собой сайт-визитку с регистрацией новых пользователей
В качестве базы данных задействано PostgreSQL
Дамп базы в корне проекта в файле complexapi.sql.gz
Пароль у пользователей secret

## Развертывание проекта
В корне проекта выполнить для установки зависимостей vue
```
yarn install
```
Далее, перейти в директорию api и выполнить для установки зависимостей koa
```
npm install
```

### Запуск компилятора для разработки
Перейти в директорию api и выполнить для запуска веб сервера koa
```
yarn run serve
```
В корне проекта выполнить 
```
yarn run serve
```

### Однократный запуск компилятора.для production
```
yarn run build
```

### Запуск eslint.
```
yarn run lint
```