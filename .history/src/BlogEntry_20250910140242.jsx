function BlogEntry(props) {
	const buttonLabel = "Read more...";

	return (
		<div>
			<h2> {props.title}</h2>
			<p>{props.summary}</p>
			<button>Click here!</button>
		</div>
	);
}

export default BlogEntry;
