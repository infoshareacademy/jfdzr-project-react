Stwórzcie w tym repozytorium w folderze '07-firebase-auth' folder team-[numer-pokoju] gdzie będziecie wrzucać swój kod. Każda grupa tworzy nowego brancha: 'git checkout -b 07-firebase/auth-[numer pokoju]' z brancha głównego.

Zadaniem jest implementacja przy pomocy Reacta prostego ekranu rejestracji/logowania - każdy z nich powinien być dostępny jako osobny route.
UWAGA! Nie ma konieczności dodawania nawigacji, ale wpisanie w wyszukiwarkę odpowiedniego adresu powinno wyświetlić odpowiedni ekran - rejestrację albo logowanie.
Aplikacja powinna być podzielona na komponenty, w którym każdy z nich będzie odpowiedzialny za pojedynczą funkcjonalność zgodnie z naturą Reacta. Co stylowania wykorzystujemy dowolną technikę. Można też stylowanie zupełnie pominąć, najważniejsza jest implementacja funkcjonalności, stylowanie na sam koniec :)
Logowanie i rejestracja powinny być zapewnione przez firebase/auth.

Aby rozpoczać pisanie kodu konieczne będzie stworzenie szablonu aplikacji za pomocą create-react-app. Najpierw jednak otwórzcie konsolę i za pomocą komendy 'cd' ustawcie aktualny folder na folder swojego teamu. Następnie wykorzystajcie poniższą komendę aby zainstalować projekt:

```
npx create-react-app auth
```

gdzie 'auth' to nazwa projektu - może być dowolna inna.

BONUS:

1. Dodanie opcji przypominania hasła
