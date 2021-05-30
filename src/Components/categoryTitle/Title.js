import titleStyles from './Title.module.css';

const Title = (props) => (
	
	<div className={titleStyles.categoryName} style={{backgroundImage: "url(assets/titleBanner/"+props.image+")"}}>
		<h1 className={titleStyles.title}>{props.text}</h1>
	</div>
);

export default Title;
