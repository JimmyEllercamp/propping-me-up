const PageHeading = (props) => {
    return (
    <header>
        {/* {Props stuff here bruv, mebbeh some components, JSX, something to display} */}
        {props.children}
        <p>
            This will appear in a place soon!
        </p>
    </header>
    )
}

export default PageHeading;