import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
	return (
		<div className="wrapper">
			<Drawer />
			<Header />
			<section className="catalog p-[40px] font-bold">
				<div className="mb-[40px] flex justify-between items-center">
					<h1 className="text-3xl">Все кроссовки</h1>
					<div className="search-block flex">
						<img src="./img/search.svg" alt="Search" />
						<input type="text" placeholder="Поиск..." />
					</div>
				</div>
				<div className="catalog__items flex justify-start flex-wrap">
					<Card />
				</div>
			</section>
		</div>
	);
}

export default App;
