const Socialink = props => {
    let SocialData = require('./SocialData.json');
    return SocialData.map(img => (
        <a href={img.href} key={img.id} className="" aria-label="" target="_blank" rel="noopener noreferrer">
            <img src={img.src} alt={img.alt} />
        </a>
    ));
};

export default Socialink;
