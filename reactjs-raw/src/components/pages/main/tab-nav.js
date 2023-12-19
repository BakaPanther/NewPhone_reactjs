function TabNav(props) {
    return (
        <>
            <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#man" role="tab">{props.data.ten}</a></li>
        </>
    )
}
export default TabNav;