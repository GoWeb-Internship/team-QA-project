---
page_title: Тело страницы
page_chapter_name: component
page_chapter_title: Компоненты и функциональность
slug: body-page
identifier: body-page
language: ru
page_range: 2
---
![тело страницы](/img/body1.jpg)

### 1. Раздел теории[​](https://faq-qa.m.goit.global/ru-UA/components-and-functionality/body-page#1-%D1%80%D0%B0%D0%B7%D0%B4%D0%B5%D0%BB-%D1%82%D0%B5%D0%BE%D1%80%D0%B8%D0%B8 "Прямая ссылка на этот заголовок")

Содержит теорию и объяснения, с примерами, необходимыми для решения соответствующего задания, формулировку задания и критерии приема.

### 1.1 Кнопка “Скрыть теорию и задание” в верхней части раздела

![кнопка "скрыть теорию и задания"](/img/body2.jpg)

По клику на эту кнопку раздел теории сворачивается и окно редактора разворачивается на всю ширину страницы. Кнопка уменьшается до иконки без текста.

### 1.2. Заголовок теоретической части

![заголовок теоретической части](/img/body3.jpg)

По клику на заголовок основная теоретическая часть раздела теории сворачивается, в разделе остаются только формулировка задания и критериев приема.

![кнопка "теория"](/img/body4.jpg)

Повторный клик, разворачивает раздел теории в первоначальное состояние.

### 2. Окно редактора кода

![окно редактора кода](/img/body5.jpg)

* В окне редактора присутствует стартовый код, который нужно дополнить согласно заданию, для того чтобы решить задачу.
* Писать код можно в выделенной серым строчке, в которой установлен курсор.
* Стартовый код редактировать невозможно.
* Есть возможность вводить символы в конце заблокированных строк, но проверка такого кода приводит к ошибке компиляции.

### 3. Меню проверки[​](https://faq-qa.m.goit.global/ru-UA/components-and-functionality/body-page#3-%D0%BC%D0%B5%D0%BD%D1%8E-%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B8 "Прямая ссылка на этот заголовок")

Находится между окном редактора кода и секцией результатов.

![меню проверки](/img/body6.jpg)

### 3.1. Кнопка “Проверить”[​](https://faq-qa.m.goit.global/ru-UA/components-and-functionality/body-page#31-%D0%BA%D0%BD%D0%BE%D0%BF%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%B8%D1%82%D1%8C "Прямая ссылка на этот заголовок")

* По клику кнопку `"Проверить"` на сервер отправляется запрос на проверку кода присутствующего в окне редактора.
* Ответ высвечивается в секции результатов. Пункты которые прошли проверку показаны зеленым текстом, которые не прошли - красным. Пример проверки стартового кода:

![кнопка "проверить"](/img/body7.jpg)

* В случае, если код в окне редактора проверку проходит и все пункты в секции результатов отображены зеленым текстом, текст на кнопке проверить меняется на `"Следующий вопрос"`:

![кнопка "следующий вопрос"](/img/body8.jpg)

* По клику на кнопку `"Следующий вопрос"` открывается страница со следующим вопросом.

### 3.2. Кнопка "Сбросить"[​](https://faq-qa.m.goit.global/ru-UA/components-and-functionality/body-page#32-%D0%BA%D0%BD%D0%BE%D0%BF%D0%BA%D0%B0-%D1%81%D0%B1%D1%80%D0%BE%D1%81%D0%B8%D1%82%D1%8C "Прямая ссылка на этот заголовок")

Предназначена для возвращения окна редактора в стартовое состояние. Т.е. все изменения отменяются в один клик. Для предотвращения случайного сброса введенного кода, предусмотрено модальное окно с запросом о подтверждении желания пользователя сбросить код в начальное состояние, которое появляется по клику на кнопку `"Сбросить"`:

![кнопка "скинуть"](/img/body9.jpg)

По клику на кнопку `"Да"` в модальном окне, окно закрывается, код в редакторе сбрасывается до начального состояния. По клику на кнопку `"Нет"` окно закрывается, код в окне редактора не изменяется. Клик по серой области или нажатие клавиши `"Esc"` дублируют нажатие кнопки `"Нет"`.

### 3.3. Кнопка "Скрыть секцию результатов"[​](https://faq-qa.m.goit.global/ru-UA/components-and-functionality/body-page#33-%D0%BA%D0%BD%D0%BE%D0%BF%D0%BA%D0%B0-%D1%81%D0%BA%D1%80%D1%8B%D1%82%D1%8C-%D1%81%D0%B5%D0%BA%D1%86%D0%B8%D1%8E-%D1%80%D0%B5%D0%B7%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82%D0%BE%D0%B2 "Прямая ссылка на этот заголовок")

По клику на кнопку `"Скрыть секцию результатов"` секция результатов сворачивается, окно редактора кода разворачивается на всю высоту тела страницы, меню проверки перемещается в низ страницы, текст кнопки меняется на `"Показать секцию результатов"`.

![кнопка "показать секцию результатов"](/img/body10.jpg)

По клику на кнопку `"Показать секцию результатов"` секция разворачивается в исходное состояние.

### 4. Секция результатов[​](https://faq-qa.m.goit.global/ru-UA/components-and-functionality/body-page#4-%D1%81%D0%B5%D0%BA%D1%86%D0%B8%D1%8F-%D1%80%D0%B5%D0%B7%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82%D0%BE%D0%B2 "Прямая ссылка на этот заголовок")

Предназначена для отображения результатов проверки кода в окне редактора.