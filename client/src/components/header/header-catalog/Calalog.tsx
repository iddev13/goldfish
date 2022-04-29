import { FC, useState } from "react";
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import { useSpring, animated } from '@react-spring/web';
import Modal from '@mui/material/Modal';
import CatalogButton from "./CatalogButton";
import './CatalogNav.scss'
import { ProductsType } from "../../../redux/reducers/products-reducer";


interface FadeProps {
	children?: React.ReactElement;
	in: boolean;
	onEnter?: () => {};
	onExited?: () => {};
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
	const { in: open, children, onEnter, onExited, ...other } = props;

	const style = useSpring({
		from: { opacity: 0 },
		to: { opacity: open ? 1 : 0 },
		onStart: () => {
			if (open && onEnter) {
				onEnter();
			}
		},
		onRest: () => {
			if (!open && onExited) {
				onExited();
			}
		},
	});

	return (
		<animated.div ref={ref} style={style} {...other}>
			{children}
		</animated.div>
	);
});

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	// boxShadow: 24,
	// width: 430,
	// bgcolor: 'background.paper',
	// p: 4,
};

type PropsTypes = {
	products: Array<ProductsType>
}

export default function SpringModal({ products }: any) {
	// console.log(products);

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const onMouseEnterHandler = (event: React.BaseSyntheticEvent) => {
		let subMenu = event.target.lastChild
		subMenu.hidden = false
	}

	const onMouseLeaveHandler = (event: React.BaseSyntheticEvent) => {
		let subMenu = event.target.lastChild
		subMenu.hidden = true
	}

	let catalogList = products.map((elem: ProductsType) => {
		return <li
			onMouseEnter={onMouseEnterHandler}
			onMouseLeave={onMouseLeaveHandler}
			key={elem.id}>
			<a
				href={elem.url}
				className="menu__link">
				{elem.name}
			</a>
			<div className="sub-menu" hidden={true}>
				<h4 className="sub-menu__title">Warhammer 40000</h4>
				<ul className="sub-menu__list">
					{elem.product.map((subElem: any, index: number) => {
						return <li key={index.toString()}>
							<a
								href={subElem.url}
								className="sub-menu__link"
							>{subElem.productName}</a>
						</li>
					})}
				</ul>
			</div>
		</li>
	})

	return (
		<>
			<div className="catalog-nav__header" onClick={handleOpen}>
				<CatalogButton />
				<h6 className="catalog-nav__title">
					<button>каталог</button>
				</h6>
			</div>
			<Modal
				aria-labelledby="spring-modal-title"
				aria-describedby="spring-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<Box sx={style}>
						<div className="catalog-nav__body">
							<div className="catalog-nav__left catalog-left">
								<div className="catalog-nav__name">
									<button className="catalog-nav__close" onClick={handleClose}></button>
									<a href="#">каталог</a>
								</div>
								<ul className="catalog-nav__menu menu">
									{catalogList}
								</ul>
							</div>
						</div>
					</Box>
				</Fade>
			</Modal>
		</>
	);
}
