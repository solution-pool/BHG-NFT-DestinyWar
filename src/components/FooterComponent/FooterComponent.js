import './FooterComponent.scss';

export const FooterComponent = () => {
    return (
        <section className="footerComponent">
            <div className="footerComponent__icons">
                <a href="https://www.facebook.com/gaming/DestinyWarNFTGame"><i className="fab fa-facebook"></i></a>
                <a href="https://discord.gg/v3SbRprrnP"><i className="fab fa-discord"></i></a>
                <a href="#javascript;"><i className="fab fa-instagram"></i></a>
                <a href="https://t.me/destinywarnftgame"><i className="fab fa-telegram"></i></a>
				<a href="#javascript;"><i className="fab fa-youtube"></i></a>
            </div>

            <div className="footerComponent__copyright">
                <div> Copyright 2021 © All rights Reserved. </div>
                <div> Design by Destiny War Inc. </div>
            </div>
        </section>
    )
}

export default FooterComponent;