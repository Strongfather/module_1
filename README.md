git config --global user.name "Lebedev Gregory"
git config --global user.email "elaz0r15@mail.ru"
git config --global core.autocrlf true
git config --global core.quotepath off
git config --global core.safecrlf warn

git init # инициализация
git config --list # посмотреть настройки
git add . #добавить все файлы
git commit -n 'описание' # сделать коммит
git status# показывает текущий статус
git diff # показывает изменения до текущего коммита
git diff --color-words # Информативный показ
git checkout . # вернуть всю информацию

git checkout -b <имя_новой_ветки> # Создайте новую ветку:
git branch # Просмотр всех веток: