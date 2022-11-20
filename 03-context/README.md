Stwórzcie w tym repozytorium w folderze '03-context' folder team-[numer-pokoju] gdzie będziecie wrzucać swój kod. Każda grupa tworzy nowego brancha: 'git checkout -b 03-context/team-[numer pokoju]' z brancha głównego.

Zadaniem jest implementacja przy pomocy Reacta załączonego designu.
Aplikacja powinna być podzielona na komponenty, w którym każdy z nich będzie odpowiedzialny za pojedynczą funkcjonalność zgodnie z naturą Reacta. Co stylowania wykorzystujemy CSS Modules.

Aby rozpoczać pisanie kodu konieczne będzie stworzenie szablonu aplikacji za pomocą create-react-app. Najpierw jednak otwórzcie konsolę i za pomocą komendy 'cd' ustawcie aktualny folder na folder swojego teamu. Następnie wykorzystajcie poniższą komendę aby zainstalować projekt:

```
npx create-react-app context
```

gdzie 'context' to nazwa projektu - może być dowolna inna.

Zadanie do wykonania: zaimplementowanie dwóch contextów na podstawie załączonego designu - do obsługi wersji językowych i do zmiany z trybu ciemnego na jasny. Skorzystajcie z załączonych tekstów w języku polskim i angielskim (tłumaczone translatorem, więc mogą być drobne niedociągnięcia :D). Wygląd strony drugorzędny, ważne, aby style zmieniały się razem ze zmianą konktekstu, wszelkie marginesy, wymiary itd pomijamy. Nie tworzymy wersji mobilnej.

Dodanie sekcji Articles (tej na dole projektu) - zadanie gdy zostanie czas.

Nie ma konieczności stosowania fontów dołączonych do projektu - zadanie dla chętnych jak zostanie czas (ale najpierw dodajemy sekcję Articles)
