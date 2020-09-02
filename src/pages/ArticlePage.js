import React, { useState, useEffect } from 'react';
import ArticlesList from '../components/ArticlesList';
import NotFoundPage from './NotFoundPage';
import articleContent from './article-content';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentForm from '../components/AddCommentForm';



const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body);
        }
        fetchData();
    }, [name]);

    if (!article) return <NotFoundPage />

    if (article.name == 'tipping')
    return (
        <>
        <img style={{maxWidth: "400px", maxHeight: "280px"}} src= "https://cdn.vox-cdn.com/thumbor/nTfe0garfV95gbEUCZcfC-PeSZA=/0x0:2000x1335/800x800/filters:focal(840x508:1160x828):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66822592/Dina_Avila_Han_Oak_8479.0.jpg" /> 
        <h1>{article.title}</h1>
        <UpvotesSection articleName = {name} upvotes = {articleInfo.upvotes} setArticleInfo = {setArticleInfo}  /> 
        {article.content.map((paragraph, key) => (
            <p key={key}>{paragraph}</p>
        ))}
        <CommentsList comments={articleInfo.comments} />
        <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
        </>
    );
    if (article.name == 'criminally-underrated')
    return (
        <>
        <img style={{maxWidth: "400px", maxHeight: "280px"}} src="https://cdn.vox-cdn.com/thumbor/Wq_DPDTWrUA8GuXTtz3ioZy0wPM=/0x0:4032x3024/500x375/filters:format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66618099/2020_03_19_04.47.32_2.8.jpg"  />
        <h1>{article.title}</h1>
        <UpvotesSection articleName = {name} upvotes = {articleInfo.upvotes} setArticleInfo = {setArticleInfo} />
        {article.content.map((paragraph, key) => (
            <p key={key}>{paragraph}</p>
        ))}
        <CommentsList comments={articleInfo.comments} />
        <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
        </>
    );
        if (article.name == 'cart-wars')
        return (
            <>
            <img style={{width: "500px", maxHeight: "280px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTIUoH_y-3_MD_dL-FPeZG_VLCgDz9VeSdKcMNgfv93rOgMbmC" />
            <h1>{article.title}</h1>
            <UpvotesSection articleName = {name} upvotes = {articleInfo.upvotes} setArticleInfo = {setArticleInfo} />
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <CommentsList comments={articleInfo.comments} />
            <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
            </>
    );


}

export default ArticlePage;