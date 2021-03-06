import React from 'react'
import ReactDOM from 'react-dom'

var app = function() {

	var Body = React.createClass({
		render: function() {
			return(
				<div>
					<Header />
					<ContentContainer />
					<Footer />
				</div>
			)
		}
	})


	var Header = React.createClass({
		render: function() {
			return(
				<header>
					<h1>We are Cooking</h1><img src="images/logo.svg" className="logo" />
				</header>
			)
		}
	})

	var ContentContainer = React.createClass({
		render: function() {
			return (

				<div id="content-container">
					<div className="content">
						<Banner />
						<Heading />
						<Intro />
						<Shop />
					</div>
				</div>

			)
		}
	})

	var Banner = React.createClass({
		render: function() {
			return(

				<div className="banner">
					<img src="images/salad_image.jpg" />
				</div>

			)
		}
	})

	var Heading = React.createClass({
		render: function() {
			return(

				<div className="heading">
					<h2>Chicken, Pomegranate and Spinach Salad</h2>
					<sup>Recipe by <a href="http://www.filmoreandunion.com/recipe-of-the-week-chicken-pomegranate-and-spinach-salad/">Filmore &amp; Union</a>, July 2015</sup>
				</div>

			)
		}
	})

	var Intro = React.createClass({
		render: function() {
			return (

				<div className="intro">
					<p>Treat yourself to this week's lavish salad, rich in colourful ingredients including calcium-packed spinach for strengthening your bones and lean, marinated chicken to pump up your protein intake. With a sweet kick of healthy honey and sharp hint of balsamic, the dressing alone is bursting with flavour and is the perfect accompaniment to smooth avocado, crisp spinach and crunchy red onion. Scattered with ruby pomegranate pearls, this dish is vibrant in colour and taste - perfect for a summer treat!</p> 
					<hr />
					<h3>Let's get Cooking!</h3>
					<ol>
						<li>Combine the marinade ingredients and generously coat the chicken on both sides. Leave it in the fridge for a minimum of two hours, but longer if you can.</li>
						<li>Place a ridged grill pan on medium-high heat and grill the chicken for about 5 minutes per side, turning once, until cooked through.</li>
						<li>Whilst the chicken is cooking, combine the spinach, pomegranate arils, red onion and avocado in a big salad bowl.</li>
						<li>Once the chicken is cooked, transfer to a chopping board, slice and mix in with the salad.</li>
						<li>In a separate bowl, combine the balsamic vinegar, raw honey, extra virgin olive oil and salt and pepper and drizzle over the salad</li>
						<li>Finally, serve and enjoy!</li>
					</ol>
					<hr className="last" />
				</div>

			)
		}
	})

	var Shop = React.createClass({
		render: function() {
			return (

				<div className="shop">
					<h3>Have it handy...</h3>

					<strong>For the marinade:</strong>

					<ul>
						<li>2 tbsp freshly squeezed lemon juice</li>
						<li>1 tsp fresh oregano, chopped</li>
						<li>1 tsp garlic, crushed</li>
						<li>Pinch of salt and pepper to taste</li>
					</ul>

					<strong>For the salad:</strong>
					<ul>
						<li>6oz baby spinach</li>
						<li>4 chicken breasts</li>
						<li>Handful of pomegranate arils</li>
						<li>&frac12; red onion, thinly sliced</li>
						<li>1 avocado, chopped</li>
					</ul>

					<strong>For the dressing:</strong>
					<ul>
						<li>1 tbsp balsamic vinegar</li>
						<li>1 tsp raw honey</li>
						<li>2 tbsp extra virgin olive oil</li>
						<li>Salt and pepper, to taste</li>
					</ul>
				</div>

			)
		}
	})

	var Footer = React.createClass({
		render: function() {
			return(

				<footer>
					<div className="credits">Made for "The Iron Yard" | Images: Pexels.com | Recipe: filmoreandunion.com</div>
				</footer>

			)
		}
	})

	ReactDOM.render(<Body />, document.querySelector('.container'))
}

app()