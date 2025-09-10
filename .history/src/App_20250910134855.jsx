function App() {
	return (
		<div>
			<h1>My blog</h1>
			<BlogEntry
				title='React is awesome'
				summary='Lorem ipsum dolor sit amet, consectetur
				adipisicing elit. Maxime, nostrum sed facilis
				eos officia inventore minus? Hic maiores
				laboriosam esse doloremque eveniet nesciunt,
				illum ipsum optio aspernatur tempora sequi
				fugiat.'
			/>
			<BlogEntry
				title='Learn Web Development'
				summary='Lorem ipsum dolor sit amet, consectetur
				adipisicing elit. Maxime, nostrum sed facilis
				eos officia inventore minus? Hic maiores
				laboriosam esse doloremque eveniet nesciunt,
				illum ipsum optio aspernatur tempora sequi
				fugiat.'
			/>
			<BlogEntry
				title='UI/UX Design Process'
				summary='Lorem ipsum dolor sit amet, consectetur
				adipisicing elit. Maxime, nostrum sed facilis
				eos officia inventore minus? Hic maiores
				laboriosam esse doloremque eveniet nesciunt,
				illum ipsum optio aspernatur tempora sequi
				fugiat.'
			/>
		</div>
	);
}

function BlogEntry(props) {
	return (
		<div>
			<h2> "GETTING started"</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur
				adipisicing elit. Maxime, nostrum sed facilis
				eos officia inventore minus? Hic maiores
				laboriosam esse doloremque eveniet nesciunt,
				illum ipsum optio aspernatur tempora sequi
				fugiat.
			</p>
			<button>Click here!</button>
		</div>
	);
}

export default App;
