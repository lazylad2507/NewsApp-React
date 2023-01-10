import React from 'react';

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="card">
            <img src={!imageUrl ? "https://as1.ftcdn.net/v2/jpg/00/35/14/24/1000_F_35142430_eyitDTBm1RAK9w4eJWjwhnDmzF7jvb5P.jpg" : imageUrl} className="card-img-top" alt="news_picture" style={{ object: 'fit: cover', height: '15vw' }} />
            <div className="card-body d-flex flex-column justify-content-between">
                <div className="container d-flex position-absolute justify-content-end p-0" style={{ right: '0', top: '0' }}>
                    <span className=" badge rounded-pill bg-primary">
                        {source}
                    </span>
                </div>
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                <div className="card-footer p-0" style={{ background: 'none', border: 'none' }}>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-primary btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem;

