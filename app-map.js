/* 
***1 create react app
npx create-react-app 'name'
cd 'name'
npm start

***2 Component === function (return JSX)
Компонент это ф-я которая возвращает JSX

***3 gitk --all& - открыть интерфейс git { Ctrl + insert to copy }

*** 4 -> name.module.css - для создания уникальных класов { import Name from ./name.module.css }
*

*** 5 Routing -> { // для переключения страниц в зависимости от адресной строки
*   5.1 -> npm i react-router-dom -save (внести зависимость в package.json)
*
* 5.2 -> <BrowserRouter> <Route path='/path' component={Component} /> </BrowserRouter>
*
* <NavLink to='/dialogs' activeClassName={styleModule.class}></NavLink> (аналог тега <a> только не перезагружает страницу)
* NavLink меняет url без перезагрузки страницы
*
* !!!Чтобы нав линк работал только при точном совпадении адреса -> <NavLink !!!exact!!! to='path'>

* <NavLink activeClassName={DialogsCss.active}
                     to={'/dialogs/' + props.id}>{props.username}</NavLink> // пример с путями
* }



















*/
