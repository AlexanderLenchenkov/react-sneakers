import React from 'react';

function Drawer() {
	return (
		<div style={{ display: 'none' }} className="overlay">
			<div className="drawer">
				<div className="drawer__top flex justify-between items-center">
					<h2>Корзина</h2>
					<img className="cart__item-btn cursor-pointer" src="./img/btn-remove.svg" alt="remove" />
				</div>
				<div className="cart-items">
					<div className="cart__item flex items-center justify-between">
						<div className="cart__item-img"></div>
						<div className="mr-[20px]">
							<p className="mb-[5px] text-[16px]">Мужские Кроссовки Nike Air Max 270</p>
							<p className="font-bold">12 999 руб.</p>
						</div>
						<img className="cart__item-btn" src="./img/btn-remove.svg" alt="remove" />
					</div>
					<div className="cart__item flex items-center justify-between">
						<div className="cart__item-img"></div>
						<div className="mr-[20px]">
							<p className="mb-[5px] text-[16px]">Мужские Кроссовки Nike Air Max 270</p>
							<p className="font-bold">12 999 руб.</p>
						</div>
						<img className="cart__item-btn" src="./img/btn-remove.svg" alt="remove" />
					</div>
				</div>
				<div className="cart-total-block">
					<ul className="mb-[25px]">
						<li className="flex items-end mb-[20px]">
							<div>Итого:</div>
							<div className="cart-total-spice"></div>
							<div className="font-bold">21 743 руб.</div>
						</li>
						<li className="flex items-end">
							<div>Налог 5%: </div>
							<div className="cart-total-spice"></div>
							<div className="font-bold">1074 руб.</div>
						</li>
					</ul>
					<button className="green-button">
						Оформить заказ <img src="./img/arrow.svg" alt="arrow" />{' '}
					</button>
				</div>
			</div>
		</div>
	);
}

export default Drawer;
