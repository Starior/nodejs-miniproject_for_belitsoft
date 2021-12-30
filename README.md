# nodejs-miniproject
from belitsoft

ДЗ:
В рамках ДЗ давайте придерживаться след. структуры - у вас будет 2 папки client и server

SERVER PART
Необходимые пакеты: express, body-parser, mongoose, nodemon
Entry point приложения: index.js
+ Необходимо добавить script "start" c запуском index.js через nodemon

1. Сущности + структура и связи:

1.1 Post
- name (required)
- body (required)
- excerpt
- categories (required + one to many relation)
- tags (required + one to many relation)
- author (required + one to one relation)
- createdAt
- updatedAt

1.2 Category
- name (required)
- excerpt
- createdAt
- updatedAt

1.3 Tag
- name (required)
- createdAt
- updatedAt

1.4 Author
- name (required)
- email (required)
- createdAt
- updatedAt

P.S. При необходимости можете добавить доп. поля на свое усмотрение

P.S. Поля createdAt и updatedAt должны содержать информацию о дате создания и дате обновления документа соответственно
(см. документацию -> https://mongoosejs.com/docs/guide.html#timestamps)

2. Необходимо реализовать CRUD для каждой из сущностей
Давайте придерживаться след. нейминга: find, findOne, create, update, remove

Требования по структуре:
2.1. Для каждой из сущностей необходимо создать файл с роутами (routes/posts.js, routes/categories.js ...)
2.2. Отдельный контроллер под сущность (controllers/posts.js, controllers/categories.js)
2.3. Отдельная модель под сущность (models/post.js, models/category.js ...)

3. Требования к API:
3.1. Формат данных: JSON
3.2. Использование status codes
3.3. Придерживаться нейминга согласно JSON API Schema
3.3. Обработка ошибок
(например: попытка удалить или обновить документ, которого не существует)

4. Необходимо добавить middleware (для всех роутов/маршрутов), задачей которого будет логирование запросов пользователя
Данные для лога: маршрут/роут, метод/тип запроса, params (если они есть), body (если есть) и дата + время
Логи необходимо сохранять в файл logs.json
