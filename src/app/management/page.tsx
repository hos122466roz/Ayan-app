import React from "react";
import getCurrentUser from "../actions/getCurrentUser";
import Management from "../components/management/Management";
import Head from "../components/head/Head";
import cover from "../../../public/image/head/top-view-tasty-kebab-plate-withd-copy-space.jpg";
import getMenu from "../actions/getMenu";

const Page = async () => {
  const currentUser = await getCurrentUser();
  const getMenus = await getMenu();

  return (
    <div>
      <Head cover={cover} title="مدیریت" />

      <Management currentUser={currentUser} itemMenu={getMenus} />
    </div>
  );
};

export default Page;
