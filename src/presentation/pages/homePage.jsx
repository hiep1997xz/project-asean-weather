const HomePage = ({ Header, Footer, HomeBody }) => {
    return (
        <>
            <div id="content">
                <div className="container-fluid">
                    <div className="row">
                        <Header />
                    </div>
                    <div className="row">
                        <HomeBody />
                    </div>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default HomePage;