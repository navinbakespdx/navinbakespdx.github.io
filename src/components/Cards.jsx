import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Cards.css";
import CardGroup from "react-bootstrap/CardGroup";

function Cards() {
	return (
		<section id="items">
			<div className="cards">
				<h1 className="text-info" style={{ textAlign: "center" }}>
					Items <i className="bi-basket3-fill"></i>
				</h1>
				<h3 className="text-info">Big Bites</h3>
				<div className="big-bites-cards" id="c-group">
					<CardGroup style={{ width: "fit-content" }}>
						<Card
							bg="dark"
							text="light"
							border="secondary"
							style={{ maxWidth: "400px" }}
						>
							<Card.Img
								variant="top"
								src="./images/IMG_1600-card.jpg"
								className="card-img"
							/>
							<Card.Body>
								<Card.Title>Vanilla Madeleines</Card.Title>
								<Card.Text>Classic french madeleines</Card.Text>
							</Card.Body>
						</Card>
						<Card
							bg="dark"
							text="light"
							border="secondary"
							style={{ maxWidth: "400px" }}
						>
							<Card.Img
								variant="top"
								src="./images/IMG_0308-card.jpeg"
								className="card-img"
							/>
							<Card.Body>
								<Card.Title>Chocolate Chip Cookie</Card.Title>
								<Card.Text>
									Brown butter chocolate chip cookie with a crispy exterior and
									chewy interior
								</Card.Text>
							</Card.Body>
						</Card>
						<Card
							bg="dark"
							text="light"
							border="secondary"
							style={{ maxWidth: "400px" }}
						>
							<Card.Img
								variant="top"
								src="./images/IMG_1920-card.jpg"
								className="card-img"
							/>
							<Card.Body>
								<Card.Title>Cocoa Brownies</Card.Title>
								<Card.Text>
									Fudgy cocoa brownies made with brown butter
								</Card.Text>
							</Card.Body>
						</Card>
					</CardGroup>
				</div>
				<h3 className="text-info">Cakes</h3>
				<div className="cakes-cards" id="c-group">
					<CardGroup style={{ width: "fit-content" }}>
						<Card
							bg="dark"
							text="light"
							border="secondary"
							style={{ maxWidth: "400px" }}
						>
							<Card.Img variant="top" src="./images/IMG_1740-card.jpeg" />
							<Card.Body>
								<Card.Title>Chocolate Bundt Cake</Card.Title>
								<Card.Text>
									Moist buttermilk chocolate mocha bundt cake with a sweet glaze
									made with Belgian chocolate and honey
								</Card.Text>
							</Card.Body>
						</Card>
						<Card
							bg="dark"
							text="light"
							border="secondary"
							style={{ maxWidth: "400px" }}
						>
							<Card.Img variant="top" src="./images/IMG_1885-card.jpeg" />
							<Card.Body>
								<Card.Title>Blueberry Coffee Cake</Card.Title>
								<Card.Text>
									Traditional blueberry coffee cake made with yogurt topped with
									a crispy cinnamon and nutmeg streusel
								</Card.Text>
							</Card.Body>
						</Card>
						<Card
							bg="dark"
							text="light"
							border="secondary"
							style={{ maxWidth: "400px" }}
						>
							<Card.Img variant="top" src="./images/IMG_5137-card.jpg" />
							<Card.Body>
								<Card.Title>Chocolate Chip Banana Bread</Card.Title>
								<Card.Text>Naturally sweet with dark chocolate chips</Card.Text>
							</Card.Body>
						</Card>
					</CardGroup>
				</div>
				<h3 className="text-info">Tarts</h3>
				<div className="tarts-cards" id="c-group">
					<CardGroup style={{ width: "fit-content" }}>
						<Card
							bg="dark"
							text="light"
							border="secondary"
							style={{ maxWidth: "400px" }}
						>
							<Card.Img variant="top" src="./images/IMG_5108-card.jpg" />
							<Card.Body>
								<Card.Title>Large Fruit Tart</Card.Title>
								<Card.Text>
									Buttery almond crust filled with vanilla pastry cream and
									topped with fresh berries
								</Card.Text>
							</Card.Body>
						</Card>
						<Card
							bg="dark"
							text="light"
							border="secondary"
							style={{ maxWidth: "400px" }}
						>
							<Card.Img variant="top" src="./images/IMG_5125-card.jpeg" />
							<Card.Body>
								<Card.Title>Small Fruit Tart</Card.Title>
								<Card.Text>Individual sized fruit tarts</Card.Text>
							</Card.Body>
						</Card>
					</CardGroup>
				</div>
				<h3 className="text-info">Jams</h3>
				<div className="jam-cards" id="c-group">
					<CardGroup style={{ width: "fit-content" }}>
						<Card
							bg="dark"
							text="light"
							border="secondary"
							style={{ maxWidth: "400px" }}
						>
							<Card.Img variant="top" src="./images/IMG_1913-card.jpeg" />
							<Card.Body>
								<Card.Title>Blackberry Jalapeño</Card.Title>
								<Card.Text>
									Low sugar blackberry jam with a hint of jalapeño flavor
									without the spice
								</Card.Text>
							</Card.Body>
						</Card>
						<Card
							bg="dark"
							text="light"
							border="secondary"
							style={{ maxWidth: "400px" }}
						>
							<Card.Img variant="top" src="./images/IMG_1914-card.jpeg" />
							<Card.Body>
								<Card.Title>Blackberry Peach Bourbon</Card.Title>
								<Card.Text>
									Sweet blackberries, peaches, and Kentucky bourbon
								</Card.Text>
							</Card.Body>
						</Card>
						<Card
							bg="dark"
							text="light"
							border="secondary"
							style={{ maxWidth: "400px" }}
						>
							<Card.Img variant="top" src="./images/IMG_1915-card.jpeg" />
							<Card.Body>
								<Card.Title>Marion-berry Lavender</Card.Title>
								<Card.Text>
									Sweet and fresh marionberries infused with a hint of lavender
									and lemon
								</Card.Text>
							</Card.Body>
						</Card>
					</CardGroup>
				</div>
				<h3 className="text-info">Breads</h3>
				<div className="breads-cards" id="c-group">
					<CardGroup style={{ width: "fit-content" }}>
						<Card
							bg="dark"
							text="light"
							border="secondary"
							style={{ maxWidth: "400px" }}
						>
							<Card.Img variant="top" src="./images/IMG_5122-card.jpeg" />
							<Card.Body>
								<Card.Title>Croissant</Card.Title>
								<Card.Text>Flaky and buttery, made from scratch</Card.Text>
							</Card.Body>
						</Card>
						<Card
							bg="dark"
							text="light"
							border="secondary"
							style={{ maxWidth: "400px" }}
						>
							<Card.Img variant="top" src="./images/IMG_1893-card.jpg" />
							<Card.Body>
								<Card.Title>Scones</Card.Title>
								<Card.Text>
									Crispy scones topped with caramelized sugar, chocolate chip or
									dried fruit
								</Card.Text>
							</Card.Body>
						</Card>
						<Card
							bg="dark"
							text="light"
							border="secondary"
							style={{ maxWidth: "400px" }}
						>
							<Card.Img variant="top" src="./images/IMG_5134-card.jpg" />
							<Card.Body>
								<Card.Title>Artisan White Bread</Card.Title>
								<Card.Text>
									Country loaf with a crispy crust and chewy interior
								</Card.Text>
							</Card.Body>
						</Card>
					</CardGroup>
				</div>
			</div>
		</section>
	);
}

export default Cards;
