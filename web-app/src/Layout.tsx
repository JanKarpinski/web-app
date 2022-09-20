import MainNav from "./MainNav";
import classes from "./Layout.module.css"

function Layout(props:any){
    return(
    <div className={classes.mainus}>
        <MainNav />
        <main>
            {props.children}
        </main>

    </div>
    )
}

export default Layout;
