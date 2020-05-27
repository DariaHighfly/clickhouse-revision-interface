## Dashboard for ClickHouse Revision Performance Comparison and Analysis Interface

Данный дашборд содержит 5 разделов - Dashboard (Графики и диаграммы),
Tables (Таблицы с результатами тестирования), All Queries (Все SQL запросы из тестов), 
Logs (Логи работы), Download (Ссылка на скачивания архива со всеми файлами результатов тестирования)

### Статичное приложение 

Статичное приложение с инструкцией по генерации статичной страницы содержится в репозитории

https://github.com/DariaHighfly/clickhouse-testing-interface 


### Запуск

```bash
# install dependencies
$ npm install

# generate static project
$ npm run serve
```
   

### Функционал - Графики

При наведении на части графиков и диаграмм, показывается дополнительная информация.
Некоторые графики имеют меню с настройками (расположены над графиком), которые можно изменять. 

### Функционал - Таблицы

##### Сортировка

При клике на заголовок столбца он сортируется сначала в порядке убывания значений,
если столбец содержит числа, в лексикографическом порядке, если это строка, 
и в порядке убывания элементов, начиная с первого, если это массив. 
При повторном клике на заголовок происходит так же сортировка, но уже в обратном порядке. 

##### Скрытие таблиц

При нажатии специального значка справа от названия таблицы таблица скрывается, 
при повторном нажатии вновь показывается.
 
### Скриншоты 

<img src="https://github.com/DariaHighfly/clickhouse-revision-interface/blob/master/img/clickhouse_img_1.png" width="100%" height="100%">
<img src="https://github.com/DariaHighfly/clickhouse-revision-interface/blob/master/img/clickhouse_img_2.png" width="100%" height="100%">
<img src="https://github.com/DariaHighfly/clickhouse-revision-interface/blob/master/img/clickhouse_img_3.png" width="100%" height="100%">
<img src="https://github.com/DariaHighfly/clickhouse-revision-interface/blob/master/img/clickhouse_img_4.png" width="100%" height="100%">
<img src="https://github.com/DariaHighfly/clickhouse-revision-interface/blob/master/img/clickhouse_img_5.png" width="100%" height="100%">
<img src="https://github.com/DariaHighfly/clickhouse-revision-interface/blob/master/img/clickhouse_img_6.png" width="100%" height="100%">


