Stwórzcie w tym repozytorium w folderze '04-typescript' folder team-[numer-pokoju] gdzie będziecie wrzucać swój kod. Każda grupa tworzy nowego brancha: 'git checkout -b 04-typescript/team-[numer pokoju]' z brancha głównego.

Zadaniem jest implementacja przy pomocy Reacta załączonego designu.
Aplikacja powinna być podzielona na komponenty, w którym każdy z nich będzie odpowiedzialny za pojedynczą funkcjonalność zgodnie z naturą Reacta. Co stylowania wykorzystujemy Styled-components.

Aby rozpoczać pisanie kodu konieczne będzie stworzenie szablonu aplikacji za pomocą create-react-app. Najpierw jednak otwórzcie konsolę i za pomocą komendy 'cd' ustawcie aktualny folder na folder swojego teamu. Następnie wykorzystajcie poniższą komendę aby zainstalować projekt:

```
npx create-react-app project-typescript --template typescript
```

gdzie 'project-typescript' to nazwa projektu - może być dowolna inna.

Zadanie polega na stworzeniu prostej todo listy korzystając z typescripta oraz napisanie podstawowych testów sprawdzających funkcjonowanie aplikacji.

Podział aplikacji:

1. Komponenty:

   - App.tsx (ze stanem), który renderuje:
   - TodoList (stan przyjmuje i renderuje za pomocą map(). W funkcji map jest zwracany komponent TodoItem)

     .map(({id, description, isDone})=><TodoItem id={id} description={description} isDone={isDone}/>)

   - TodoItem - kliknięcie na TodoItem powoduje zaznaczneie zadania
