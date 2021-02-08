
const PageWrap = ({ title, children }) => {
    return (
        <main>
            <div className="container">
                {title && <h1>{title}</h1>}
                {children}
            </div>
        </main>
    )
}

export default PageWrap
