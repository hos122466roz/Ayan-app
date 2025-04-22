import Head from "../components/head/Head"
import cover from "../../../public/image/head/top-view-tasty-kebab-plate-withd-copy-space.jpg";
import Menu from "../components/menu/Menu";
import getMenu from "../actions/getMenu";
const Menus=async()=>{
      const getMenus = await getMenu();
    return <>
    <Head cover={cover} title="منو"/>
    <Menu itemMenu={getMenus}/>
    </>
}
export default Menus