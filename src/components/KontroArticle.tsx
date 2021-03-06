import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle } from '@ionic/react';
import { ControversyArticle } from '../Types';
import './KontroArticle.css';
import '../index.css';

interface ContainerProps {
	article: ControversyArticle;
}

const KontroArticle: React.FC<ContainerProps> = ({ article }: ContainerProps) => {
	const publisherLogo = `../assets/image/${article.publisher}.png`;
	return (
		<IonCard className="article-card" href={String(article.url)}>
			<img className="publisher-image" src={publisherLogo} alt={article.publisher}></img>
			<img className="article-image" src={String(article.image)} alt={article.label}></img>
			<IonCardHeader className="article-header">
				<IonCardSubtitle className="article-label">{article.label}</IonCardSubtitle>
			</IonCardHeader>
		</IonCard>
	);
};

export default KontroArticle;
