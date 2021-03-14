import titleStyles from './Title.module.css';

const Title = (props) => (
	<div className={titleStyles.categoryName}>
		<h1>{props.text}</h1> 
	</div>
);

export default Title;
